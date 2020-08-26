import React from 'react'
import { connect } from 'react-redux'

import {singleAuthor } from "../../actions"
import Loading from "../Loading"
import {Link} from "react-router-dom"

class AuthorArticle extends React.Component{

    componentDidMount(){
        this.props.singleAuthor(this.props.match.params.id);
    }

    renderContent = () => {
        return(
            <div>
                <h1 className="title"> All articles of {this.props.author.name} </h1>

                {this.props.author.articles.map((article, i)=>{
                    return(
                        <div className="ui segment" key={i} style={{overflow:"hidden"}}>
                            <img src={article.urlToImg} alt={article.title} className="ui small left floated image"/>
                            <h1 className="title">{article.title}</h1>
                            <br />
                            <p className="description">{article.description}</p>
                            <Link to={`/article/${article._id}`} className="readmore ui blue ribbon label">read more</Link>
                        </div>
                    )})}
            </div>
                        )
    }

    render(){
        
        return(
            <div className="ui container">
                {this.props.author ? this.renderContent(): <Loading /> }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps)=>{
    return {
        author:state.authors[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {
singleAuthor
})(AuthorArticle)