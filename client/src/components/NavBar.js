import React from 'react'

class NavBar extends React.Component{

    style = {position:"fixed", top:"0px", left:"auto", zIndex:"10", height:"72px" }

    render(){
        return(
            <div>
                <div className="ui borderless main menu fixed nav" style={this.style}>
                    <div className="ui text container">
                        <div className="header item">
                            <i className="user icon"></i>
                        </div>
                        <a href="/" className="item">Main</a>
                        <a href="#" className="item">Articles</a>
                        <div className="ui right floated item">Logout</div>
                    </div>
                </div>
                <div style={{marginBottom:"80px"}}></div>
        </div>
        )
    }
}

export default NavBar