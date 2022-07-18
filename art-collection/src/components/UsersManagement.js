import * as React from 'react'
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

  React.useEffect(() => {
    fetchUsers()
  })
  const fetchUsers = async () => {
      const {data: Items} = await GET('Users')
      setRows(Items)
  }

  return (
    <div
      style={{
        marginLeft: '50px',
        marginRight: '50px',
        marginTop: '50px',
      }}
    >
      <GenericTable rows={rows} defaultColumns={defaultColumns} />
    </div>
  )
}
