import React from 'react'
import {Link } from "react-router-dom";

import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import firebaseImage from "../Images/firebase.jpg";
import profileImage from "../Images/sibainu.jpg";

function HomePage() {
  return (
    <div className="container text-center">
      <h1>Nakahara Kenta</h1>

      <img src={profileImage} className="profileImage" />

      <p>
        中原健太と申します。
        <br />
        SES営業からキャリアをスタートし、ServiceNow始めSpotfireなどのBIツールに関する案件に従事しておりました。
        <br /> 
        HTML,CSS,JavaScriptやReactを主に自己研鑽として努めております。
      </p>

      <section class="page-section" id="services">
        <div className="service">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
            <h3 class="section-subheading text-muted mb-5">
              私が作った作品一覧です
            </h3>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
              <Link to="/pokemon"><i class="fa-brands fa-stack-overflow fa-xl"></i>
                </Link>
              </span>
              <h4 class="my-3">ポケモン図鑑</h4>
              <p class="text-muted">
                pokemonAPIをからJsonデータを取得し、取得したデータをReactで画面に反映させております。
                画面下のボタンで画面遷移ができます。
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">


              </span>
              <h4 class="my-3">作成中</h4>
              <p class="text-muted">
               作成中
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">


              </span>
              <h4 class="my-3">作成中</h4>
              <p class="text-muted">
                作成中
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skill">
        <div class="text-center">
          <h2 class="title">スキル</h2>
          <div class="row text-center">
            <div class="col-md-4 services">
              <img src={reactImage} />
              <h4>React</h4>
              <p>Reactがつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={jsImage} />
              <h4>HTML/CSS</h4>
              <p>HTML/CSSがつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={firebaseImage} />
              <h4>Firebase</h4>
              <p>Firebaseがつかえます</p>
            </div>
          </div>
          <button type="button" class="btn btn-primary">
            スキル一覧
          </button>
        </div>
      </section>
    </div>
  )
}

export default HomePage