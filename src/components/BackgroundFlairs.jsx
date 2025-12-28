
import React from 'react';
import { motion } from 'framer-motion';
import './BackgroundFlairs.css';

const BackgroundFlairs = ({ activeSection = 'home' }) => {
    // Configuration for flair positions based on the active section
    // Using standard CSS units for positions
    const flairConfig = {
        home: {
            blue: { top: '10%', right: '-10%', left: 'auto', bottom: 'auto', width: '50vw', height: '50vw' },
            dark: { bottom: '-20%', left: '-20%', top: 'auto', right: 'auto', width: '60vw', height: '60vw' },
            white: { top: '-10%', left: '-10%', right: 'auto', bottom: 'auto', width: '40vw', height: '40vw' }
        },
        about: {
            blue: { bottom: '0%', right: '-10%', left: 'auto', top: 'auto', width: '45vw', height: '45vw' },
            dark: { top: '0%', left: '-10%', bottom: 'auto', right: 'auto', width: '55vw', height: '55vw' },
            white: { top: '40%', right: '10%', left: 'auto', bottom: 'auto', width: '30vw', height: '30vw' }
        },
        education: {
            blue: { top: '20%', left: '-15%', right: 'auto', bottom: 'auto', width: '40vw', height: '40vw' },
            dark: { bottom: '10%', right: '-5%', left: 'auto', top: 'auto', width: '50vw', height: '50vw' },
            white: { top: '10%', right: '20%', left: 'auto', bottom: 'auto', width: '25vw', height: '25vw' }
        },
        skills: {
            blue: { top: '0%', left: '30%', right: 'auto', bottom: 'auto', width: '60vw', height: '60vw' },
            dark: { bottom: '-10%', right: '-20%', left: 'auto', top: 'auto', width: '50vw', height: '50vw' },
            white: { bottom: '20%', left: '-10%', top: 'auto', right: 'auto', width: '35vw', height: '35vw' }
        },
        experience: {
            blue: { top: '30%', right: '-15%', left: 'auto', bottom: 'auto', width: '45vw', height: '45vw' },
            dark: { top: '10%', left: '-10%', right: 'auto', bottom: 'auto', width: '55vw', height: '55vw' },
            white: { bottom: '10%', left: '20%', top: 'auto', right: 'auto', width: '30vw', height: '30vw' }
        },
        projects: {
            blue: { bottom: '10%', left: '-5%', right: 'auto', top: 'auto', width: '50vw', height: '50vw' },
            dark: { top: '-10%', right: '-10%', left: 'auto', bottom: 'auto', width: '60vw', height: '60vw' },
            white: { top: '40%', left: '30%', right: 'auto', bottom: 'auto', width: '40vw', height: '40vw' }
        },
        leadership: {
            blue: { top: '10%', right: '10%', left: 'auto', bottom: 'auto', width: '40vw', height: '40vw' },
            dark: { bottom: '0%', left: '0%', right: 'auto', top: 'auto', width: '50vw', height: '50vw' },
            white: { top: '10%', left: '10%', right: 'auto', bottom: 'auto', width: '30vw', height: '30vw' }
        },
        // Fallback
        default: {
            blue: { top: '10%', right: '-10%', left: 'auto', bottom: 'auto', width: '50vw', height: '50vw' },
            dark: { bottom: '-20%', left: '-20%', top: 'auto', right: 'auto', width: '60vw', height: '60vw' },
            white: { top: '-10%', left: '-10%', right: 'auto', bottom: 'auto', width: '40vw', height: '40vw' }
        }
    };

    const currentConfig = flairConfig[activeSection] || flairConfig.default;

    // Transition settings for smooth movement
    const springTransition = {
        type: "spring",
        stiffness: 40,
        damping: 20,
        mass: 1
        // duration: 2 // Fallback if spring feels off, but spring is usually better for "alive" feel
    };

    return (
        <div className="background-flairs-container">
            {/* White Flair */}
            <motion.div
                className="flair flair-white"
                animate={{
                    top: currentConfig.white.top,
                    left: currentConfig.white.left,
                    right: currentConfig.white.right,
                    bottom: currentConfig.white.bottom,
                    width: currentConfig.white.width,
                    height: currentConfig.white.height
                }}
                transition={springTransition}
            />

            {/* Blue Flair */}
            <motion.div
                className="flair flair-blue"
                animate={{
                    top: currentConfig.blue.top,
                    left: currentConfig.blue.left,
                    right: currentConfig.blue.right,
                    bottom: currentConfig.blue.bottom,
                    width: currentConfig.blue.width,
                    height: currentConfig.blue.height
                }}
                transition={{ ...springTransition, delay: 0.1 }} // Slight delay for organic feel
            />

            {/* Dark Flair */}
            <motion.div
                className="flair flair-dark"
                animate={{
                    top: currentConfig.dark.top,
                    left: currentConfig.dark.left,
                    right: currentConfig.dark.right,
                    bottom: currentConfig.dark.bottom,
                    width: currentConfig.dark.width,
                    height: currentConfig.dark.height
                }}
                transition={{ ...springTransition, delay: 0.2 }} // More delay
            />
        </div>
    );
};

export default BackgroundFlairs;
