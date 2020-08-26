import {
    ALL_ARTICLES,
    ARTICLE,
    ALL_AUTHORS,
    AUTHOR
} from "./types"

import api from "../api"

export const allArticle = (page) =>async dispatch =>{

    const response = await api.get("/articles", {
        params:{
            page:page || 1 
        }
    });

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

export const allAuthors = ()=>async dispatch =>{

    const response =await api.get("/authors");

    dispatch({
        type:ALL_AUTHORS,
        payload:response.data.authors
    })
}

export const singleAuthor = (id) =>async dispatch => {

    const response = await api.get(`/author/${id}`)
  

    dispatch({
        type:AUTHOR,
        payload:response.data.author
    })
}