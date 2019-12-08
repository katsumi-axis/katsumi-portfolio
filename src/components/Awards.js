import React from 'react';
import styled from 'styled-components';

function Awards() {
  return (
    <AwardsWrap idName="Awards">
      <h2>Awards</h2>
      <ul>
        <li>2019 第22回文化庁メディア芸術祭アート部門審査委員会推薦作品</li>
        <li>2015 TECH LAUNCH AUDITION</li>
        <li>2014 アプリ甲子園2014 準優勝</li>
        <li>2014 Mashup Awards10 U25</li>
      </ul>
    </AwardsWrap>
  )
}

export default Awards;

const AwardsWrap = styled.div`
  padding: 0px;
`