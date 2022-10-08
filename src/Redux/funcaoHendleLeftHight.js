const inicial = {
    handleLeftRight:''
}

const functionHandleLeftRight = (state=inicial,action)=>{
   switch (action.type) {
    case 'functionHandleLeftRight':
        return {...state,handleLeftRight:action.payload.handleLeftRight}
        break;
   
    default:
        break;
   }
   return state
}

export default functionHandleLeftRight