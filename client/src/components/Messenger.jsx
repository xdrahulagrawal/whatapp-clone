import React from 'react'
import { AppBar, Toolbar } from '@mui/material';

//components
import LoginDialog from './account/LoginDialog'

//css
import '../assests/styles/messenger.scss'

function Messenger() {
    return (
        <div className='messenger-container'>
            <AppBar className='appbar-container'>
                <Toolbar></Toolbar>
            </AppBar>
            <LoginDialog />
        </div>
    )
}

export default Messenger