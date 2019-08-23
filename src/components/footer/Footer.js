import React from 'react';
import Form from '../SubscribeForm';
import { FooterList, Li, StyledLink, FooterDiv, Img } from './styled';

import './footer.css';

function FooterRouter() {
  return (
    <>
      <FooterList>
        <Li>
          <StyledLink to="/contact">Contact</StyledLink>
        </Li>
        <Li>
          <StyledLink to="/team">Qui sommes nous</StyledLink>
        </Li>
        <Li>
          <StyledLink to="/a-propos">Mentions légales</StyledLink>
        </Li>
      </FooterList>
    </>
  );
}

function Footer() {
  return (
    <FooterDiv>
      <Img />
      <Form />
      <FooterRouter />
    </FooterDiv>
  );
}

export default Footer;
