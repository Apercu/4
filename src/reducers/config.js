import { handleActions } from 'redux-actions'

const initialState = {

  selectedBoard: 'pol',
  refresh: true,

}

export default handleActions({

  SELECT_BOARD: (state, { payload: selectedBoard }) => ({ ...state, selectedBoard }),

  TOGGLE_REFRESH: (state, { payload: refresh }) => ({ ...state, refresh }),

}, initialState)
