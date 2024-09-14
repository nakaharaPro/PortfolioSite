import React from 'react';
import ParticlesBackground from '../particle/ParticleBackground'; // 正しいパスに修正

import profileImage from "../Images/sibainu.jpg";

const twitterCloneWeb = () => {
  window.location.replace("https://twitter-clone-98280.web.app");
}
const pokemonAppWeb = () => {
  window.location.replace("https://main.d1blt17lrj7j3g.amplifyapp.com/");
}

function HomePage() {
  return (
    <div style={{ position: 'relative' }}>
      {/* ParticlesBackgroundを追加 */}
      <ParticlesBackground />

      <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
        <h1>Nakahara Kenta</h1>
        <img src={profileImage} className="profileImage" alt="Profile of Nakahara Kenta" />
        <p>
          中原健太と申します。
          SES営業からキャリアをスタートし、Java,SpringBootを使用した業務システムの開発に従事。
        </p>

        <section className="page-section" id="services">
          <div className="service">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">PORTFOLIO</h2>
              <h3 className="section-subheading text-muted mb-5">私が作った作品一覧です</h3>
            </div>
            <div className="row text-center">
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <div className="pokekemonIcon">
                    <i className="fa-brands fa-stack-overflow fa-xl" onClick={pokemonAppWeb}></i>
                  </div>
                </span>
                <h4 className="my-3">ポケモン図鑑</h4>
                <p className="text-muted">pokemonAPIを使ってデータをReactで表示。</p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <div className="twitterIcon">
                    <i className="fa-brands fa-twitter" onClick={twitterCloneWeb}></i>
                  </div>
                </span>
                <h4 className="my-3">ツイッタークローン</h4>
                <p className="text-muted">React.jsとFirebaseで作成。</p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x"></span>
                <h4 className="my-3">作成中</h4>
                <p className="text-muted">作成中</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
