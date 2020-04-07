import React from 'react';
import styled from 'styled-components';

import me from '../me.jpg';

function Profile() {
  return (
    <ProfileWrap id="Profile">

      <h2>Profile</h2>
      <Data>
        <Img>
          <Image src={me} alt="Furuta Katsumi" />
        </Img>

        <Info>
          <div className="Belongs">
            <h4>所属</h4>
            <ul>
              <li>Timee, inc.</li>
            </ul>
          </div>

          <div className="Career">
            <h4>経歴</h4>
            <ul>
              <li>1998年 3月 神奈川県生まれ</li>
              <li>2015年 8月 株式会社Gupero設立</li>
              <li>2016年 4月 慶應義塾大学環境情報学部入学</li>
              <li>2020年 3月 慶應義塾大学環境情報学部卒業</li>
            </ul>
          </div>

          <div className="Field">
            <h4>分野</h4>
            <ul>
              <li>Human computer interaction</li>
              <li>UX Research</li>
              <li>Growth hacking</li>
            </ul>
          </div>

        </Info>
      </Data>
    </ProfileWrap>
  )
}

export default Profile;

const ProfileWrap = styled.div``

const Data = styled.div`
  display: flex;
  flex-direction: row-reverse;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`

const Info = styled.div`
  width: 66.5%;
  @media screen and (max-width: 600px) {
    width: calc(100% - 32px);
  }
`
const Img = styled.div`
  width: 33.5%;
  @media screen and (max-width: 600px) {
    width: calc(100% - 32px);
  }
`


const Image = styled.img`
  width: 168px;
  margin: 32px 0;
  text-algin: center;
  @media screen and (max-width: 600px) {
    margin: 0;
  }
`
