import _ from "lodash"
import {
    ALL_ARTICLES,
    ARTICLE
} from "../actions/types";

const articlesReducer = (state={}, action)=>{

    switch(action.type){

        case ALL_ARTICLES:
            return { ..._.mapKeys(action.payload, "_id")};
        case ARTICLE:
            return {  [action.payload._id]:action.payload };
        default:
            return state

    }
}

export default articlesReducer