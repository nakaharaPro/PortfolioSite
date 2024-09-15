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

        // クリーンアップ関数: パーティクルの再生成を防ぐため、画面がアンマウントされる際にクリーンアップ(メモリ負荷軽減)
        return () => {
            const particlesElement = document.getElementById('particles-js');
            if (particlesElement && particlesElement.hasChildNodes()) {
                while (particlesElement.firstChild) {
                    particlesElement.removeChild(particlesElement.firstChild);
                }
                particlesLoaded = false;  // 次回ロード時にリセット
            }
        };
    }, []);

    return (
        <div id="particles-js" style={{
            position: 'fixed', // スクロールに対応するように fixed
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            zIndex: 0, // 背景に設定
            pointerEvents: 'none', // クリックなどのイベントを無効化
        }}></div>
    );
};

export default ParticlesBackground;

