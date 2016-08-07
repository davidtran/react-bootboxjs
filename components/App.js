import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setNameAndHideModal, showModal, hideModal } from '../actions'
import ConfirmModal from './ConfirmModal'

class App extends Component {

  render() {
    let { showModal, onConfirm, hideName, name } = this.props
    return (
      <div>
        <button className="btn" onClick={() => showModal("What your name?")}>Enter your name</button>
        <ConfirmModal message="'What your name?'" onConfirm={onConfirm} onCancel={hideModal}></ConfirmModal>
        { name &&
          <div className="name">
            {"Hello " + name}
          </div>
        }
      </div>
    )
  }
}

const mapStateToComponent = (state) => {
  return {
    name: state.name
  }
}

const mapDispatchToComponent = (dispatch) => {
  return {
    showModal: (message) => dispatch(showModal(message)),
    onConfirm: (name) => dispatch(setNameAndHideModal(name)),
    hideModal: () => dispatch(hideModal())
  }
}

export default connect(mapStateToComponent, mapDispatchToComponent)(App)