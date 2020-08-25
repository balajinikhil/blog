import _ from "lodash"
import {
    ALL_ARTICLES
} from "../actions/types";

const articlesReducer = (state={}, action)=>{

    switch(action.type){

        case ALL_ARTICLES:
            return {...state, ..._.mapKeys(action.payload, "_id")};
        default:
            return state

    }
}

export default articlesReducer