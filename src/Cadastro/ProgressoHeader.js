import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Dados pessoais',
  'Localidade',
  'Finalizar',
];

export default function ProgressoHeader({ativo}) {
  return (
    <Box sx={{color:"white",width:'',marginBottom:"50px" }}>
      <Stepper activeStep={ativo} alternativeLabel>
        {steps.map((label) => (
          <Step key={label} sx={{display:"flex",justifyContent:"space-between"}} >
            <StepLabel ><div className='ProgressoHeader' style={{}}>{label}</div></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
