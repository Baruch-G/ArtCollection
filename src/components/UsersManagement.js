import * as React from 'react'
import { useRef } from 'react'
import { Table } from 'rsuite'
import GenericTable from './GenericTable'
import { POST, GET } from '../fetch'

const defaultColumns = [
  {
    key: 'Id',
    label: 'Id',
    resizable: true,
  },
  {
    key: 'FirstName',
    label: 'First Name',
    resizable: true,
    sortable: true,
  },
  {
    key: 'LastName',
    label: 'Last Name',
    resizable: true,
    sortable: true,
  },
]

export default function UsersManagement() {
  const [rows, setRows] = React.useState([])
  const [tableConwidth, setTableConWidth] = React.useState(0)
  const usersTableContainer = useRef(null)

  React.useEffect(() => {
    fetchUsers()
    setTableConWidth(usersTableContainer.current.offsetWidth)
  })
  const fetchUsers = async () => {
    const { data: Items } = await GET('users')
    setRows(Items)
  }

  return (
    <div
      id="users-table-container"
      ref={usersTableContainer}
      style={{
        marginLeft: '50px',
        marginRight: '50px',
        marginTop: '50px',
      }}
    >
      <GenericTable
        divWidth={tableConwidth}
        rows={rows}
        defaultColumns={defaultColumns}
      />
    </div>
  )
}
