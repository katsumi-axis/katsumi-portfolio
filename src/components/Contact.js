import React from 'react';
import styled from 'styled-components';

function Contact() {
  return (
    <ContactWrap className="Contact">
      <h2>Contact</h2>
      <a href="mailto:withcomputer@gmail.com">withcomputer@gmail.com</a><br/>
      <a href="https://twitter.com/furuta_katsumi">@furuta_katsumi</a>
    </ContactWrap>
  )
}

export default Contact;

const ContactWrap = styled.div`
  padding: 0px 0px 128px;
`