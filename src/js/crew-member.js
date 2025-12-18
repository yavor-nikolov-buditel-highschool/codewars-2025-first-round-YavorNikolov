import { CREW } from "./crew-data.js";

document.addEventListener("DOMContentLoaded", () => {
    const id = new URLSearchParams(location.search).get("id");
    const m = CREW[id];
    if (!m) return;

    memberTitle.textContent = m.title;
    portrait.src = m.image;
    story.innerHTML = m.story;

    /* =========================
       HUMAN VS AI TOGGLING
    ========================== */
    const humanMetrics = document.getElementById("humanMetrics");
    const aiSystems = document.getElementById("aiSystems");
    const aiTrait = document.getElementById("aiTraitFull");
    const humanTrait = document.getElementById("humanTrait");

    if (m.type === "ai") {
        humanMetrics.remove();
        aiSystems.classList.remove("hidden");
        aiTrait.classList.remove("hidden");
    } else {
        humanTrait.classList.remove("hidden");
    }

    /* =========================
       HEART — HUMANS ONLY
    ========================== */
    if (m.type === "human") {
        let bpm = m.heart[0];
        setInterval(() => {
            bpm = Math.floor(
                m.heart[0] + Math.random() * (m.heart[1] - m.heart[0])
            );
            heartRate.textContent = bpm;
            heartIcon.animate(
                [
                    { transform: "scale(1)" },
                    { transform: "scale(1.4)" },
                    { transform: "scale(1)" }
                ],
                { duration: 400 }
            );
        }, 900);
    }

    /* =========================
       HUMAN BARS
    ========================== */
    function animateBar(el, min, max, vol = 5) {
        let v = (min + max) / 2;
        setInterval(() => {
            v += (Math.random() - 0.5) * vol;
            v = Math.max(min, Math.min(max, v));
            el.style.width = v + "%";
        }, 1200);
    }

    if (m.type === "human") {
        animateBar(batteryBar, ...m.battery, 1);
        animateBar(oxygenBar, ...m.oxygen, 3);
        animateBar(pressureBar, ...m.pressure, 2);
    }

    /* =========================
       GRAPHS
    ========================== */
    if (m.type === "ai") {
        traitLabel.textContent = m.trait.label;
        import("./iris-graph.js").then(mod => mod.initIrisGraph(traitPath));
        import("./iris-systems.js").then(mod => mod.initIrisSystems());
    } else {
        humanTraitLabel.textContent = m.trait.label;
        import("./human-graph.js").then(mod =>
            mod.initHumanGraph(humanTraitPath, m.trait)
        );
    }
});
