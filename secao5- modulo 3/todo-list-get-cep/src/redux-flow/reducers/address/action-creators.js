'use strict'

import { UPDATE_ADDRESS } from './actions'

export const fetchAddress = (cep) => (dispatch, getState) => {
    const response = await ajax().get(`http://apps.widenet.com.br/busca-cep/api/cep.json?code=${cep}`)

    dispatch(updateAddress(response))
}

export const updateAddress = (date) => ({
  type: UPDATE_ADDRESS,
  payload: data
})
