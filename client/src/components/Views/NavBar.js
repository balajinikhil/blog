import React from 'react'
import {Link} from "react-router-dom"

class NavBar extends React.Component{

    style = {position:"fixed", top:"0px", left:"auto", zIndex:"10", height:"72px" }

    render(){
        return(
            <div>
                <div className="ui borderless main menu fixed nav" style={this.style}>
                    <div className="ui text container">
                        <div className="header item">
                            <Link to="/" >Logo</Link>
                        </div>
                        
                    </div>
                </div>
                <div style={{marginBottom:"80px"}}></div>
        </div>
        )
    }
}

export default NavBar