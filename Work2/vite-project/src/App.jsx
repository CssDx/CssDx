import * as React from 'react';
import { useState } from 'react'

import shortid from 'shortid';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';

import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';

import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import MenuItem from '@mui/material/MenuItem';

import Divider from '@mui/material/Divider';

import FormControlLabel from '@mui/material/FormControlLabel';

import { mdiMenuDown } from '@mdi/js';
import { ArrowLeftIcon } from '@mui/x-date-pickers';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import handleChange from './TheSwitch'
function TSwitch(event){
  const [checked, setChecked] = React.useState(true) 
  setChecked(event.target.checked);
  console.log(event.target.checked)
}


function DateOfWorking() {
  

  const [value, setValue] = React.useState(dayjs('9:00'))

  const[checked, setChecked] = useState(true) 


  const SwitchColorGreen = styled((props) => (
    <Switch {...label} defaultChecked />
    ))

  const Relog = () => (
    console.log(items.id)
  )

  const Item4 = styled('div')(({ theme }) => ({
    padding: theme.spacing(3),
    textAlign: 'center',
    width: 250,
    elevatiot: 0,
    fontWeight: 'bold',
  }));
  const Item3 = styled('div')(({ theme }) => ({
    padding: theme.spacing(3),
    alignItems: 'center',
    width: 250,
    elevatiot: 0,
    fontWeight: 'bold',
    paddingLeft: 110,
  }));

  const TheRight = styled('div')(({theme}) => ({
    textAlign: 'end',
    padding: 4,
  }))
  const Icone = () => {
    return(
      <Icon path={mdiMenuDown} size={1} />
    )
  }
return(
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Stack direction='row' spacing={1}>
          <Item4> День недели</Item4>
          <Item4> Время открытия</Item4>
          <Item4> Время закрытия</Item4>
          <Item4> Работаем в этот день </Item4>
        </Stack>
          {[{id: 1, date: 'Понедельник'}, 
          {id : 2, date: 'Вторник'}, 
          {id : 3, date: 'Среда'}, 
          {id : 4, date : 'Четверг'}, 
          {id : 5, date : 'Пятница'}, 
          {id : 6, date : 'Суббота'}, 
          {id : 7, date: 'Воскресенье'}].map((items)  =>{
          return(
        
            <Stack direction='row' spacing={7} rx={5}>
              <Item4 key={items.id} > {items.date} </Item4>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['TimePicker', 'TimePicker']}>
                  <MobileTimePicker
                                  defaultValue={dayjs('2022-04-17T15:30')}
                                  ampm={false}
                                  rightArrowIcon={ArrowDropDownIcon}
                  />
                </DemoContainer>
              </LocalizationProvider>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['TimePicker', 'TimePicker']}>
              
                  <MobileTimePicker
                                  defaultValue={dayjs('2022-04-17T15:30')}
                                  ampm={false}
                  >
                  </MobileTimePicker>
              
                </DemoContainer>
              </LocalizationProvider>
            <Item3>
            <Switch onClick={handleChange}/>
            </Item3>
            </Stack>
   
            
)})}
    </Grid>
    </Box>
)
}

export default DateOfWorking;
