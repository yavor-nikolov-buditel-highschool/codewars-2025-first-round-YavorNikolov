document.querySelectorAll('[data-member]').forEach((card, index) => {
    const isAI = card.dataset.ai === "true";

    // Seed variance per card so members feel unique
    const seed = Math.random() * 10 + index;

    const bars = {
        cog: isAI ? 92 + Math.random() * 4 : 70 + Math.random() * 20,
        phys: isAI ? 85 + Math.random() * 3 : 65 + Math.random() * 25,
        oxy: isAI ? 100 : 92 + Math.random() * 6
    };

    const spans = {
        cog: card.querySelector('[data-type="cog"]'),
        phys: card.querySelector('[data-type="phys"]'),
        oxy: card.querySelector('[data-type="oxy"]')
    };

    // If markup is incomplete, fail silently
    if (!spans.cog || !spans.phys || !spans.oxy) return;

    function update() {
        /* =========================
           FLUCTUATION LOGIC
        ========================== */

        // AI fluctuates very slowly, humans fluctuate more
        bars.cog += (Math.random() - 0.5) * (isAI ? 0.6 : 5);
        bars.phys += (Math.random() - 0.5) * (isAI ? 0.4 : 4);

        // Oxygen logic
        if (!isAI) {
            // Humans slowly drift but recover
            bars.oxy += (Math.random() - 0.4) * 1.2;
        } else {
            // AI oxygen stays visually "locked"
            bars.oxy = 100;
        }

        /* =========================
           CLAMPING (IMPORTANT)
        ========================== */
        bars.cog = Math.max(10, Math.min(100, bars.cog));
        bars.phys = Math.max(10, Math.min(100, bars.phys));
        bars.oxy = Math.max(75, Math.min(100, bars.oxy));

        /* =========================
           APPLY TO DOM
        ========================== */
        Object.entries(bars).forEach(([key, value]) => {
            const el = spans[key];
            el.style.width = value.toFixed(1) + "%";

            if (value < 25 && !isAI) {
                el.classList.add("low");
            } else {
                el.classList.remove("low");
            }
        });

        /* =========================
           ORGANIC TIMING
        ========================== */
        setTimeout(
            update,
            800 + Math.random() * 1000 + seed * 20
        );
    }

    update();
});
