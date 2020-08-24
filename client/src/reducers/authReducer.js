import {
    SIGN_IN
} from "../actions/types"

// const init = {
//     isSignedIn:null
// }

const authReducer = (state = {auth:false}, action)=>{

    switch(action.type){
        
        case SIGN_IN:
            return {...state, auth:action.payload}
        default:
            return state
    }
}

export default authReducer