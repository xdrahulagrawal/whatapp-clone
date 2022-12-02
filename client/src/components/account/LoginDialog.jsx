import React from 'react'
import { Dialog, Typography, List, ListItem } from '@mui/material';
import qrimage from '../../assests/images/qrcode.jpg'
import '../../assests/styles/logindialog.scss'


function LoginDialog() {

  const dialogStyle = {
    maxWidth: '100%',
    maxHeight: "100%",
    boxShadow: "none",
    width: "60%",
    height: "96%",
    marginTop: "12%",
    overflow: 'hidden',
  }

  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }}>
      <div className='login-dialog-container'>
        <div className='login-dialog-container-item1'>
          <Typography className='login-dialog-container-item1-item1'>To use WhatsApp on your computer:</Typography>
          <List>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>2. Tab Menu  or Settings  and select Linked Devices</ListItem>
            <ListItem>3. Tap on Link a Device</ListItem>
            <ListItem>4. Point your phone to this screen to capture the code</ListItem>
          </List>
        </div>
        <div className='login-dialog-container-item2'>
          <img src={qrimage} alt='qr-code' width={264} height={264} className='login-dialog-container-item2-item1' />
        </div>
      </div>
    </Dialog>
  )
}

export default LoginDialog