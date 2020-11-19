import React from 'react';
import Header from './components/Header';

function Tools() {

  return (
    <>
      <div class="body">
        <div class="content">
          <div class="area-util">
            <Header />
            <div class="content-text">
              <h1>Gerenciamento de Tempo</h1>
              <p>Existem diversas ferramentas que podem nos auxiliar: </p>
              <ul>
                <li>Kanban (Trello|Notion)</li>
                <li>Roadmaps (https://roadmap.sh/)</li>
                <li>Pomodoro (https://tomato-timer.com/)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tools;
