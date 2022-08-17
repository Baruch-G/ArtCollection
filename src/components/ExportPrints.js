import React from 'react'
import ExportDialog from './ExportDialog'
import { POST, GET } from '../fetch'

const columns = [
  {
    key: 'Title',
    label: 'כותרת',
  },
  {
    key: 'PrintKind.Name',
    label: 'סוג הדפס',
  },
  {
    key: 'ArtistName',
    label: 'שם אמן/יוצר',
  },
  {
    key: 'Source',
    label: 'מקור',
  },
  {
    key: 'Notes',
    label: 'הערות',
  },
  {
    key: 'HPGP',
    label: 'HPGP',
  },

  {
    key: 'EstimatedDate',
    label: 'תיארוך',
  },

  {
    key: 'References',
    label: 'מ"מ והערות',
  },

  {
    key: 'AdditionalNotes',
    label: 'הערות נוספות',
  },

  {
    key: 'Size',
    label: "אימג'",
  },

  {
    key: 'ImageSize',
    label: 'ImageSize',
  },

  {
    key: 'FrameSize',
    label: 'ממוסגר',
  },

  {
    key: 'ExhibitionArea',
    label: 'א תצוגה',
  },
]

const ExportPrints = (props) => {
  const [prints, setPrints] = React.useState([])

  React.useEffect(() => {
    fetchPrints()
  })

  const fetchPrints = async () => {
    const { data: Items } = await GET('prints')
    setPrints(Items)
  }
  return <ExportDialog items={prints} columns={columns} open={props.open} onClose={props.handleClose} />
}

export default ExportPrints
