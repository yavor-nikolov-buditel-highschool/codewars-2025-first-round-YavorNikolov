export function initIrisGraph(path) {
    let t = 0;

    function update() {
        let d = "";

        for (let i = 0; i <= 120; i++) {
            const x = (i / 120) * 1200;
            const y =
                120 +
                Math.sin(i * 0.15 + t) * 60 +
                Math.sin(i * 0.03 + t * 2) * 40;

            if (i === 0) {
                // Start path EXACTLY at first computed point
                d = `M ${x} ${y}`;
            } else {
                d += ` L ${x} ${y}`;
            }
        }

        path.setAttribute("d", d);
        t += 0.008;
        requestAnimationFrame(update);
    }

    update();
}
