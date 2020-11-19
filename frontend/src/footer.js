import React from 'react';

export default function Footer() {
  return (
    <div className="message">
      <p>Se quer ir rápido, vá sozinho. Se quer ir longe, vá em grupo.</p>
      <div className="social-media">
        <a href="https://github.com/wijloc" target="_blank">
          <img src="./images/github.svg" alt="Github" />
        </a>
        <a href="https://www.linkedin.com/in/willianjpo/" target="_blank">
          <img src="./images/linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="https://twitter.com/wijloc" target="_blank">
          <img src="./images/twitter.svg" alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/willianjpoliveira" target="_blank">
          <img src="./images/instagram.svg" alt="Instagram" />
        </a>
      </div>
    </div>
  )
}

