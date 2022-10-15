import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { linkRemoto } from '../../../uteis';

export default function BtnDeletarConta() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deletarConta = ()=>{
     let user = JSON.parse(localStorage.getItem('usuarioLogado'))
     
     const formdata = new FormData()
     formdata.append('id',user._id)
     fetch(linkRemoto+'removerConta',{
        method:'delete',
        body:formdata
     })
    localStorage.setItem('usuarioLogado',null)
    alert('usuario deletado com sucesso')
    window.location.reload() 
  }
  return (
    <div>
      <Button 
        onClick={handleClickOpen}
        variant="outlined" 
        sx={{borderRadius:"30px"}}
      >
        remover conta
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Tem certeza que deseja deletar sua conta ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ATENÇÃO ! Se você clicar em sim, ira deletar totalmente sua conta e todos os seus dados irão se perder,
            clique em sim se realmente deseja deletar sua conta !       
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={deletarConta} color='success'>Sim</Button>
          <Button onClick={handleClose} color='error' autoFocus>
            Não
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
