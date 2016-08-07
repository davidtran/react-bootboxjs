import { combineReducers } from 'redux'
import {SHOW_MODAL, HIDE_MODAL, SET_NAME} from './actions'

function modals(state = {
  isShowing: false,
  message: ''
}, action) {

  switch (action.type) {
    case SHOW_MODAL:
      return Object.assign({}, state, {
        isShowing: true,
        message: action.message
      })
    case HIDE_MODAL:
      return Object.assign({}, state, {
        isShowing: false
      })
    default:
      return state
  }

}

function name(state = null, action) {

  switch (action.type) {
    case SET_NAME:
      return action.name
    default:
      return state
  }

}

export default combineReducers({
  modals,
  name
})