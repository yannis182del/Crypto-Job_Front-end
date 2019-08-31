import styled from 'styled-components';
import { Link } from 'react-router-dom';

const size = {
  mobileS: '600px',
  laptop: '600px',
};

const device = {
  mobileS: `(max-device-width: ${size.mobileS})`,
  mobileM: `(min-device-width: ${size.laptop})`,
};

export const CardContainer = styled.div`
  display: block;
  padding: 10px 2px 10px 2px;
  overflow: auto;
  height: 750px;
  @media ${device.mobileM} {
    height: 550px;
  }
`;

export const BlogCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  border: 10px;
  background-color: var(--bgPrimary);
  border-radius: 12px;
  padding: 1.5em;
  margin: 10px 15px 15px 15px;
  font-family: var(--ftFamily);
  @media ${device.mobileM} {
    width: 614px;
    margin: 15px auto 10px auto;
  }
`;

export const Hidden = styled.div`
  display: none;
`;

export const Div = styled.div``;

export const PositionName = styled.h5`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  text-decoration: none;
  margin: 0;
`;

export const DesktopLocation = styled.span`
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.mobileM} {
    color: #10b7e0;
  }
`;

export const Place = styled.p`
  color: #3eecac;
  font-size: 18px;
  margin-bottom: 2px;
  @media ${device.mobileM} {
    margin-bottom: 15px;
  }
`;

export const LocationJob = styled.p`
  color: #10b7e0;
  margin-bottom: 0;
  @media ${device.mobileM} {
    display: none;
  }
`;

export const TextDescription = styled.div`
  color: white;
  font-size: 18px;
  @media ${device.mobileS} {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
