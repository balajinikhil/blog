import React from 'react'
import {Route, BrowserRouter} from "react-router-dom"

import Home from "./Views/Home"
import NavBar from "./Views/NavBar"
import Dashboard from "./Admin/Dashboard"

class App extends React.Component{

    render(){
        return(
            <BrowserRouter>
                <NavBar />
                <Route path="/" exact component={Home} />
                <Route path="/admin" component={Dashboard} />
            </BrowserRouter>

        )
    }
}

export default App