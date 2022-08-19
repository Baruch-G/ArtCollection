import * as React from 'react'
import { Grid, GridColumn, GridToolbar } from '@progress/kendo-react-grid'
import { ExcelExport } from '@progress/kendo-react-excel-export'
import { ButtonToolbar, Button, Modal, Form, Input, Toggle } from 'rsuite'
import '@progress/kendo-theme-default/dist/all.css'

const ExportDialog = (props) => {
  const _export = React.useRef(null)

  const excelExport = () => {
    if (_export.current !== null) {
      _export.current.save()
    }
  }

  return (
    <div className="modal-container">
      <Modal
        style={{ direction: 'rtl' }}
        overflow={true}
        open={props.open}
        onClose={props.onClose}
        size={'full'}
      >
        <Modal.Header>
          <Modal.Title style={{ display: 'grid', justifyContent: 'center' }}>
            <div>ייצוא לאקסל</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ExcelExport data={props.items} ref={_export}>
            <Grid
              data={props.items}
              style={{
                height: '420px',
              }}
            >
              <GridToolbar>
                <button
                  title="Export Excel"
                  className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
                  onClick={excelExport}
                >
                  ייצא נתונים
                </button>
              </GridToolbar>

              {props.columns.map((col) => (
                <GridColumn key={col.key} field={col.key} title={col.label} />
              ))}
            </Grid>
          </ExcelExport>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ExportDialog
