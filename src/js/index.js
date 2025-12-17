// LOADING TERMINAL
const terminal = document.getElementById("terminal");

if (terminal) {
    const lines = [
        "Initializing Deep Space Systems...",
        "Synchronizing Navigation Core...",
        "Engaging Life Support...",
        "Calibrating Existential Parameters...",
        "ISS PARADOX ONLINE."
    ];

    let line = 0, char = 0;

    function type() {
        if (line < lines.length) {
            if (char < lines[line].length) {
                terminal.textContent += lines[line][char++];
                setTimeout(type, 35);
            } else {
                terminal.textContent += "\n";
                line++;
                char = 0;
                setTimeout(type, 300);
            }
        } else {
            setTimeout(() => {
                document.getElementById("loading-screen").remove();
            }, 700);
        }
    }

    type();
}

// SWITCHES
document.querySelectorAll(".switch").forEach(sw => {
    sw.addEventListener("click", () => {
        sw.classList.toggle("on");
    });
});
// LIVE SYSTEM STATUS (COMMAND PAGE)
function liveBarByLabel(labelText, base) {
    const statuses = document.querySelectorAll(".status");

    statuses.forEach(status => {
        if (status.textContent.includes(labelText)) {
            const bar = status.querySelector(".bar-fill");

            const label = document.createElement("span");
            label.className = "text-xs text-cyan-400 font-mono";
            label.style.float = "right";
            label.textContent = `${base}%`;
            status.prepend(label);

            let current = base;

            setInterval(() => {
                const delta = Math.floor(Math.random() * 5 - 2);
                current = Math.min(100, Math.max(60, current + delta));

                bar.style.width = `${current}%`;
                label.textContent = `${current}%`;
            }, 1200);
        }
    });
}

liveBarByLabel("POWER", 92);
liveBarByLabel("OXYGEN", 84);
liveBarByLabel("SHIELDS", 73);

// COMMAND LOG SYSTEM
const log = document.getElementById("commandLog");

if (log) {
    const messages = [
        "Sensor sweep completed",
        "Quantum drift stabilized",
        "Minor hull resonance detected",
        "Life support variance corrected",
        "External signal ignored",
        "AI heuristic loop recalibrated",
        "Unknown object briefly phased",
        "Temporal echo dismissed"
    ];

    function addLog() {
        const p = document.createElement("p");
        p.className = "log-line";

        // Random severity
        const roll = Math.random();
        if (roll > 0.9) p.classList.add("critical");
        else if (roll > 0.75) p.classList.add("warn");

        p.textContent = `> ${messages[Math.floor(Math.random() * messages.length)]}`;

        log.appendChild(p);

        // Trim old logs
        if (log.children.length > 12) {
            log.removeChild(log.firstChild);
        }
        if (labelText === "SHIELDS" && current < 70) {
            bar.style.filter = "hue-rotate(30deg)";
        }

        log.scrollTop = log.scrollHeight;
    }

    setInterval(addLog, 1600);
}
