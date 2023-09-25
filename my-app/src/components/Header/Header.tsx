import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Header.css';

const Header: React.FC = () => {
    const [showHeader, setShowHeader] = useState(false);
    const subtextControls = useAnimation();

    useEffect(() => {
        setTimeout(() => {
            setShowHeader(true);
            subtextControls.start({ opacity: 0, y: '-20px' }); // Animate subtext to disappear
        }, 2500);
    }, [subtextControls]);

    return (
        <header>
            <motion.div
                initial={{ opacity: 1, scale: 1, y: '0%' }}
                animate={{ scale: showHeader ? 0.2 : 1, y: showHeader ? '-45%' : '0%' }}
                transition={{ duration: 0.8 }}
                className={`logo ${showHeader ? 'small' : ''}`}
            >
                <div className="logo-text">ARTIFYNITURE</div>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={subtextControls}
                    transition={{ duration: 0.5 }}
                    className="subtext"
                >
                    MEUBLE LUXE
                </motion.div>
            </motion.div>
        </header>
    );
};

export default Header;
