import React from 'react'
import { ButtonToolbar, Button, Modal } from 'rsuite'

const AddPrintItemDialog = (props) => {
  return (
    <div className="modal-container">
      <Modal
        overflow={true}
        open={props.open}
        onClose={props.handleClose}
        size={'lg'}
      >
        <Modal.Header>
          <Modal.Title>הוסף הדפס</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.handleClose} appearance="primary">
            Ok
          </Button>
          <Button onClick={props.handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddPrintItemDialog
