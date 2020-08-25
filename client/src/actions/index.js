import {
    ALL_ARTICLES,
    ARTICLE
} from "./types"

import api from "../api"

export const allArticle = () =>async dispatch =>{

    const response = await api.get("/articles");

    dispatch({
        type:ALL_ARTICLES,
        payload:response.data.articles
    })
}

export const singleArticle = (id) => async dispatch => {
    
    const response = await api.get(`/article/${id}`);
    
    dispatch({
        type:ARTICLE,
        payload:response.data.article
    })
}