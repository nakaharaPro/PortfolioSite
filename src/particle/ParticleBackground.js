import { useEffect } from "react";

const ParticlesBackground = () => {
  useEffect(() => {
    const loadParticles = () => {
      if (window.particlesJS) {
        window.particlesJS.load('particles-js', '/particles.json', function () {
          console.log('particles.js loaded - callback');
        });
      } else {
        console.error("particles.js is not loaded, retrying...");
        setTimeout(loadParticles, 1000); // 1秒後にリトライ
      }
    };

    loadParticles();
  }, []);

  return <div id="particles-js" style={{ position: "absolute", width: "100%", height: "100%", zIndex: 0 }}></div>;
};

export default ParticlesBackground;

