import React from 'react'
import AddItemDialog from './AddPrintItemDialog'
import './EditPage.css'
import PostAddIcon from '@mui/icons-material/PostAdd'
import { ButtonToolbar, Button, Modal } from 'rsuite'
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import AddUserDialog from './AddUserDialog'
import ExportPrints from './ExportPrints'

const EditPage = () => {
  const [openAddPrintDialog, setOpenAddPrintDialog] = React.useState(false)
  const [openUserDialog, setOpenUserDialog] = React.useState(false)
  const [openExportDialog, setOpenExportDialog] = React.useState(false)

  var containers = [
    {
      key: 'users',
      title: 'משתמשים',
      features: [
        {
          header: 'הוסף משתמש',
          icon: <PersonAddAlt1Icon style={{ fontSize: 60 }} />,
          onClick: () => setOpenUserDialog(true),
        },
        {
          header: 'ערוך משתמש',
          icon: <PersonAddAlt1Icon style={{ fontSize: 60 }} />,
          onClick: () => console.log('edit user'),
        },
      ],
    },
    {
      key: 'prints',
      title: 'הדפסים',
      features: [
        {
          header: 'הוסף הדפס',
          icon: <PostAddIcon style={{ fontSize: 60 }} />,
          onClick: () => setOpenAddPrintDialog(true),
        },
        {
          header: 'ערוך הדפס',
          icon: <LibraryAddCheckIcon style={{ fontSize: 60 }} />,
          onClick: () => console.log('edit print'),
        },
        {
          header: 'ייצא לקובץ אקסל',
          icon: <LibraryAddCheckIcon style={{ fontSize: 60 }} />,
          onClick: () => setOpenExportDialog(true),
        },
      ],
    },
  ]

  return (
    <div>
      <div className="main-container">
        {containers.map((container) => (
          <div key={container.key} className="cards-container">
            <h4>{container.title}</h4>
            {container.features.map((btn) => (
              <div key={btn.header} onClick={btn.onClick} className="add-card">
                <h3>{btn.header}</h3>
                {btn.icon}
              </div>
            ))}
          </div>
        ))}
      </div>

      <AddItemDialog
        open={openAddPrintDialog}
        handleClose={() => setOpenAddPrintDialog(false)}
        handleOpen={() => setOpenAddPrintDialog(true)}
      />

      <AddUserDialog
        open={openUserDialog}
        handleClose={() => setOpenUserDialog(false)}
        handleOpen={() => setOpenUserDialog(true)}
      />

      <ExportPrints
        open={openExportDialog}
        handleClose={() => setOpenExportDialog(false)}
        handleOpen={() => setOpenExportDialog(true)}
      />
    </div>
  )
}

export default EditPage
