import React,{useState} from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import ProgressoHeader from './ProgressoHeader';
import Formulario from './Formulario';
import Formularioendereco from './Formularioendereco';
import FormularioFinal from './FormularioFinal';



export default function Progresso() {
  const [telaCompleta, settelaCompleta] = React.useState(false)
  
  const [emailValido, setemailValido] = useState(false)
  const [campoNulo, setcampoNulo] = useState(false)
  const [nome,setNome]=useState('')
  const [email,setEmail]=useState('')
  const [senha,setSenha]=useState('')
  const [senhaInvalida, setsenhaInvalida] = useState(false)
  const [senhaNula, setsenhaNula] = useState(false)
  const [senhasNaoConferem, setsenhasNaoConferem] = useState(false)
  const [confirSenha, setconfirSenha] = useState('')
  const [confirmaSenha, setconfirmaSenha] = useState('')
  const steps = [
    {
      label: <ProgressoHeader ativo={0}/>,
      description: <Formulario 
        setEmail={setEmail}
        email={email}
        emailValido={emailValido}
        nome={nome}
        setNome={setNome}
        campoNulo={campoNulo}
        senha={senha}
        setSenha={setSenha}
        senhaInvalida={senhaInvalida}
        senhaNula={senhaNula}
        senhasNaoConferem={senhasNaoConferem}
        confirSenha={confirSenha}
        setconfirSenha={setconfirSenha}
        setconfirmaSenha={setconfirmaSenha}
        confirmaSenha={confirmaSenha}
      />,
    },
    {
      label: <ProgressoHeader ativo={1}/>,
      description:
        <Formularioendereco
          
        />,
    },
    {
      label: <ProgressoHeader ativo={2}/>,
      description:<FormularioFinal/>,
    },
  ];
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  
  const handleNext = () => {
    let emailValido = email.search(/^[a-z]+(@){1}[a-z]+(.com)(.br)*$/)
    let nomeValido = nome.search(/^([a-zA-Z])+$/)
    let senhaValida = senha.search(/^[a-zA-Z0-9@#$%&*]{5}/)
    

    if (emailValido === 0) {
      setemailValido(false)
      if (nomeValido === 0) {
        setcampoNulo(false)
        if (senha !== '') {
          setsenhaNula(false)
          if (senhaValida === 0) {
            setsenhaInvalida(false)
            // setActiveStep((prevActiveStep) => prevActiveStep + 1);
            if (senha === confirmaSenha) {
              
              setsenhasNaoConferem(false)
              setActiveStep((prevActiveStep) => prevActiveStep + 1);
            } else {
              setsenhaInvalida(false)
              setsenhasNaoConferem(true)
            }
          } else {
            setsenhaInvalida(true)
          }
        } else {
          setsenhaNula(true)
          setsenhaInvalida(false)
          setsenhasNaoConferem(false)
        }
      }else{
        setcampoNulo(true)
        setsenhaInvalida(false)
        setsenhasNaoConferem(false)
      }
    }else{
      setemailValido(true)
      setsenhasNaoConferem(false)
    }


   

    
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: '100%', flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          
          display: 'flex',
          alignItems: 'center',
          justifyContent:"center",
          height: 50,
          pl: 0,
          bgcolor: 'transparent',
        }}
      >
        
        <Typography >
          <div style={{background:'',minWidth:""}}>
             {steps[activeStep].label}
          </div>
        </Typography>
      </Paper>
      <Box sx={{ height: '80%' }}>
        {steps[activeStep].description}
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{bgcolor: 'transparent'}}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            <div >próximo</div>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight/>
            ) : (
              <KeyboardArrowLeft/>
            )}
            <div >voltar</div>
          </Button>
        }
      />
    </Box>
  );
}
