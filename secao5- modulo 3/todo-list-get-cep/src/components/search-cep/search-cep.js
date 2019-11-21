'use strict'

import React from 'react'

const SearchCep = () => (
  <div>
    <form>
      <input type='text' name='cep' />
      <button type='submit'>Buscar enderecos</button>
    </form>

    <table>
      <thead>
        <tr>
          <td>Cep</td>
          <td>Endereco</td>
          <td>Bairro</td>
          <td>Cidade</td>
          <td>Estado</td>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>999999</td>
          <td>Endereco</td>
          <td>Bairro</td>
          <td>Cidade</td>
          <td>Estado</td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default SearchCep
