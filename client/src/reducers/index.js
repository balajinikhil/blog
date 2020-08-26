import {combineReducers} from "redux";

import articlesReducer from "./articlesReducers";
import authorReducer from "./authorsReducer"
import authorReducers from "./authorsReducer";

export default combineReducers({
    auth:()=>"dev",
    articles:articlesReducer,
    authors:authorReducers
})