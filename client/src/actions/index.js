import {
    SIGN_IN
} from "./types"

import Api from "../api/api";

export const login = obj => async dispatch => {

    const response = await Api.post("/login", {
        email:obj.email,
        password:obj.password
    })

    console.log(response.data);

    dispatch({
        type:SIGN_IN,
        payload:response.data.auth
    })
}