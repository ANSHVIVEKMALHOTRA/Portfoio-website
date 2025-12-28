import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState('default');

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    useEffect(() => {
        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button') || e.target.classList.contains('interactive')) {
                setCursorVariant('hover');
            } else {
                setCursorVariant('default');
            }
        };

        window.addEventListener('mouseover', handleMouseOver);
        return () => window.removeEventListener('mouseover', handleMouseOver);
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 5,
            y: mousePosition.y - 5,
            height: 10,
            width: 10,
            backgroundColor: "var(--accent-color)",
            mixBlendMode: "normal"
        },
        hover: {
            x: mousePosition.x - 10,
            y: mousePosition.y - 10,
            height: 20,
            width: 20,
            backgroundColor: "var(--accent-color)",
            mixBlendMode: "difference"
        }
    };

    return (
        <motion.div
            className='cursor-dot'
            variants={variants}
            animate={cursorVariant}
            transition={{
                type: "spring",
                stiffness: 1500, // Very snappy
                damping: 40,
                mass: 0.2
            }}
        />
    );
};

export default CustomCursor;
