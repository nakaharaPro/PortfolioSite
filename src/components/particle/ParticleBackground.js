import { useEffect } from 'react';

const ParticlesBackground = () => {
    useEffect(() => {
        let particlesLoaded = false;

        const loadParticles = () => {
            if (window.particlesJS && !particlesLoaded) {
                window.particlesJS.load('particles-js', '/particles.json', function () {
                    console.log('particles.js loaded - callback');
                    particlesLoaded = true;
                });
            } else if (!particlesLoaded) {
                console.error("particles.js is not loaded, retrying...");
                setTimeout(loadParticles, 1000); // 1秒後にリトライ
            }
        };

        loadParticles();

       

        
};

export default ParticlesBackground;

