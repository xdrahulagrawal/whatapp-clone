import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { Dialog, Typography, List, ListItem } from '@mui/material';
import qrimage from '../../assests/images/qrcode.jpg'
import '../../assests/styles/logindialog.scss';
import jwt_decode from 'jwt-decode'


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

  /**After login response convert decode information*/
  const _onLoginSuccess = (res) => {
    const decode = jwt_decode(res.credential)
  }

  const _onLoginError = (res) => {
    console.log('Login Failed', res);
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
          <div className='login-dialog-container-item2-item2'>
            <GoogleLogin onSuccess={_onLoginSuccess} onError={_onLoginError} />
          </div>
        </div>
      </div>
    </Dialog>
  )
}

export default LoginDialog