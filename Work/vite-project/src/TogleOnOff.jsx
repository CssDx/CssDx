import React from 'react';

import styles from './Styles/Style.module.css'

import { useState } from 'react'
import {StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'

import RegistrationOff from './TogleOff.jsx'
import RegistrationOn from './TogleOn.jsx'

import Switch from '@material-ui/core/Switch';
import Select from '@material-ui/core/Select';
import  FormControl from '@material-ui/core/FormControl';
import  InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@mui/material/FormControlLabel';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import makeStyles from '@material-ui/styles/makeStyles';
import Stack from '@mui/material/Stack';

import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const TogleOnOff = () => {

    const [Email, SetEmail] = useState('')
    const [Role, SetRole] = useState('')
    const [Surname, SetSurname] = useState('')
    const [PhoneNumber, SetPhone] = useState('')
    const [Name, SetName] = useState('')

    const Create = e => {
    e.preventDefault()
    console.log({Email, Role, Surname, PhoneNumber, Name})
    }

    const Item = styled(Paper)(({ theme }) => ({
        textAlign: '',
        height: 130,
        width: 760,
        elevatiot: 8,
    }));
 
    const [OnOff, SetTogle] = useState(false);
    const Togle = () => {
        SetTogle(!OnOff)}
    
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);   
        console.log(!checked)
    }

    return(
        <Box>
            <Stack direction='column'>
                <FormControlLabel control={<Switch/>} label="Сотрудник уже зарегестрировался" onClick={handleChange}/>
                    {(checked==false)?(<div><FormControl fullWidth size='small' ><InputLabel>Включите, если сотрудник уже зарегестрировался в системе самостоятельно</InputLabel></FormControl></div>):(<div><InputLabel>Выключите, если сотрудник еще не зарегестрировался</InputLabel></div>)}
                    {(checked==true)?(<RegistrationOn />):(<RegistrationOff />)}
            </Stack>
        </Box>
    )
}



export default TogleOnOff

