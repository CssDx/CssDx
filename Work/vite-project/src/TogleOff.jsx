import React from 'react';

import styles from './Styles/Style.module.css';
import TogleOnOff from './TogleOnOff';
import RegistrationOn from './TogleOn.jsx';


import { useState } from 'react';
import {StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';

import Select from '@material-ui/core/Select';
import  FormControl from '@material-ui/core/FormControl';
import  InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid'

import Stack from '@mui/material/Stack';
import Box from '@material-ui/core/Box';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';

import {green} from '@mui/material/colors'

function RegistrationOff() {

  const [Email, SetEmail] = useState('')
  const [Name, SetName] = useState('')
  const [Surname, SetSurname] = useState('')
  const [PhoneNumber, SetPhone] = useState('')
  const [Role, SetRole] = useState('');
  const Create = e => {
    e.preventDefault()
    console.log({Email, Name, Surname, PhoneNumber, Role})
  };

  const Item = styled(Paper)(({ theme }) => ({
    height: 300,
    width: 760,
    elevatiot: 8,
  }));
  
  const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
    width: 365,
    marginTop: 30,
    marginLeft: 390,
  }));
  return (
    <Box component="span" 
        height={300}
         width={760}
         sx={{ p: 2, border: 1, borderRadius: 1, borderColor: 'text.primary' }}
    >
    <Stack direction='row' alignItems="center" spacing={2} padding={1}>
    
          <FormControl fullWidth>
           
            <InputLabel>Роль</InputLabel>
            
            <Select
              
              variant="outlined"
              id="select" 
              value={Role}
              label="Role"
              onChange={e => SetRole(e.target.value)}
            >
              <MenuItem value='Admin'>Администратор</MenuItem>
              <MenuItem value='Master'>Мастер</MenuItem>
            </Select>
            
          </FormControl>
       
          <TextField fullWidth
            label="Электронная почта"
            value={Email}
            variant="outlined"
            onChange={e => SetEmail(e.target.value)}

          />
       
        </Stack>

        <Stack direction='row' alignItems="center" spacing={2} padding={1}>
       
          <TextField fullWidth
            label="Имя"
            value={Name}
            variant="outlined"
            onChange={e => SetName(e.target.value)}
          />
     

     
          <TextField fullWidth
            label="Фамилия"
            value={Surname}
            variant="outlined"
            onChange={e => SetSurname(e.target.value)}
          />
   
        </Stack>
        <Stack padding={1} width={365}>
  
          <TextField
            label="Телефон"
            value={PhoneNumber}
            variant="outlined"
            onChange={e => SetPhone(e.target.value)}
          /> 
        </Stack>
        <ColorButton variant='outlined' onClick={Create}> Создать и добавить </ColorButton>
   
  </Box>
    
  )
}
  

export default RegistrationOff

