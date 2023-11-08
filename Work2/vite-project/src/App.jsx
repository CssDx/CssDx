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
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';



import FormControlLabel from '@mui/material/FormControlLabel';

import { mdiMenuDown } from '@mdi/js';
import { ArrowLeftIcon } from '@mui/x-date-pickers';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import handleChange from './TheSwitch'


function DateOfWorking() {

  const ClickWeek = (e, id) =>{
    e.preventDefault()
    console.log(id)
  }

  
  const [value, setValue] = React.useState(dayjs('9:00'))

  const[checked, setChecked] = useState(true) 
  const [IdDay, SetId] = useState('')

  const SwitchColorGreen = styled((props) => (
    <Switch {...label} defaultChecked />
    ))

  const Relog = () => (
    console.log(items.id)
  )

  const Item4 = styled('div')(({ theme }) => ({
    padding: theme.spacing(3),
    textAlign: 'center',
    width: 210,
    elevatiot: 0,
    fontWeight: 'bold',
  }));

  const Item3 = styled('div')(({ theme }) => ({
    padding: theme.spacing(3),
    alignItems: 'center',
    width: 250,
    elevatiot: 0,
    fontWeight: 'bold',
    paddingLeft: 40,
  }));

  const TheRight = styled('div')(({theme}) => ({
    alignItems: 'end',
    paddingLeft: 900,
  }))

return(
    <Box  maxWidth={990} bgcolor = 'background.paper'>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Stack direction='row' spacing={1}>
          <Item4> День недели </Item4>
          <Item4  > Время открытия </Item4>
          <Item4> Время закрытия </Item4>
          <Item4> Работаем в этот день </Item4>
        </Stack>
          {[ 
            'Понедельник', 
            'Вторник', 
            'Среда', 
            'Четверг', 
            'Пятница', 
            'Суббота', 
            'Воскресенье'].map((items, index)  => {
              return(
                <Stack key={index} direction='row' spacing={7} rx={5}>
                  <Item4> {items} </Item4>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['TimePicker', 'TimePicker']}>
                        <DesktopTimePicker
                                          defaultValue={dayjs('2022-04-17T15:30')}
                                          ampm={false}             
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['TimePicker', 'TimePicker']}>
                        <MobileTimePicker
                                        defaultValue={dayjs('2022-04-17T15:30')}
                                        ampm={false}
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                      <Item3>
                        <Switch onChange={id => ClickWeek} onClick={handleChange}/>
                      </Item3>
                </Stack>
            )})}
            <TheRight>
              <Button color="success" variant="contained" onClick={ClickWeek}> Сохранить </Button>
            </TheRight>
      </Grid>
    </Box>
)
}

export default DateOfWorking;
