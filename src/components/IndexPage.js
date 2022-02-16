import { 
    Typography,
    CircularProgress
} from '@mui/material';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Logo from '../resources/images/social-logo.png';
import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';

const Index = () =>{

    const { isAuthenticated, isLoading } = useAuth0()

    return(
        <div style={indexStyles}>
            {
                isLoading
                ? <CircularProgress color="secondary" />
                :
                <>
                    <Typography variant='h3' color="white">Bienvenidos a la página de</Typography>
                    <img src={Logo} alt="logo social" />
                    {
                        isAuthenticated
                        ? <LogoutButton />
                        : <LoginButton />
                    }
                </>
            }
        </div>
    )
}

const indexStyles = {
    background: 'url("/assets/background-index.jpg")',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: '40px',
    textAlign: 'center'
}

export default Index;