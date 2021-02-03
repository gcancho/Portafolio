import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faYoutube, faGithub, faLinkedin, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Social = () => {
    return (
        <div className="social">
            <div className="social__item">
                <FontAwesomeIcon icon={faGithub} className="social__link" />
            </div>
            <div className="social__item">
                <FontAwesomeIcon icon={faWhatsapp} className="social__link" />
            </div>
            <div className="social__item">
                <FontAwesomeIcon icon={faYoutube} className="social__link" />
            </div>
            <div className="social__item">
                <FontAwesomeIcon icon={faFacebook} className="social__link" />
            </div>
            <div className="social__item">
                <FontAwesomeIcon icon={faInstagram} className="social__link" />
            </div>
            <div className="social__item">
                <FontAwesomeIcon icon={faTiktok} className="social__link" />
            </div>
            <div className="social__item">
                <FontAwesomeIcon icon={faLinkedin} className="social__link" />
            </div>
        </div>
    );
}

export default Social;

