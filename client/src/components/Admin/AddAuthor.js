import React from "react";
import api from "../../api";

class AddAuthor extends React.Component{

    state = {email:"", name:"", password:"", passwordConfirm:"", success:"none", error:"none"}

    onSubmit = async (e) => {
        e.preventDefault()
        
        const response = await api.post("/author/new", this.state );

        console.log(response.data);

        if(response.data.status === "created") this.setState({success:"block"});
        else this.setState({error:"block"})

    }



    render(){
        return(
            <div className="ui container">
                <form className="ui form success error" onSubmit={this.onSubmit}>
                    
                    <div className="field">
                        <label>E-mail</label>
                        <input type="email" value={this.state.email} onChange={e=>this.setState({email:e.target.value})} placeholder="email@email.com" />
                    </div>

                    <div className="field">
                        <label>Name</label>
                        <input type="text" value={this.state.name} onChange={e=>this.setState({name:e.target.value})} placeholder="Name" />
                    </div>

                    <div className="field" >
                        <label>Password</label>
                        <input type="password" value={this.state.password} onChange={e=>this.setState({password:e.target.value})}  />
                    </div>
                    
                    <div className="field">
                        <label>Password Confirm</label>
                        <input type="password" value={this.state.passwordConfirm} onChange={e=>this.setState({passwordConfirm:e.target.value})} />
                    </div>

                    <div className="ui success message" style={{display:this.state.success}}>
                        <div className="header">Form Completed</div>
                        <p>Author Created</p>
                    </div>

                    <div class="ui error message" style={{display:this.state.error}}>
                        <div class="header">Error</div>
                        <p>Try Again Later</p>
                    </div>
                    
                    <button class="ui submit primary button">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddAuthor