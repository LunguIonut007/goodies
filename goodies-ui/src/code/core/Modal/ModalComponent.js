import React, { Component } from 'react'
import { Modal } from 'semantic-ui-react'

export default class ModalComponent extends Component {

  componentWillMount() {
  }

  render() {
    const { header, children, open, onClose } = this.props
    return (
        <div>
            <Modal open={open} onClose={onClose} className="own-modal-container">
                <Modal.Header>{header}</Modal.Header>
                <Modal.Content>
                <Modal.Description>
                    {children}
                </Modal.Description>
                </Modal.Content>
            </Modal>
        </div>
     );
  }
}