import React from 'react'
import GenericTable from './GenericTable'

const defaultColumns = [
  {
    key: 'Title',
    label: 'כותרת',
    width: 240,
    resizable: true,
    sortable: true,
  },
  {
    key: 'PrintKind.Name',
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
  },
]

const PrintsTable = (props) => {
  const [rows, setRows] = React.useState([])

  React.useEffect(() => {
    // console.log(props.prints)
    setRows(props.prints)
  })

  return (
    <div
      style={{
        marginTop: '50px',
      }}
    >
      <GenericTable rows={rows} defaultColumns={defaultColumns} />
    </div>
  )
}

export default PrintsTable
