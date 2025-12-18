/* =========================
   CREW STAT SYSTEM (FINAL)
   Humans unchanged — IRIS special
========================= */

document.querySelectorAll('[data-member]').forEach(card => {
    const isAI = card.dataset.ai === "true";

    const bars = {
        cog: isAI ? 95 : 70 + Math.random() * 20,
        phys: isAI ? 80 : 65 + Math.random() * 25,
        oxy: 100
    };

    const spans = {
        cog: card.querySelector('[data-type="cog"]'),
        phys: card.querySelector('[data-type="phys"]'),
        oxy: card.querySelector('[data-type="oxy"]')
    };

    function update() {

        if (!isAI) {
            bars.cog += (Math.random() - 0.5) * 6;
            bars.phys += (Math.random() - 0.5) * 5;
            bars.oxy -= Math.random() * 0.8;
        }

        if (isAI) {
            bars.cog += (Math.random() - 0.5) * 1;
            bars.phys += (Math.random() - 0.5) * 1;
            bars.oxy += (Math.random() - 0.5) * 0.4;
        }

        bars.cog = Math.max(10, Math.min(100, bars.cog));
        bars.phys = Math.max(10, Math.min(100, bars.phys));
        bars.oxy = Math.max(40, Math.min(100, bars.oxy));

        Object.entries(bars).forEach(([key, value]) => {
            const el = spans[key];
            if (!el) return;

            el.style.width = value + "%";

            if (!isAI && value < 25) {
                el.classList.add("low");
            } else {
                el.classList.remove("low");
            }
        });

        setTimeout(update, 900 + Math.random() * 900);
    }

    update();
});

/* =========================
   IRIS LABEL OVERRIDE ONLY
========================= */

document.querySelectorAll('[data-member][data-ai="true"]').forEach(card => {
    const labels = card.querySelectorAll("label");
    if (labels.length >= 3) {
        labels[0].textContent = "CORE POWER";
        labels[1].textContent = "PROCESS LOAD";
        labels[2].textContent = "I/O SATURATION";
    }
});
