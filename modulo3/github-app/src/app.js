'use strict'

import React from 'react';

const App = () => (
  <div className='app'>

    <div className='search'>
      <input
        type='search'
        placeholder='Digite o nome do usuario do github'/>
    </div>

    <div className='user-info'>
      <img src='https://avatars.githubusercontent.com/u/48766?v=3' />
      <h1 className='username'>
        <a href='https://github.com/fdaciuk'>Fernando Daciuk</a>
      </h1>

      <ul className='repos-info'>
        <li>- Repositorios: 122</li>
        <li>- Seguidores: 10</li>
        <li>- Seguindo: 10</li>
      </ul>

      <div className='actions'>
        <button>Ver Repositorios</button>
        <button>Ver Favoritos</button>
      </div>

      <div className='repos'>
        <h2>Repositorios</h2>
        <ul>
          <li>
            <a href='#'>Nome do repositorio</a>
          </li>
        </ul>
      </div>

      <div className='starred'>
        <h2>Favoritos</h2>
        <ul>
          <li>
            <a href='#'>Nome do repositorio</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default App
