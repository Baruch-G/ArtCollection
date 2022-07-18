import React from 'react'
import { ButtonToolbar, Button, Modal, Form, Input, Toggle } from 'rsuite'

const AddUserDialog = (props) => {
  const [isAdmin, setIsAdmin] = React.useState(false)
  const [emailErrorVisible, setEmailErrorVisible] = React.useState(false);

  const errorStyles = errorVisible => {
    return { display: errorVisible ? 'block' : 'none', color: 'red', marginTop: 6 };
  };

  const Textarea = React.forwardRef((props, ref) => (
    <Input {...props} as="textarea" ref={ref} />
  ))
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
            <h3>הוסף משתמש</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form fluid style={{ marginLeft: 150, marginRight: 150 }}>
            <Form.Group controlId="firstName">
              <Form.ControlLabel>שם פרטי</Form.ControlLabel>
              <Form.Control name="name" />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.ControlLabel>שם משפחה</Form.ControlLabel>
              <Form.Control name="name" />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.ControlLabel>דוא"ל</Form.ControlLabel>
              <Form.Control name="email" placeholder="הכנס דוא''ל" type="email" errorMessage={emailErrorVisible ? "ddff" : null}/>
              <Form.HelpText tooltip>Email is required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.ControlLabel>סיסמא</Form.ControlLabel>
              <Form.Control
                name="password"
                type="password"
                autoComplete="off"
              />
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>משתמש מנהל</Form.ControlLabel>
              <Toggle onChange={() => setIsAdmin(!isAdmin)} checked={isAdmin} />
            </Form.Group>
            {/* <Form.Group controlId="textarea">
              <Form.ControlLabel>Textarea</Form.ControlLabel>
              <Form.Control rows={5} name="textarea" accepter={Textarea} />
            </Form.Group> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setEmailErrorVisible(true)} appearance="primary">
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

export default AddUserDialog
