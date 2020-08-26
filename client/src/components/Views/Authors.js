import React from 'react'
import {connect} from "react-redux"
import {Link} from "react-router-dom"

import {allAuthors} from "../../actions/index"
import Loading from "../Loading"

class Authors extends React.Component{

    componentDidMount(){
        this.props.allAuthors();
    }

    renderContent = ()=>{
        return this.props.authors.map((author,i)=>{
            return(
                <div className="ui raised segment" key={i}>
                    <h4>Name: {author.name}</h4>
                    <h4>Email: {author.email}</h4>
                    <h3 className="ui red ribbon label">Latest Article</h3>
                    {author.articles.map((article, i)=>{

                        if(i===0){
                            return(
                                <div className="ui segment" key={i} style={{overflow:"hidden"}}>
                                    <img src={article.urlToImg} alt={article.title} className="ui small left floated image"/>
                                    <h1 className="title">{article.title}</h1>
                                    <br />
                                    <p className="description">{article.description}</p>
                                    <Link to={`/article/${article._id}`} className="readmore ui blue ribbon label">read more</Link>
                                </div>
                            )
                         }

                    })}
                    <Link to={`/author/${author._id}`} className="ui green label" style={{textAlign:"center"}} >View all articles</Link>
                </div>
            )
        })
    }


    render(){

        return(
            <div className="ui container">
                {this.props.authors.length >= 1 ? this.renderContent() : <Loading msg="Preparing Authors" /> }
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
})(Authors)