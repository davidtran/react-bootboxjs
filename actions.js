export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'
export const SET_NAME = 'SET_NAME'

export function showModal(message) {
  return {
    type: SHOW_MODAL,
    message
  }
}

export function hideModal() {
  return {
    type: HIDE_MODAL
  }
}

export function setName(name) {
  return {
    type: SET_NAME,
    name
  }
}

export function setNameAndHideModal(name) {
  return dispatch => {
    if (!name || name.trim() === '') return
    dispatch(setName(name))
    dispatch(hideModal())
  }
}