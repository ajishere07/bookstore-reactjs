import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import './Footer.css'

function Footer(props) {
    const backHome = useHistory()

    const backToHome = () => {
        backHome.push('/')
    }

    return (
        <div className="footerContainer">
            <div className="footer__logo">
                <h2 onClick={() => { backToHome() }}><span>B</span>ookify</h2>
            </div>
            <h4><span>created by </span>Anuj Yadav</h4>
            <div className="footer__icons">
                <a href="https://www.linkedin.com/in/anuj-yadav-15716719a" target="_blank">
                    <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="icon"></img>
                </a>
                <a href="https://github.com/ajishere07" target="_blank">
                    <img src="https://image.flaticon.com/icons/png/128/270/270798.png" alt="icon"></img>
                </a>
            </div>
        </div>
    );
}

export default Footer;