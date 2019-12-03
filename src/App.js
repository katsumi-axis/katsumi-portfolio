import React from 'react';
import me from './me.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Menu">
      ・Profile
      ・Works
      ・Awards
      ・Contact
      </div>

      <h1>古田 克海 / Furuta Katsumi</h1>

      <div className="Profile">
        <div className="Data">
          <div className="In">
            <h4>所属</h4>
            Gupero inc.<br/>
            Yasuaki Kakehi Laboratory
          </div>

          <div className="">
            <h4>経歴</h4>
            1998年 3月 神奈川県生まれ<br/>
            2015年 8月 株式会社Gupero設立<br/>
            2016年 4月 慶應義塾大学環境情報学部入学<br/>
          </div>
          <div className="In">
            <h4>分野</h4>
            <ul>
            <li>Human computer interaction</li>
            <li>Machine learning</li>
            <li>Growth hacking</li>
            </ul>
          </div>
        </div>

        <div className="Img">
          <img src={me} alt="Furuta Katsumi" />
        </div>


      </div>


      <div className="Works">
        <h2>Works</h2>

        <h4>Company</h4>
        <ul>
          <li>OneNova</li>
          <li>Timee</li>
          <li>RelationTechnology</li>
          <li>GayaChat</li>
          <li>TouchSpot</li>
          <li>MICOLY</li>
        </ul>

      </div>


      <div className="Awards">
        <h2>Awards</h2>
        <ul>
          <li>2019 第22回文化庁メディア芸術祭アート部門審査委員会推薦作品（2019年）</li>
          <li>2015 TECH LAUNCH AUDITION</li>
          <li>2014 アプリ甲子園2014 準優勝</li>
          <li>2014 Mashup Awards10 U25</li>
        </ul>
      </div>


      <div className="Contact">
        <h2>Contact</h2>
        withcomputer@gmail.com
      </div>

    </div>
  );
}

export default App;
