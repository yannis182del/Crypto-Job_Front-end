import styled from 'styled-components';

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
  overflow: scroll;
  height: 750px;
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
