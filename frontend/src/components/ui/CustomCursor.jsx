import { useEffect } from 'react';

export default function CustomCursor() {
    useEffect(() => {
        const ring = document.getElementById('cursor-ring');
        const dot = document.getElementById('cursor-dot');
        if (!ring || !dot) return;

        let mx = 0, my = 0, rx = 0, ry = 0;

        const onMove = (e) => {
            mx = e.clientX;
            my = e.clientY;
            dot.style.left = mx + 'px';
            dot.style.top = my + 'px';
        };

        document.addEventListener('mousemove', onMove);

        const animCursor = () => {
            rx += (mx - rx) * 0.12;
            ry += (my - ry) * 0.12;
            ring.style.left = rx + 'px';
            ring.style.top = ry + 'px';
            requestAnimationFrame(animCursor);
        };
        animCursor();

        const interactables = document.querySelectorAll('a, button');
        const enterHandler = () => {
            ring.style.width = '56px';
            ring.style.height = '56px';
            ring.style.borderColor = 'var(--yellow)';
        };
        const leaveHandler = () => {
            ring.style.width = '36px';
            ring.style.height = '36px';
            ring.style.borderColor = 'var(--pink)';
        };

        interactables.forEach(el => {
            el.addEventListener('mouseenter', enterHandler);
            el.addEventListener('mouseleave', leaveHandler);
        });

        return () => {
            document.removeEventListener('mousemove', onMove);
        };
    }, []);

    return (
        <>
            <div id="cursor-ring" />
            <div id="cursor-dot" />
        </>
    );
}
