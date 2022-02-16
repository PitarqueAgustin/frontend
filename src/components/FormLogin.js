import React, { useState } from "react";
import axios from 'axios';
import {
    Card,
    CardContent,
    TextField,
    Typography,
    Button,
    Alert
} from '@mui/material';

const API_LOGIN = "http://localhost:4000/api/login";

function FormLogin(){

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [alert, setAlert] = useState(false);

    const handleUser = (val)=>{
       setUser(val);
    };

    const handlePass = (val)=>{
        setPass(val);
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post(API_LOGIN,{
            username: user,
            password: pass
        })
        .then(res=>{
            console.log(res.data)
        })
        .catch(err=>{
            console.error(err)
        })
    };

    return(
        <Card sx={{ width: 400, height: 400, margin: '40px auto' }}>
            <CardContent>
                <Typography variant='h5' component='h5' sx={{textAlign: 'center'}}>
                    Iniciar Sesión
                </Typography>
                <form onSubmit={(e)=>{handleSubmit(e)}} style={formStyle}>
                    <TextField
                        sx={{ width: '100%' }}
                        required
                        id="user"
                        label="Usuario"
                        onChange={(e)=>{handleUser(e.target.value)}}
                    />
                    <TextField
                        sx={{ width: '100%' }}
                        required
                        id="pass"
                        label="Clave"
                        type="password"
                        autoComplete="current-password"
                        onChange={(e)=>{handlePass(e.target.value)}}
                    />
                    <Button type="submit" variant="contained">Ingresar</Button>
                </form>
                {
                    alert
                    ? <Alert onClose={() => {setAlert(!alert)}} sx={{marginTop: '20px'}}>
                        Login correcto
                      </Alert>
                    : <React.Fragment></React.Fragment>
                }
            </CardContent>
        </Card>
    );
}

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '20px',
    marginTop: '40px'
};

export default FormLogin;