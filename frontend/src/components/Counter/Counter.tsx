import React, { useEffect, useState } from 'react';

interface ICounter {
    start: number;
    end: number;
    duration: number;
    onComplete?: () => void;
}

const Counter: React.FC<ICounter> = ({ start, end, duration, onComplete }) => {
    const [count, setCount] = useState(start);

    useEffect(() => {
        let startTime: number;
        const increment = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            setCount(Math.floor(start + (end - start) * percentage));

            if (percentage < 1) {
                requestAnimationFrame(increment);
            } else if (onComplete) {
                onComplete();
            }
        };

        requestAnimationFrame(increment);
    }, [start, end, duration, onComplete]);

    return <span>{count}</span>;
};

export default Counter;