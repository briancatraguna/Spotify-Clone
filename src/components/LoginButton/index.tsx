import { Button } from '@material-ui/core';
import React from 'react';
import './style.css';


const LoginButton = () => {
    const MY_WEBSITE: string = "https://brians-spotify.vercel.app/callback"
    const REDIRECT_URL: string = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=token&redirect_uri=${MY_WEBSITE}&scope=playlist-modify-private`

    return (
        <a href={REDIRECT_URL}>
            <Button variant="contained" color="primary" className="myButton">Login</Button>
        </a>
    )
    
}

export default LoginButton;