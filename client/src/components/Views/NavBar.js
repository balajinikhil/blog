import React from 'react'
import {Link} from "react-router-dom"

class NavBar extends React.Component{

    state = {width:"0px", zIndex:"1"}

    style = {position:"fixed", top:"0px", left:"auto", zIndex:"10", height:"72px", zIndex:"1" }

    sideNav = () => {
        return(
            <div id="mySidenav" className="sidenav" style={{width:this.state.width, zIndex:this.state.zIndex}}  >
                <a href="javascript:void(0)" className="closebtn" onClick={()=>{this.setState({width:"0px", zIndex:"0"})}} >&times;</a>
                <Link to="/" >Home</Link>
                <Link to="/contact" >Contact</Link>
            </div>
        )
    }

    render(){
        return(
            <div>
                <div>{this.sideNav()}</div>
                <div className="ui borderless main menu fixed nav" style={this.style}>
                    <div className="left floated item" onClick={()=>this.setState({width:"250px", zIndex:"10"})}  >
                        <i class="bars icon"></i>
                        Menu
                    </div>
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