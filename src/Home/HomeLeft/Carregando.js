import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Carregando() {
  return (
    <Stack spacing={1}>
      <div className='elementoDaLista' >
        <div className='elementoDaListaAvatar'>
           <Skeleton variant="circular" width={40} height={40} />
        </div>
        <div>
            <div className='elementoDaListaNome'>
               <Skeleton variant="text" sx={{ fontSize: '1rem',width:"200px" }} />
            </div>
            <div className='elementoDaListaProfissao'>
               <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            </div>
            <div className='elementoDaListaCidade'>
               <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            </div>
        </div>
    </div>
    </Stack>
  );
}
