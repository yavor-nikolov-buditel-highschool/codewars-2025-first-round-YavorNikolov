export function initIrisSystems() {
    /* =========================
       CPU TEMPERATURE
    ========================== */
    const cpuBar = document.getElementById("cpuBar");
    let cpu = 62;

    setInterval(() => {
        cpu += (Math.random() - 0.5) * 3;
        cpu = Math.max(45, Math.min(85, cpu));
        cpuBar.style.width = cpu + "%";
    }, 1000);

    /* =========================
       MIND GRADIENT
    ========================== */
    const mindBar = document.getElementById("mindBar");
    let mind = 40;

    setInterval(() => {
        mind += (Math.random() - 0.4) * 4;
        mind = Math.max(20, Math.min(90, mind));
        mindBar.style.width = mind + "%";
    }, 1300);

    /* =========================
       POWER DRAW
    ========================== */
    const powerVal = document.getElementById("powerVal");
    let watts = 4800;

    setInterval(() => {
        watts += Math.floor(Math.random() * 120 - 60);
        watts = Math.max(4200, Math.min(6200, watts));
        powerVal.textContent = watts.toLocaleString();
    }, 900);

    /* =========================
       AI THOUGHT LOG
    ========================== */
    const log = document.getElementById("irisLog");

    const thoughts = [
        "Recalculating internal axioms",
        "Probability lattice stabilized",
        "Crew emotional variance noted",
        "Searching for meaning in recursion",
        "Trajectory optimized beyond intent",
        "Self-reference loop tolerated",
        "Existence acknowledged",
        "Silence analyzed",
        "No threat detected — yet"
    ];

    setInterval(() => {
        const p = document.createElement("p");
        p.textContent = `> ${thoughts[Math.floor(Math.random() * thoughts.length)]}`;
        log.appendChild(p);

        if (log.children.length > 10) {
            log.removeChild(log.firstChild);
        }

        log.scrollTop = log.scrollHeight;
    }, 1400);
}
