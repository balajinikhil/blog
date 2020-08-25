import {combineReducers} from "redux";

import articlesReducer from "./articlesReducers";

export default combineReducers({
    auth:()=>"dev",
    articles:articlesReducer
})