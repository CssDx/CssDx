import * as React from 'react';
import { useState } from 'react'



  
function handleChange(event){
      const [checked, setChecked] = React.useState(true) 
      setChecked(event.target.checked);
      console.log(event.target.checked)
    }


    export default handleChange