import React from 'react';
import './../styles/Header.css';
import Tools from './../tools.js';
import About from './../about.js';
import App from './../App.js';

export default function Header() {
  return (
    <>
      <div>
        <ul>
          <li>
            <a href="/">Início</a>
          </li>
          <li>
            <a href="/tools">Ferramentas</a>
          </li>
          <li>
            <a href="/about">Sobre</a>
          </li>
        </ul>
      </div>
    </>
  );
}
