import { useEffect, useRef } from 'react';

export function useMousePosition() {
    const position = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (e) => {
            position.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener('mousemove', updatePosition);
        return () => window.removeEventListener('mousemove', updatePosition);
    }, []);

    return position;
}
