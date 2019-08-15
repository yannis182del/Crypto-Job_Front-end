import styled from "styled-components"

const color = {
    primary: "#ffffff",
    textColorSecondary: "#3eecac",
    bgPrimary: "#201d3e",
    textColorBlue: "#10b7e0"
}

const size = {
    mobileS: '600px',
    laptop: '600px'
  
  }

 const device = {
    mobileS: `(max-device-width: ${size.mobileS})`,
    mobileM: `(min-device-width: ${size.laptop})`,
  };

export const ArticleComp = styled.div`
display: block;
background-color: ${color.bgPrimary};
margin-left: auto;
margin-right: auto;
width: 90%;
padding: 10px 2px 10px 2px;
overflow: scroll;
border-radius: 12px;
@media ${device.mobileS} {
    height: 570px;
  }
  @media ${device.mobileM} {
    width: 814px;
    height: 770px;
  }
`

export const PositionNameArticle = styled.h4`
font-weight: bold;
margin-left: 10px;
color: ${color.primary};

`

export const Location = styled.p`
    font-weight: 400;
`

export const WorkplaceName = styled.span`
color: ${color.textColorSecondary};
margin-left: 10px;
`

export const LocationName = styled.span`
color: ${color.textColorBlue}
`

export const ContractType = styled.p`
  color: #575473;
  margin-left: 10px;
`

export const ArticleTitle = styled.h3`
color: ${color.primary};
margin-top: 10%;
margin-left: 10px;
`

export const Compensation = styled.p`
margin-left: 10px;
color:  ${color.textColorBlue}
`

export const AboutDescription = styled.p`
color: ${color.primary};
margin-left: 10px;
line-height: 22px;
padding: 2px 4px 2px 4px;

`

export const OverView = styled.p`
color: ${color.primary};
padding: 2px 4px 2px 4px;
line-height: 25px;
margin-left: 10px;
line-height: 22px;
`

export const Skills = styled.li`
color: ${color.primary};
margin-top: 5%;
margin-left: 5px;
line-height: 22px;
@media ${device.mobileM} {
    margin-top: 3%;
  }
`