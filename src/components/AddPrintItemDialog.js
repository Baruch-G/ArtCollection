import React from 'react'
import { ButtonToolbar, Button, Modal, Form, Toggle, Input, SelectPicker } from 'rsuite'

const AddPrintItemDialog = (props) => {
  const errorStyles = errorVisible => {
    return { display: errorVisible ? 'block' : 'none', color: 'red', marginTop: 6 };
  };

  const Textarea = React.forwardRef((props, ref) => (
    <Input {...props} as="textarea" ref={ref} />
  ))

  const errorPlacementData = [
    { label: 'bottomStart', value: 'bottomStart' },
    { label: 'bottomEnd', value: 'bottomEnd' },
    { label: 'topStart', value: 'topStart' },
    { label: 'topEnd', value: 'topEnd' },
    { label: 'leftStart', value: 'leftStart' },
    { label: 'rightStart', value: 'rightStart' },
    { label: 'leftEnd', value: 'leftEnd' },
    { label: 'rightEnd', value: 'rightEnd' }
  ];

  return (
    <div className="modal-container">
      <Modal
        style={{ direction: 'rtl' }}
        overflow={true}
        open={props.open}
        onClose={props.handleClose}
        size={'lg'}
      >
        <Modal.Header>
          <Modal.Title style={{ display: 'grid', justifyContent: 'center' }}>
            <h3>הוסף הדפס</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form fluid style={{ marginLeft: 150, marginRight: 150 }}>
            <Form.Group controlId="title">
              <Form.ControlLabel>כותרת</Form.ControlLabel>
              <Form.Control name="title" />
            </Form.Group>
            
             <Form.Group controlId="title">
              <Form.ControlLabel>כותרת</Form.ControlLabel>
              <Form.Control name="title" />
            </Form.Group>

            <Form.Group controlId="artistName">
              <Form.ControlLabel>שם אמן/יוצר</Form.ControlLabel>
              <Form.Control name="name" />
            </Form.Group>
            <Form.Group controlId="textarea">
              <Form.ControlLabel>הערות</Form.ControlLabel>
              <Form.Control rows={5} name="textarea" accepter={Textarea}/>
            </Form.Group>
            <Form.Group controlId="print-kind">
            <SelectPicker data={errorPlacementData} style={{ width: 224 }} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.handleClose} appearance="primary">
            הוסף
          </Button>
          <Button onClick={props.handleClose} appearance="subtle">
            ביטול
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddPrintItemDialog
