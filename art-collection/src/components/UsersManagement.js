import * as React from 'react'
import { Table } from 'rsuite'

export default function UsersManagement() {
  const [rows, setRows] = React.useState([])
  const [sortColumn, setSortColumn] = React.useState()
  const [sortType, setSortType] = React.useState()

  const getData = () => {
    if (sortColumn && sortType) {
      return rows.sort((a, b) => {
        let x = a[sortColumn]
        let y = b[sortColumn]
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
    return rows
  }

  React.useEffect(() => {
    fetchUsers()
  })
  const fetchUsers = () => {
    fetch('https://localhost:7009/Users')
      .then((response) => response.json())
      .then((data) => setRows(data))
      .catch((e) => console.log(e))
  }

  const handleSortColumn = (sortColumn, sortType) => {
    setSortColumn(sortColumn)
    setSortType(sortType)
  }

  return (
    <div
      style={{
        backgroundColor: 'white',
        marginLeft: '50px',
        marginRight: '50px',
        marginTop: '50px',
      }}
    >
      <Table
        data={getData()}
        sortColumn={sortColumn}
        sortType={sortType}
        autoHeight
        onSortColumn={handleSortColumn}
        onRowClick={(rows) => {
          console.log(rows)
        }}
      >
        <Table.Column sortable resizable>
          <Table.HeaderCell>שם פרטי</Table.HeaderCell>
          <Table.Cell dataKey="FirstName" />
        </Table.Column>

        <Table.Column sortable resizable width={200}>
          <Table.HeaderCell>שם משפחה</Table.HeaderCell>
          <Table.Cell dataKey="LastName" />
        </Table.Column>

        <Table.Column resizable width={200}>
          <Table.HeaderCell>כתובת מייל</Table.HeaderCell>
          <Table.Cell style={{ direction: 'ltr' }} dataKey="email">
            {(e) => <a href={`mailto:${e.Email}`}>{e.Email}</a>}
          </Table.Cell>
        </Table.Column>

        <Table.Column resizable width={200}>
          <Table.HeaderCell>האם מנהל</Table.HeaderCell>
          <Table.Cell dataKey="IsAdmin">
            {(a) => <span>{a.isAdmin ? 'כן' : 'לא'}</span>}
          </Table.Cell>
        </Table.Column>

        <Table.Column resizable width={200}>
          <Table.HeaderCell>פעולות</Table.HeaderCell>
          <Table.Cell>
            {(rowData) => {
              function handleAction() {
                alert(`Id:${rowData.Id}`)
              }
              return (
                <span>
                  <a onClick={handleAction}> Edit </a> |{' '}
                  <a onClick={handleAction}> Remove </a>
                </span>
              )
            }}
          </Table.Cell>
        </Table.Column>
      </Table>
    </div>
  )
}
