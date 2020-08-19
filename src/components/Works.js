import React from 'react';
import styled from 'styled-components';

function Works() {
  return (
    <WorksWrap id="Works">
      <h2>Works</h2>

      <h4>Company</h4>
      <ul>
        <li>OneNova</li>
        <li>DiverFront</li>
        <li>Funbase</li>
        <li>TouchSpot</li>
        <li>MICOLY</li>
        <li>BasicIncomeCinemas</li>
        <li>Gupero</li>
      </ul>
    </WorksWrap>
  )
}

export default Works;

const WorksWrap = styled.div`
  padding: 64px 0px;
`