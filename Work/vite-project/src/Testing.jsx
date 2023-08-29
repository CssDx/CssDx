import * as React from 'react';
import Switch from '@material-ui/core/Switch';

const Testing = () =>{
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);   
    console.log(event.target.checked)
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}

export default Testing


const handleChange = (event) => {
       
  setChecked(event.target.checked);   
  if (event.target.checked == true){
      render(
          
      )
  }else{
      console.log(2)
  }
};
return(
   <div>
      
      <Switch
          control={<Switch defaultChecked />}
          onClick={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
      />
  </div>
)


ReactDOM.createRoot(document.getElementById('root')).render(