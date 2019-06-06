import React from "react";
import { styled } from "@material-ui/styles";
import Button from "@material-ui/core/Button";


const MyButton = styled(Button)({
  background: "linear-gradient(158.36deg, #3EECAC 53.57%, #10B7E0 101.89%);",
  border: 0,
  borderRadius: 21,
  color: "#16132E",
  height: 48,
  padding: "0 80px",
  width: "70%",
  marginTop: "5%",
  marginLeft: "15%",
  marginRight: "15%"
});

export default function GradiendButton(props) {
  return(
      <div>
          
          <MyButton onClick={() => { window.location = props.link}} >Apply</MyButton>
         
      </div>
  )
}

