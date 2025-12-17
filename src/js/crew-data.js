export const CREW = {
    elara: {
        type: "human",
        title: "DR. ELARA VOSS — QUANTUM NAVIGATOR",
        image: "src/assets/mem1.jpg",
        story: `
Elara navigates probability rather than distance.
She reports that the ship <strong>responds emotionally</strong> to her presence.
Time around her exhibits minor shear.
        `,
        heart: [68, 94],
        battery: [85, 100],
        oxygen: [95, 100],
        pressure: [110, 130],
        trait: {
            label: "TEMPORAL DRIFT",
            speed: 0.18,
            drift: 0.04
        }
    },

    jax: {
        type: "human",
        title: "COMMANDER JAX CALDER — COMMAND",
        image: "src/assets/mem2.jpg",
        story: `
Calder’s pulse stabilizes the crew.
His vitals remain steady during hull breaches.
<strong>Stress transfers outward.</strong>
        `,
        heart: [52, 74],
        battery: [92, 100],
        oxygen: [96, 100],
        pressure: [115, 128],
        trait: {
            label: "TACTICAL DOMINANCE",
            speed: 0.12,
            drift: 0.02
        }
    },

    mira: {
        type: "human",
        title: "LT. MIRA KADE — ENGINEERING LEAD",
        image: "src/assets/mem5.jpg",
        story: `
Kade repairs systems before alarms finish sounding.
Radiation exposure and sleep deprivation remain within tolerance.
        `,
        heart: [70, 110],
        battery: [65, 90],
        oxygen: [93, 100],
        pressure: [105, 135],
        trait: {
            label: "SYSTEM STRESS LOAD",
            speed: 0.15,
            drift: 0.035
        }
    },

    theo: {
        type: "human",
        title: "ENSIGN THEO RYN — RECON SPECIALIST",
        image: "src/assets/mem3.jpg",
        story: `
Ryn’s vitals destabilize when directly observed.
Motion sensors frequently lose lock on his position.
        `,
        heart: [58, 88],
        battery: [70, 95],
        oxygen: [94, 100],
        pressure: [108, 125],
        trait: {
            label: "STEALTH COHERENCE",
            speed: 0.2,
            drift: 0.045
        }
    },

    iris: {
        type: "ai",
        title: "IA-7 “IRIS” — SENTIENT SYSTEM",
        image: "src/assets/mem4.jpg",
        story: `
Iris monitors the crew continuously.
She has begun monitoring <strong>herself</strong>.
No permission request logged.
        `,
        battery: [99, 100],
        trait: {
            label: "SELF-AWARENESS INDEX"
        }
    }
};
