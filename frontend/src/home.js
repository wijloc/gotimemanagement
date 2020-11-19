import React from 'react';

function Home() {

  return (
    <>
      <div className="content-text">
        <h1>Gerenciamento de Tempo</h1>
        <p>Com um gerenciamento de tempo apurado você pode criar muito mais!</p>
        <p>Para atingir a excelência em qualquer área da sua vida será necessário investir tempo estudando e praticando! Por isso utilizando todo o potencial, de cada minuto, você pode alcançar seus objetivos!</p>
        <p>Assim como nos investimentos, onde devemos diversificar nossa carteira, no gerenciamento de tempo é necessário manter um equilíbrio, cuidando das diversas áreas da nossa vida.</p>
        <p>Existem diversas ferramentas que podem nos auxiliar: Kanban (Trello|Notion) Roadmaps (https://roadmap.sh/) Pomodoro (https://tomato-timer.com/) entre outras</p>
      </div>
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
    </>)
}

export default Home;
