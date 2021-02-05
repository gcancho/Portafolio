import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faYoutube, faGithub, faLinkedin, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Social = () => {
    return (
        <div className="social">
            {/* <a className="social__item">
                <FontAwesomeIcon icon={faGithub} className="social__link" />
            </a> */}
            <a className="social__item" target="_blank" href="https://wa.me/51955427033?text=Deseo%20realizar%20un%20proyecto%20web">
                <FontAwesomeIcon icon={faWhatsapp} className="social__link" />
            </a>
            <a className="social__item" target="_blank" href="https://www.youtube.com/channel/UCjsEviNvlEAGSoA-HbKD02w">
                <FontAwesomeIcon icon={faYoutube} className="social__link" />
            </a>
            {/* <a className="social__item" target="_blank">
                <FontAwesomeIcon icon={faFacebook} className="social__link" />
            </a> */}
            <a className="social__item" target="_blank" href="https://www.instagram.com/giovanni.c19/">
                <FontAwesomeIcon icon={faInstagram} className="social__link" />
            </a>
            <a className="social__item" target="_blank" href="https://www.tiktok.com/@giocancho">
                <FontAwesomeIcon icon={faTiktok} className="social__link" />
            </a>
            {/* <a className="social__item">
                <FontAwesomeIcon icon={faLinkedin} className="social__link" />
            </a> */}
        </div>
    );
}

export default Social;

