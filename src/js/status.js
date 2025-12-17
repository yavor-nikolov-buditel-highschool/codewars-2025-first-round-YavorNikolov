/* =======================
   METRICS
======================= */
function fluctuate(id, base) {
    const el = document.getElementById(id);
    setInterval(() => {
        el.textContent = `${base + Math.floor(Math.random() * 6 - 3)}%`;
    }, 1200);
}

fluctuate("powerVal", 92);
fluctuate("oxygenVal", 84);
fluctuate("shieldVal", 76);

/* =======================
   TELEMETRY SIGNAL + BARS
======================= */
const signalPath = document.getElementById("signalPath");
const barsContainer = document.querySelector(".full-bars");

const BAR_COUNT = 80;
for (let i = 0; i < BAR_COUNT; i++) {
    const b = document.createElement("div");
    b.className = "bar";
    barsContainer.appendChild(b);
}

function generateSignal() {
    let d = "M 0 100";
    for (let i = 0; i <= 80; i++) {
        const x = (i / 80) * 1000;
        const y = 100 + Math.sin(i * 0.35 + Date.now() * 0.002) * 45;
        d += ` L ${x} ${y}`;
    }
    signalPath.setAttribute("d", d);

    document.querySelectorAll(".bar").forEach(bar => {
        bar.style.height = `${40 + Math.random() * 180}px`;
    });
}

setInterval(generateSignal, 120);

/* =======================
   SYSTEM LOG
======================= */
const log = document.querySelector(".log");
const messages = [
    "Evasive thrusters engaged",
    "Hull shear detected",
    "Asteroid proximity alert",
    "Course correction applied",
    "Subspace turbulence rising",
    "Shield redistribution active"
];

setInterval(() => {
    const p = document.createElement("p");
    p.textContent = `> ${messages[Math.floor(Math.random() * messages.length)]}`;
    p.style.color = Math.random() > 0.8 ? "#fbbf24" : "#67e8f9";
    log.prepend(p);
    if (log.children.length > 18) log.lastChild.remove();
}, 1100);

/* =======================
   VELOCITY GRAPH
======================= */
const velocityPath = document.getElementById("velocityPath");
let t = 0;

function updateVelocity() {
    let d = "M 0 150";
    for (let i = 0; i <= 120; i++) {
        const x = (i / 120) * 1200;
        const y = 150 + Math.sin(t + i * 0.25) * 70;
        d += ` L ${x} ${y}`;
    }
    velocityPath.setAttribute("d", d);
    t += 0.06;
    requestAnimationFrame(updateVelocity);
}

updateVelocity();

/* =======================
   COLLISION AVOIDANCE RADAR
======================= */

const radar = document.querySelector(".coord-radar");
const radarSize = 300;
const center = radarSize / 2;
const dangerRadius = 60;

const contacts = [];
const MAX_CONTACTS = 20;

const TYPES = {
    asteroid: {
        speed: [0.0004, 0.0008],
        spawnRadius: [140, 180]
    },
    meteor: {
        speed: [0.006, 0.01],
        spawnRadius: [180, 200]
    },
    dust: {
        speed: [0.00005, 0.0002],
        spawnRadius: [120, 190]
    },
    unknown: {
        speed: [0.001, 0.0025],
        spawnRadius: [140, 190]
    }
};

function spawnContact() {
    const typeKeys = Object.keys(TYPES);
    const type = typeKeys[Math.floor(Math.random() * typeKeys.length)];
    const cfg = TYPES[type];

    const el = document.createElement("span");
    el.className = `dot ${type}`;
    radar.appendChild(el);

    const angle = Math.random() * Math.PI * 2;
    const radius =
        cfg.spawnRadius[0] +
        Math.random() * (cfg.spawnRadius[1] - cfg.spawnRadius[0]);

    contacts.push({
        el,
        type,
        angle,
        radius,
        speed:
            cfg.speed[0] +
            Math.random() * (cfg.speed[1] - cfg.speed[0]),
        phase: Math.random() * Math.PI * 2
    });
}

function updateRadar() {
    contacts.forEach((c, i) => {
        c.angle += c.speed;

        switch (c.type) {
            case "asteroid":
                c.radius -= 0.05;
                break;

            case "meteor":
                c.radius -= 2.6;
                break;

            case "dust":
                c.angle += Math.sin(Date.now() * 0.002 + c.phase) * 0.003;
                c.radius += Math.sin(Date.now() * 0.001 + c.phase) * 0.15;
                break;

            case "unknown":
                c.angle += Math.sin(Date.now() * 0.003 + c.phase) * 0.02;
                c.radius -= Math.sin(Date.now() * 0.002 + c.phase) * 0.4;
                break;
        }

        const x = center + Math.cos(c.angle) * c.radius;
        const y = center + Math.sin(c.angle) * c.radius;

        c.el.style.transform = `translate(${x}px, ${y}px)`;

        // Danger zone detection
        if (c.radius < dangerRadius) {
            c.el.classList.add("danger");
        } else {
            c.el.classList.remove("danger");
        }

        // Despawn
        if (c.radius < 8 || c.radius > 210) {
            c.el.remove();
            contacts.splice(i, 1);
        }
    });

    requestAnimationFrame(updateRadar);
}

// Spawn loop
setInterval(() => {
    if (contacts.length < MAX_CONTACTS) {
        spawnContact();
    }
}, 700);

updateRadar();
