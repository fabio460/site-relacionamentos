import { Button, Fab } from '@mui/material'
import React, { useState } from 'react'
import ChatIcon from '@mui/icons-material/Chat';
import Chat from './Chat';

export default function ChatButton() {
  const [visibleChat, setvisibleChat] = useState(false)
  const chatVisible = ()=>{
    setvisibleChat(!visibleChat)
  }

  return (
     <div >
        
       {visibleChat ?
          <div >
             <div className='chatBackgroundFull'  onClick={chatVisible}></div>
             <div className='chatContainer visible'>
                <Chat/>
             </div>
          </div>:
          <div>
            <div className='chatContainer invisible'>
              chat invisivel
            </div>  
          </div>
        }
        {/* <div style={{position:'fixed',bottom:'80px', right:'25px'}}>chat</div> */}
        <Fab
            color="secondary"
            sx={{position:'fixed',bottom:'20px', right:'10px'}}
            onClick={chatVisible}
          >
            <ChatIcon />
            
        </Fab>
     </div>
  )
}
