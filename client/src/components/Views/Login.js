import React from "react"
import {connect} from "react-redux"

import {login} from "../../actions"


class Login extends React.Component{

    state = { email:"", password:""}

    onFormSubmit = (e)=>{
        e.preventDefault();
        this.props.login(this.state);
    }

    render(){
        console.log(this.props);
        return(
            <form className="ui form raised segment" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label>Email</label>
                    <input type="email" name="email" onChange={e=>this.setState({email:e.target.value})} value={this.state.email} placeholder="Email" />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="password" onChange={e=>this.setState({password:e.target.value})} value={this.state.password} name="password" placeholder="Password" />
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        )
    }
}

const mapStateToProps = state =>{
    return {
        auth:state.auth
    }
}

export default connect(mapStateToProps, {
    login
})(Login);