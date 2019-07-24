import React from "react";
import { styled } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import "./button.css"


export default function GradiendButton(props) {
  return <button className="apply-button" onClick={() => { window.location = props.link }} >Apply</button>
}

