import { Fab } from '@mui/material'
import React, { useState } from 'react'
import ChatIcon from '@mui/icons-material/Chat';

export default function ChatButton() {
  const [visibleChat, setvisibleChat] = useState(false)
  const chatVisible = ()=>{
    setvisibleChat(!visibleChat)
  }

  return (
     <div >
       {visibleChat ?
          <div className='chatBackgroundFull'  onClick={chatVisible}>
             <div className='chatContainer visible'>
                  chat
             </div>
          </div>:
          <div>
            <div className='chatContainer invisible'>
              chat invisivel
            </div>  
          </div>
        }
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
