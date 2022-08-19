import React from 'react'
import { useRef } from 'react'
import { defaultClassPrefix } from 'rsuite/esm/utils'
import GenericTable from './GenericTable'
import GenericTable2 from './GenericTable2'

const defaultColumns = [
  {
    key: 'Title',
    label: 'כותרת',
    width: 240,
    resizable: true,
    sortable: true,
  },
  {
    key: 'PrintKind',
    label: 'סוג הדפס',
    width: 250,
    resizable: true,
    sortable: true,
  },
  {
    key: 'ArtistName',
    label: 'שם אמן/יוצר',
    width: 250,
    resizable: true,
    sortable: true,
  },
  {
    key: 'Source',
    label: 'מקור',
    width: 250,
    resizable: true,
    sortable: true,
  },
  {
    key: 'Notes',
    label: 'הערות',
    width: 315,
    resizable: true,
    sortable: true,
  },
  {
    key: 'HPGP',
    label: 'HPGP',
    width: 70,
    resizable: true,
  },
]

const PrintsTable = (props) => {
  const [rows, setRows] = React.useState([])
  const [tableConwidth, setTableConWidth] = React.useState(0)

  const printTableContainer = useRef(null)

  React.useEffect(() => {
    setRows(props.prints)
    setTableConWidth(printTableContainer.current.offsetWidth)
  })

  return (
    <div
      ref={printTableContainer}
      style={{
        marginTop: '50px',
      }}
    >
      {/* <GenericTable divWidth={tableConwidth} rows={rows} defaultColumns={defaultColumns} /> */}
      <GenericTable2 items={rows} columns={defaultColumns} />
    </div>
  )
}

export default PrintsTable
