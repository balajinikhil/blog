import React from "react"
import {BrowserRouter, Route} from "react-router-dom"

import NavBar from "./NavBar"
import Home from "./Views/Home"
import Login from "./Views/Login"

class App extends React.Component{

    render(){
        return(
            <div>
                <BrowserRouter>
                    <NavBar />
                    
                        <div className="ui container">
                            <Route path="/" exact component={Home} />
                            <Route path="/author/login"  component={Login} />
                        </div>
                   
                </BrowserRouter>
            </div>
        )
    }
}

export default App