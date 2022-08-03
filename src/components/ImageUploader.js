import { Uploader, Message, Loader, useToaster } from 'rsuite'
import React from 'react'
import ImageIcon from '@mui/icons-material/Image'

function previewFile(file, callback) {
  const reader = new FileReader()
  reader.onloadend = () => {
    callback(reader.result)
  }
  reader.readAsDataURL(file)
}

const ImageUploader = () => {
  const toaster = useToaster()
  const [uploading, setUploading] = React.useState(false)
  const [fileInfo, setFileInfo] = React.useState(null)

  return (
    <Uploader
      style={{ width: '100%' }}
      fileListVisible={false}
      listType="picture"
      action="//jsonplaceholder.typicode.com/posts/"
      onUpload={(file) => {
        setUploading(true)
        previewFile(file.blobFile, (value) => {
          setFileInfo(value)
        })
      }}
      onSuccess={(response, file) => {
        setUploading(false)
        toaster.push(<Message type="success">התמונה הועלתה לענן</Message>)
        console.log(response)
      }}
      onError={() => {
        setFileInfo(null)
        setUploading(false)
        toaster.push(<Message type="error">הפעולה נכשלה</Message>)
      }}
    >
      <button style={{ width: '100%', height: 130, marginTop: '1px' }}>
        {uploading && <Loader backdrop center />}
        {fileInfo ? (
          <img
            src={fileInfo}
            width="100%"
            height="100%"
            style={{ objectFit: 'contain' }}
          />
        ) : (
          <ImageIcon
            style={{ fontSize: 80, objectFit: 'contain', overflow: 'hidden' }}
          />
        )}
      </button>
    </Uploader>
  )
}

export default ImageUploader
