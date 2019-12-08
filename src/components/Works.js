import React from 'react';
import styled from 'styled-components';

function Works() {
  return (
    <WorksWrap id="Works">
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
    </WorksWrap>
  )
}

export default Works;

const WorksWrap = styled.div`
  padding: 64px 0px;
`