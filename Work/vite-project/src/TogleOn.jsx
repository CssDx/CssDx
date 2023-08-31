import React from 'react';


import TogleOnOff from './TogleOnOff.jsx';
import RegistrationOff from './TogleOff.jsx';

import { useState } from 'react';
import {StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';

import Switch from '@material-ui/core/Switch';
import Select from '@material-ui/core/Select';
import  FormControl from '@material-ui/core/FormControl';
import  InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from '@material-ui/styles/styled';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import makeStyles from '@material-ui/styles/makeStyles';


import Stack from '@mui/material/Stack';
import { green } from '@mui/material/colors'



function RegistrationOn() {

  const [Email, SetEmail] = useState('')
  const [Role, SetRole] = useState('')

  const Create = e => {
    e.preventDefault()
    console.log({Email, Role})
  }

  const Item = styled(Paper)(({ theme }) => ({
    textAlign: '',
    height: 130,
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
      <Stack direction='row' alignItems="center" spacing={2}>
        <FormControl fullWidth>
          <InputLabel> Роль </InputLabel>
            <Select
              id="select" 
              value={Role}
              variant="outlined"
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
            <ColorButton variant='outlined' onClick={Create}> Добавить </ColorButton>
    </Box>
  )
}
  

export default RegistrationOn
