import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function ControlledRadioButtonsGroup({setintervaloDePaginacao}) {
  const [value, setValue] = React.useState(5);
  //setintervaloDePaginacao(value)
  const handleChange = (event) => {
    
    setValue(event.target.value);
    setintervaloDePaginacao(event.target.value)
  };

  
  return (
    <FormControl sx={{width:'100%'}}>
      
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        
      >
        <div style={{display:'flex',justifyContent:'flex-end'}}>
        <FormControlLabel value={5} control={<Radio />} label="5" />
        <FormControlLabel value={10} control={<Radio />} label="10" />
        <FormControlLabel value={15} control={<Radio />} label="15" />
        <FormControlLabel value={20} control={<Radio />} label="20" />
        </div>
      </RadioGroup>
    </FormControl>
  );
}
