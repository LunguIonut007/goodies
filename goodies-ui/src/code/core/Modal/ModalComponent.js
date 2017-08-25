import React, { Component } from 'react'
import { Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'

class ModalComponent extends Component {
  componentWillMount () {
  }

  render () {
    const { header, children, open, onClose, entityType } = this.props

    return (
      <div>
        <Modal open={open} onClose={onClose} className={`own-modal-container ${entityType}`}>
          <Modal.Header className={entityType}>{header}</Modal.Header>
          <Modal.Content className={entityType}>
            <Modal.Description>
              {children}
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default connect(state => ({entityType: state.login.entityType}))(ModalComponent)
