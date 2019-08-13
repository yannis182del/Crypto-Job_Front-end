import React from 'react'
import { ReactComponent as Logos } from "../../assets/Onchain-logo-white.svg";
import Form from "../SubscribeForm"

import "./footer.css"

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <Logos
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