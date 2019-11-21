'use strict'

import React from 'react'

const SearchCep = ({
  address,
  city,
  code,
  district,
  state,
  status,
  isFetching,
  handleSubmit
 }) => (
   <div>
     <form onSubmit={handleSubmit}>
       <input type='text' name='cep' />
       <button type='submit' disabled={isFetching}>
         {isFetching ? 'Buscando....' : 'Buscar enderecos'}
       </button>
     </form>

     {status === 0 && <div>Cep nao encontrado</div>}

     {status === 1 && (
     <table>
       <thead>
         <tr>
           <td>Cep</td>
           <td>Endereco</td>
           <td>Bairro</td>
           <td>Cidade</td>
           <td>Estado</td>
           <td>Status</td>
         </tr>
       </thead>

       <tbody>
         <tr>
           <td>{code}</td>
           <td>{address}</td>
           <td>{district}</td>
           <td>{city}</td>
           <td>{state}</td>
           <td>{status}</td>
         </tr>
       </tbody>
     </table>
    )}
   </div>
)

export default SearchCep
