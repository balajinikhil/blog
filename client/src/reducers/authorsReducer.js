import _ from "lodash"
import {
    ALL_AUTHORS, AUTHOR
} from "../actions/types"

const authorReducers = (state = {}, action)=>{

    switch(action.type){
        case ALL_AUTHORS:
            return {..._.mapKeys(action.payload, "_id")}
        case AUTHOR:
            return {[action.payload._id]:action.payload}
        default:
           return state
    }
}

export default authorReducers