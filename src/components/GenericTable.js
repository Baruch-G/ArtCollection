import React from 'react'
import { Table, ButtonToolbar, Button } from 'rsuite'
import './GenericTable.css'

const GenericTable = (props) => {
  const [sortColumn, setSortColumn] = React.useState()
  const [sortType, setSortType] = React.useState()
  const [showAll, setShowAll] = React.useState(false)
  const [minimumDisplayCol, setMinimumDisplayCol] = React.useState(6)

  const defaultColumns = props.defaultColumns

  defaultColumns.forEach((element) => {
    element.width = props.divWidth / defaultColumns.length
  })

  const columns = defaultColumns.filter((column) =>
    defaultColumns
      .map((column) => column.key)
      .some((key) => key === column.key),
  )

  React.useEffect(() => {
    console.log('GT')
  }, [sortColumn])

  const getData = (range = props.rows.length) => {
    if (sortColumn && sortType) {
      return props.rows.slice(0, range).sort((a, b) => {
        let x =
          sortColumn == 'PrintKind.Name'
            ? a.PrintKind
              ? a.PrintKind.Name
              : ''
            : a[sortColumn]
        let y =
          sortColumn == 'PrintKind.Name'
            ? b.PrintKind
              ? b.PrintKind.Name
              : ''
            : b[sortColumn]

        if (typeof x === 'string') {
          x = x.charCodeAt()
        }
        if (typeof y === 'string') {
          y = y.charCodeAt()
        }
        if (sortType === 'asc') {
          return x - y
        } else {
          return y - x
        }
      })
    }
    return props.rows.slice(0, range)
  }

  const handleSortColumn = (sortColumn, sortType) => {
    setSortColumn(sortColumn)
    setSortType(sortType)
  }

  return (
    <div style={{ direction: 'rtl' }}>
      <div
        style={{
          backgroundColor: 'white',
        }}
      >
        <Table
          data={showAll ? getData() : getData(minimumDisplayCol)}
          sortColumn={sortColumn}
          sortType={sortType}
          autoHeight
          style={{
            backgroundColor: '#f5f5f5',
          }}
          onSortColumn={handleSortColumn}
          onRowClick={(row) => {}}
        >
          {columns
            ? columns.reverse().map((column) => {
                const { key, label, ...rest } = column
                return (
                  <Table.Column className="table-column" {...rest} key={key}>
                    <Table.HeaderCell>{label}</Table.HeaderCell>
                    <Table.Cell dataKey={key} />
                  </Table.Column>
                )
              })
            : null}
        </Table>
      </div>

      {props.rows.length > minimumDisplayCol && (
        <ButtonToolbar
          onClick={() => setShowAll(!showAll)}
          style={{ marginTop: 10 }}
        >
          <Button>{showAll ? 'הצג פחות' : 'הצג הכול'}</Button>
        </ButtonToolbar>
      )}
    </div>
  )
}

export default GenericTable
