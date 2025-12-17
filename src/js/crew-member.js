import { CREW } from "./crew-data.js";

document.addEventListener("DOMContentLoaded", () => {

    const id = new URLSearchParams(location.search).get("id");
    const m = CREW[id];
    if (!m) return;

    memberTitle.textContent = m.title;
    portrait.src = m.image;
    story.innerHTML = m.story;
    traitLabel.textContent = m.trait.label;

    /* =========================
       HEART — HUMANS ONLY
    ========================== */
    const heartMetric = document.querySelector(".metric");

    if (m.type === "human") {
        let bpm = m.heart[0];

        function pulse() {
            heartIcon.animate(
                [
                    { transform: "scale(1)" },
                    { transform: "scale(1.4)" },
                    { transform: "scale(1)" }
                ],
                { duration: 400, easing: "ease-out" }
            );
        }

        setInterval(() => {
            bpm = Math.floor(
                m.heart[0] + Math.random() * (m.heart[1] - m.heart[0])
            );
            heartRate.textContent = bpm;
            pulse();
        }, 900);

    } else {
        heartMetric.remove();
    }

    /* =========================
       BARS
    ========================== */
    function animateBar(el, min, max, volatility = 5) {
        let v = (min + max) / 2;
        setInterval(() => {
            v += (Math.random() - 0.5) * volatility;
            v = Math.max(min, Math.min(max, v));
            el.style.width = v + "%";
        }, 1200);
    }

    if (m.battery) animateBar(batteryBar, ...m.battery, 1);
    if (m.oxygen) animateBar(oxygenBar, ...m.oxygen, 3);
    if (m.pressure) animateBar(pressureBar, ...m.pressure, 2);

    if (m.type === "ai") {
        oxygenBar.parentElement.remove();
        pressureBar.parentElement.remove();
    }

    /* =========================
       GRAPH ROUTING
    ========================== */
    if (m.type === "ai") {
        import("./iris-graph.js").then(mod => mod.initIrisGraph(traitPath));
    } else {
        import("./human-graph.js").then(mod =>
            mod.initHumanGraph(traitPath, m.trait)
        );
    }
});
