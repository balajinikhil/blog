import React from "react"
import {connect} from "react-redux"

import {allAuthors} from "../../actions"
import api from "../../api/"

class AddArticle extends React.Component{

    state = { title:"",  description:"", content:"", urlToImg:"", success:"none", fail:"none" }

    componentDidMount(){
        this.props.allAuthors()
    }

    selectAuthor = () =>{
        return this.props.authors.map((author,i)=>{
            return (<option value={author._id} key={i} >{author.name}</option>)
        })
    }

    onSubmit = async(e) => {
        
        e.preventDefault()
        const author = e.target.elements.author.value;
        
        const response = await api.post("/article/new", {...this.state, author })

        if(response.data.status === "created"){ 
            this.setState({success:"block"})
        }else{
             this.setState({fail:"block"}) 
            }
    }

    render(){
        return(
            <div className="ui container">
                <div className="ui segment">
                    <h3 className="title">Add Article</h3>
                    <form className="ui equal width form" autoComplete="off" onSubmit={this.onSubmit}>
                        <div className="fields">
                            <div className="field">
                                <label>Title</label>
                                <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={e=>this.setState({title:e.target.value})} />
                            </div>
                            <div className="field">
                                <label>Author</label>
                                <select name="author">
                                    {this.selectAuthor()}
                                </select>
                            </div>
                        </div>
                        <div className="fields">
                            <div className="field">
                                <label>Description</label>
                                <textarea style={{height:"150px"}} name="description" value={this.state.description} onChange={e=>this.setState({description:e.target.value})} >
                                </textarea>
                            </div>
                        </div>
                        <div className="fields">
                            <div className="field">
                                <label>Content</label>
                                <textarea style={{height:"750px"}} name="content" value={this.state.content} onChange={e=>this.setState({content:e.target.value})} ></textarea>
                            </div>

                        </div>
                        <div className="fields">
                                <div className="field">
                                    <label>Image URL</label>
                                    <input type="text" name="urlToImg" placeholder="Image URL" value={this.state.urlToImg} onChange={e=>this.setState({urlToImg:e.target.value})} />
                                </div>
                        </div>

                        <div className="ui success message" style={{display:this.state.success}} >
                            <i className="close icon"></i>
                            <div className="header">
                                Article Created
                            </div>
                        </div>

                        <div className="ui negative message" style={{display:this.state.fail}}>
                            <i className="close icon"></i>
                            <div className="header">
                                Error try again later
                            </div>
                        </div>

                        <button className="ui primary button">Add</button>
                    </form>
                    
                    
                    
                    

                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        authors:Object.values(state.authors)
    }
}

export default connect(mapStateToProps, {
    allAuthors
})(AddArticle)