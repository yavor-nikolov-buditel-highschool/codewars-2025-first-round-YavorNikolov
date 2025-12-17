export function initHumanGraph(path, trait) {
    let t = Math.random() * 100;
    const height = 240;
    const mid = height / 2;
    const amp = height * 0.35;

    function update() {
        let d = `M 0 ${mid}`;
        for (let i = 0; i <= 120; i++) {
            const x = (i / 120) * 1200;
            const y =
                mid +
                Math.sin(t + i * trait.speed) * amp +
                Math.sin(i * 0.8) * amp * 0.25;

            d += ` L ${x} ${Math.max(10, Math.min(230, y))}`;
        }
        path.setAttribute("d", d);
        t += trait.drift;
        requestAnimationFrame(update);
    }

    update();
}
