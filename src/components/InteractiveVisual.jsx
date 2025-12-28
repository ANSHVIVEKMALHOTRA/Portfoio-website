import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const InteractiveVisual = () => {
    const ref = useRef(null);

    // Mouse position values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring animation for tilt
    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    // Transform mouse position to rotation values (3D Tilt)
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        // Calculate mouse position relative to the center of the element (-0.5 to 0.5)
        const width = rect.width;
        const height = rect.height;

        const mouseXVal = (e.clientX - rect.left) / width - 0.5;
        const mouseYVal = (e.clientY - rect.top) / height - 0.5;

        x.set(mouseXVal);
        y.set(mouseYVal);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                width: "600px",
                height: "600px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                perspective: "1000px", // Essential for 3D effect
                cursor: "pointer"
            }}
        >
            <motion.div
                style={{
                    width: "100%",
                    height: "100%",
                    rotateX: rotateX,
                    rotateY: rotateY,
                    transformStyle: "preserve-3d",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative" // Ensure children position correctly
                }}
            >
                {/* NEW Overlay Lottie: Non-interactive */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 10,
                    pointerEvents: 'none',
                    transform: 'translateZ(30px)' // Slightly in front
                }}>
                    <DotLottieReact
                        src="https://lottie.host/9e6fd7e9-2361-4f8d-ba64-06cfde5fda20/vmM9Zq9Pdi.lottie"
                        loop
                        autoplay
                    />
                </div>

                {/* Original Lottie Animation: Developer at Desk */}
                <div style={{ width: '100%', height: '100%', transform: 'translateZ(20px)' }}>
                    <DotLottieReact
                        src="https://lottie.host/56a29774-6330-4965-a823-146603f90117/2L3A32L7Y6.json"
                        loop
                        autoplay
                    />
                </div>

                {/* Optional Glow behind */}
                <motion.div
                    animate={{ opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        background: "radial-gradient(circle, var(--accent-color) 0%, transparent 70%)",
                        opacity: 0.3,
                        filter: "blur(80px)",
                        zIndex: -1,
                        transform: "translateZ(-20px)"
                    }}
                />
            </motion.div>
        </motion.div>
    );
};

export default InteractiveVisual;
