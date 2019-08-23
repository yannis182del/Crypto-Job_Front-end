import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../assets/Images/Onchain-logo-lightpurple.png';

export const FooterList = styled.ul`
  margin-left: 16px;
  line-height: 25px;
  list-style: none;
  padding-inline-start: 0px;
`;

export const Li = styled.li``;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #bcbace;
`;

export const FooterDiv = styled.div`
  background: #0b0918;
  width: 100%;
  height: 255px;
`;

export const Img = styled.img.attrs({
  src: logo,
})`
  display: block;
  width: 180px;
  padding: 1rem;
  text-align: center;
`;
