import React from 'react';
import styled from 'styled-components'


import Menu from './components/Menu'
import Profile from './components/Profile'
import Awards from './components/Awards'
import Works from './components/Works'
import Contact from './components/Contact'

import './App.css'

function App() {
  return (
    <div className="App">
      <Menu />
      <Wrap>
        <Name>Furuta Katsumi <br/> Portfolio</Name>

        <Profile />
        <Awards />
        <Works />
        <Contact />
      </Wrap>

    </div>
  );
}

export default App;


const Wrap = styled.div`
  width: 690px;
  margin: 0 auto;

  @media screen and (max-width: 600px) {
    width: calc(100% - 32px);
    margin: 0 16px;
  }
`

const Name = styled.h1`
  line-height: 1.5;
  margin: 64px 0;
`