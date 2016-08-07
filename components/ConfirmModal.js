import React, { Component } from 'react'
import { connect } from 'react-redux'

class ConfirmModal extends Component {
  render() {
    let { message, onConfirm, onCancel, isShowing } = this.props

    return (
      <div className="confirm-modal">
        { isShowing &&
          <div>
            <div className="modal-backdrop"></div>
            <div className="confirm-modal-content">
              <span className="confirm-modal-message">{message}</span>
              <input className="confirm-modal-input" type="text" ref={(_ref) => this.confirmInput = _ref}/>
              <button className="btn" onClick={() => this.getTextAndConfirm()}>OK</button>
              <button className="btn" onClick={() => onCancel()}>Cancel</button>
            </div>
          </div>
        }
      </div>
    )
  }

  getTextAndConfirm() {
    let text = this.confirmInput.value
    this.props.onConfirm(text)
  }

}

const mapStateToComponent = (state) => {
  return {
    isShowing: state.modals.isShowing
  }
}

export default connect(mapStateToComponent)(ConfirmModal)