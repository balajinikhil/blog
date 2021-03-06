import React from 'react'
import {Route, BrowserRouter} from "react-router-dom"

import Home from "./Views/Home"
import NavBar from "./Views/NavBar"
import Dashboard from "./Admin/Dashboard"
import Article from "./Views/Article"
import Authors from "./Views/Authors"
import AuthorArticle from './Views/AuthorArticles'
import AddArticle from './Admin/AddArticle'
import AddAuthor from './Admin/AddAuthor'

class App extends React.Component{

    render(){
        return(
            <BrowserRouter>
                <NavBar />
                <Route path="/" exact component={Home} />
                <Route path="/article/:id" component={Article} />
                <Route path="/authors" component={Authors} />
                <Route path="/author/:id" component={AuthorArticle} />

                <Route path="/admin" component={Dashboard} />
                <Route path="/new/article" component={AddArticle} />
                <Route path="/new/author" component={AddAuthor} />
            </BrowserRouter>

        )
    }
}

export default App