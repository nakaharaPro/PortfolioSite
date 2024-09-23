import React from 'react';
import ParticlesBackground from '../particle/ParticleBackground';
import SkillRadarChart from '../components/chart/SkillRadarChart';

import { FaListAlt } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";

import profileImage from "../Images/shiba.jpeg";

const twitterCloneWeb = () => {
  window.open("https://twitter-clone-98280.web.app");
}
const pokemonAppWeb = () => {
  window.open("https://main.d1blt17lrj7j3g.amplifyapp.com/");
}

const caraqueApp = () => {
  window.open("https://apps.apple.com/app/caraque/id6642705741")
}


function HomePage() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <ParticlesBackground /> {/* 背景パーティクル */}

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
                  <i className="fa-brands Icon" onClick={pokemonAppWeb}><FaListAlt /></i>
                </span>
                <h4 className="my-3">ポケモン図鑑</h4>
                <p className="text-muted">pokemonAPIを使ってReactで作成。</p>
              </div>

              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa-brands Icon" onClick={twitterCloneWeb}><IoLogoTwitter /></i>
                </span>
                <h4 className="my-3">ツイッタークローン</h4>
                <span className="text-muted">React.jsとFirebaseで作成。見た目部分のみ</span>
              </div>

              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa-brands Icon" onClick={caraqueApp}><FaAppStoreIos /></i>
                </span>
                <h4 className="my-3">洋菓子店アプリ</h4>
                <p className="text-muted">FlutterとFirebaseで作成。</p>
                <p className="text-muted">お気に入り機能、注文メール送信機能を実装。</p>

              </div>
            </div>
          </div>

          <div>
            <h4 className="my-2">スキルセット</h4>
            <SkillRadarChart /> {/* レーダーチャート*/}
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
