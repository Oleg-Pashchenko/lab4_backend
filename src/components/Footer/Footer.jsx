import './Footer.scss'

import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

const gitUrl = "https://github.com/Oleg-Pashchenko";

const Footer = () => {

    const gitClickAction = () => window.open(gitUrl);

    return (
        <footer className="footer">
            <div className="footer-text">
                <h2 className="footer-text-name">Oleg Pashchenko | P32141</h2>
            </div>
            <GitHubIcon cursor="pointer" onClick={gitClickAction} fontSize="large">GitHub</GitHubIcon>
        </footer>
    );

};
export default Footer;