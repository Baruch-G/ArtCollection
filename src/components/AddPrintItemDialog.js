import React from 'react'
import { useEffect } from 'react'
import './AddPrintItemDialog.css'
import { POST, GET } from '../fetch'
import Swal from 'sweetalert2'
import {
  ButtonToolbar,
  Button,
  Modal,
  Form,
  Toggle,
  Input,
  SelectPicker,
  Grid,
  Col,
  Row,
  Uploader,
  AutoComplete,
  MaskedInput,
} from 'rsuite'
import ImageUploader from './ImageUploader'

const initFormValue = {
  Title: undefined,
  ArtistName: undefined,
  Notes: undefined,
  Size: undefined,
  FrameSize: undefined,
  ImageSize: undefined,
  ArtistName: undefined,
  Source: undefined,
  References: undefined,
  AdditionalNotes: undefined,
  EstimatedDate: undefined,
  HPGP: undefined,
  ExhibitionArea: undefined,
  PrintKind: undefined,
}

const Textarea = React.forwardRef((props, ref) => (
  <Input {...props} as="textarea" ref={ref} />
))

const AddPrintItemDialog = (props) => {
  const [formValue, setFormValue] = React.useState(initFormValue)
  const [printKinds, setPrintKinds] = React.useState([])
  const [readOnly, setReadOnly] = React.useState(false)

  const fetchPrintKinds = async () => {
    const { data: Items } = await GET('print-kinds')
    setPrintKinds(Items)
  }

  const postPrint = async () => {
    const body = formValue
    body.PrintKind = printKinds.find((i) => i.Id == body.PrintKind)
    body.Labels = []
    body.LinkedFiles = []
    body.HPGP = Number(body.HPGP)
    body.ImgUrl = 'https://thumbs.dreamstime.com/b/funny-face-baby-27701492.jpg'

    console.log(body)

    POST('prints', body)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'הפריט התווסף בהצלחה',
          showConfirmButton: false,
          timer: 1500,
        })
        setFormValue(initFormValue)
      })
      .catch((e) => {
        Swal.fire({
          icon: 'error',
          title: 'אופס',
          text: 'משהו השתבש',
        })
      })
  }

  const getPrintKinds = () =>
    printKinds.map((item) => ({ label: item.Name, value: item.Id }))

  useEffect(() => {
    fetchPrintKinds()
    if (props.printObject) {
      setFormValue(props.printObject)
      setReadOnly(true)
    }
  }, [])

  return (
    <div className="modal-container">
      <Modal
        style={{ direction: 'rtl', minWidth: '950px' }}
        overflow={true}
        open={props.open}
        onClose={props.handleClose}
        size={'md'}
      >
        <Modal.Header>
          <Modal.Title style={{ display: 'grid', justifyContent: 'center' }}>
            <div>
              <h3>הוסף הדפס</h3>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            fluid
            readOnly={readOnly}
            formValue={formValue}
            onChange={(formValue) => setFormValue(formValue)}
          >
            <Grid style={{ width: '100%' }}>
              <Row style={{ fontSize: '12px' }}>
                <Col style={{ width: '33%' }}>
                  <Form.Group className="form-group">
                    <Form.ControlLabel>תמונה</Form.ControlLabel>
                    <ImageUploader style={{ width: '100%' }} />
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.ControlLabel>קבצים נוספים</Form.ControlLabel>
                    <Uploader
                      action="//jsonplaceholder.typicode.com/posts/"
                      draggable
                    >
                      <div
                        style={{
                          height: 70,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <span style={{ fontSize: '11px' }}>
                          גרור קובץ לכאן אן לחץ לעיון במחשב
                        </span>
                      </div>
                    </Uploader>
                  </Form.Group>
                </Col>

                <Col
                  style={{
                    width: '33%',
                  }}
                >
                  <Form.Group controlId="Source" className="form-group">
                    <Form.ControlLabel>מקור *</Form.ControlLabel>
                    <Form.Control size="xs" name="Source" />
                  </Form.Group>
                  <Form.Group controlId="Notes" className="form-group">
                    <Form.ControlLabel>הערות</Form.ControlLabel>
                    <Form.Control rows={5} name="Notes" accepter={Textarea} />
                  </Form.Group>

                  <Form.Group controlId="References" className="form-group">
                    <Form.ControlLabel>מ"מ והערות</Form.ControlLabel>
                    <Form.Control size="xs" name="References" />
                  </Form.Group>
                  <Form.Group
                    controlId="AdditionalNotes"
                    className="form-group"
                  >
                    <Form.ControlLabel>הערות נוספות</Form.ControlLabel>
                    <Form.Control size="xs" name="AdditionalNotes" />
                  </Form.Group>
                </Col>

                <Col
                  style={{
                    width: '33%',
                  }}
                >
                  <Form.Group controlId="Title" className="form-group">
                    <Form.ControlLabel>כותרת *</Form.ControlLabel>
                    <Form.Control size="xs" name="Title" />
                  </Form.Group>
                  <Form.Group controlId="PrintKind" className="form-group">
                    <Form.ControlLabel>סוג הדפס *</Form.ControlLabel>
                    <Form.Control
                      size="xs"
                      name="PrintKind"
                      style={{ width: '100%' }}
                      placeholder="בחר סוג הדפס"
                      data={getPrintKinds()}
                      accepter={SelectPicker}
                    />
                  </Form.Group>
                  <Form.Group controlId="ArtistName" className="form-group">
                    <Form.ControlLabel>שם אמן/יוצר</Form.ControlLabel>
                    <Form.Control size="xs" name="ArtistName" />
                  </Form.Group>

                  <Form.Group controlId="EstimatedDate" className="form-group">
                    <Form.ControlLabel>תיארוך *</Form.ControlLabel>
                    <Form.Control size="xs" name="EstimatedDate" />
                  </Form.Group>

                  <div style={{ display: 'flex' }}>
                    <Form.Group
                      style={{ marginLeft: '7px' }}
                      controlId="Size"
                      className="form-group"
                    >
                      <Form.ControlLabel>גיליון</Form.ControlLabel>

                      <Form.Control
                        accepter={MaskedInput}
                        mask={[/\d/, /\d/, 'X', /\d/, /\d/]}
                        size="xs"
                        name="Size"
                      />
                    </Form.Group>
                    <Form.Group controlId="ImageSize" className="form-group">
                      <Form.ControlLabel>אימג'</Form.ControlLabel>
                      <Form.Control
                        accepter={MaskedInput}
                        mask={[/\d/, /\d/, 'X', /\d/, /\d/]}
                        size="xs"
                        name="ImageSize"
                      />
                    </Form.Group>
                    <Form.Group
                      style={{ marginRight: '7px' }}
                      controlId="FrameSize"
                      className="form-group"
                    >
                      <Form.ControlLabel>ממוסגר</Form.ControlLabel>
                      <Form.Control
                        accepter={MaskedInput}
                        mask={[/\d/, /\d/, 'X', /\d/, /\d/]}
                        size="xs"
                        name="FrameSize"
                      />
                    </Form.Group>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <Form.Group
                      style={{ marginLeft: '7px' }}
                      controlId="HPGP"
                      className="form-group"
                    >
                      <Form.ControlLabel>HPGP *</Form.ControlLabel>
                      <Form.Control size="xs" name="HPGP" />
                    </Form.Group>
                    <Form.Group
                      controlId="ExhibitionArea"
                      className="form-group"
                    >
                      <Form.ControlLabel>א תצוגה</Form.ControlLabel>
                      <Form.Control size="xs" name="ExhibitionArea" />
                    </Form.Group>
                  </div>
                </Col>
              </Row>
            </Grid>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              postPrint()
            }}
            appearance="primary"
          >
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
