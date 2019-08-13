import React from 'react'
import { ReactComponent as Logo } from "../../assets/Images/logo.svg";
import Form from "../SubscribeForm"

import "./footer.css"

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <Logo
                    className="footer-logo"
                    aria-label="footer-logo"
                    onClick={() => {
                        window.location = "/";
                    }}
                />
                <Form/>
            </div>
        </div>
    )
}
