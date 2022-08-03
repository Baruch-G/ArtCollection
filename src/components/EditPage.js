import React from 'react'
import AddItemDialog from './AddPrintItemDialog'
import './EditPage.css'
import PostAddIcon from '@mui/icons-material/PostAdd'
import { ButtonToolbar, Button, Modal } from 'rsuite'
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import AddUserDialog from './AddUserDialog'
const EditPage = () => {
  const [open, setOpen] = React.useState(false)
  const [openUserDialog, setOpenUserDialog] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <div className="card-container" style={{ marginTop: 20 }}>
        <div className="add-card">
          <LibraryAddCheckIcon style={{ fontSize: 90 }} />
          <h3>הוסף סוג הדפס</h3>
        </div>
        <div className="add-card" onClick={handleOpen}>
          <PostAddIcon style={{ fontSize: 90 }} />
          <h3>הוסף הדפס</h3>
        </div>
        <div className="add-card" onClick={() => setOpenUserDialog(true)}>
          <PersonAddAlt1Icon style={{ fontSize: 90 }} />
          <h3>הוסף משתמש</h3>
        </div>
      </div>

      <AddItemDialog
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />

      <AddUserDialog
        open={openUserDialog}
        handleClose={() => setOpenUserDialog(false)}
        handleOpen={() => setOpenUserDialog(true)}
      />
    </div>
  )
}

export default EditPage
