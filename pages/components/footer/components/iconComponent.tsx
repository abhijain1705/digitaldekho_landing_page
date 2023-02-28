import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faBehance, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

interface IconComponentProp {
  type: string;
  link: string;
}

const IconComponent = ({ type, link }: IconComponentProp) => {
  return (
    <a href={link}>
      {
        type === "instagram" ?
          <FontAwesomeIcon icon={faInstagram} color='white' width={30} height={30} />
          : type === "linkedin" ?
          <FontAwesomeIcon icon={faLinkedin} color='white' width={30} height={30} />
            : type === "facebook" ?
            <FontAwesomeIcon icon={faFacebook} color='white' width={30} height={30} />
              : <FontAwesomeIcon icon={faBehance} color='white' width={30} height={30} />
      }
    </a>
  )
}

export default IconComponent;