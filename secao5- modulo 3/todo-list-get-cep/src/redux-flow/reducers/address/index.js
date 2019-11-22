'use strict'

import createReducer  from '../create-reducer'

const initialState = {
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 1,
}

const address = createReducer(initialState, {
  'UPDATE_ADDRESS': (state, action) => action.payload
})

export default address
