import React from 'react';
import styled from 'styled-components';

function Menu() {
  return (
    <MenuWrap className="Menu">
      <Wrap>
        <a href="#Profile">Profile</a>
        <a href="#Works">Works</a>
        <a href="#Awards">Awards</a>
        <a href="#Contact">Contact</a>
      </Wrap>
    </MenuWrap>
  )
}

export default Menu;

const Wrap = styled.div`
  width: 690px;
  margin: 0 auto;
  @media screen and (max-width: 600px) {
    width: calc(100% - 32px);
    margin: 0 16px;
  }
`

const MenuWrap = styled.div`
  padding: 8px 0px;
  background: #052849;
  a{
    color: #ffffff;
    padding-right: 16px;
  }
`