import React from 'react';
import './styles/tools.css';

function Tools() {

  return (
    <>
      <h1>Gerenciamento de Tempo</h1>
      <div clas="tools">
        <p>Existem diversas ferramentas que podem nos auxiliar, veja na lista abaixos algumas opções: </p>
        <ul className="list-of-tools">
          <li>Kanban: <a href="https://trello.com/" target="_blank">Trello</a>|<a href="https://notion.so" target="_blank">Notion</a></li>
          <li>Roadmaps: <a href="https://roadmap.sh/" target="_blank">Roadmap.sh</a></li>
          <li>Pomodoro: <a href="https://tomato-timer.com/" target="_blank">Tomato Timer</a></li>
        </ul>
      </div>
    </>
  )
}

export default Tools;
