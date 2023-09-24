const INITIAL_STATE = {
    favorite: []
}

 const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "SET_FAVORITE" :
            return {...state, favorite: action.payload }
        default :
         return state
    }
}

export default reducer;