export function initIrisGraph(path) {
    let t = 0;

    function update() {
        let d = "";

        for (let i = 0; i <= 120; i++) {
            const x = (i / 120) * 1200;
            const y =
                120 +
                Math.sin(i * 0.15 + t) * 70 +
                Math.sin(i * 0.04 + t * 2) * 50;

            d += i === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`;
        }

        path.setAttribute("d", d);
        t += 0.008;
        requestAnimationFrame(update);
    }

    update();
}
