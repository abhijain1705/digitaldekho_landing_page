import React from 'react'
import IconComponent from './iconComponent';

const FooterText = () => {
    return (
        <div className="footer-info-wrapper">
            <div className="footer-left-child">
                <h1>Digital Dekho</h1>
                <p>
                    Dikho-Digital offers a wide range of digital marketing services
                    including search engine optimization (SEO), pay-per-click
                    advertising (PPC), social media marketing, email marketing, content
                    marketing, and more.
                </p>
                <div className="icons-parent">
                    <IconComponent type="instagram" link="#" />
                    <IconComponent type="linkedin" link="#" />
                    <IconComponent type="facebook" link="#" />
                    <IconComponent type="Behance" link="#" />
                </div>
            </div>
            <div className="footer-right-child">
                <p>Contact Us</p>
                <p>Dikho Digital E-8, Area Colony, Bhopal</p>
                <a href="mailto:digitaldekho@gmail.com">Email: digitaldekho@gmail.com</a>
            </div>
        </div>
    )
}

export default FooterText