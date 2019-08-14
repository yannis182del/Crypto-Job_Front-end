import React from "react";
import "./button.css"


export default function GradiendButton(props) {
  return <button className="apply-button" onClick={() => { window.location = props.link }} >Apply</button>
}

