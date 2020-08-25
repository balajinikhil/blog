import {
    ALL_ARTICLES
} from "./types"
import api from "../api"

export const allArticle = () =>async dispatch =>{

    const response = await api.get("/articles");

    dispatch({
        type:ALL_ARTICLES,
        payload:response.data.articles
    })
}