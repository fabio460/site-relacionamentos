const inicial = {
    search : null
}

const SearchReducer = (state=inicial,action)=>{
    switch (action.type) {
        case 'search':
            return {...state,search:action.payload.search}
            break;
    
        default:
            break;
    }
    return state
}

export default SearchReducer