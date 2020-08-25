import React from 'react'
import {connect} from "react-redux"

import {Link} from 'react-router-dom'

import {allArticle} from "../../actions"

class Home extends React.Component{
    componentDidMount(){
        this.props.allArticle()
    }

    renderArticles = ()=>{
        return this.props.articles.map((article=>{
            return(
                <div className="ui raised segment" key={article._id} style={{overflow:"hidden"}}>
                    <img src={article.urlToImg} alt={article.title} className="ui large left floated image"/>
                    <h1 className="title">{article.title}</h1>
                    <div className="author"> <em>By :</em>{article.author.name} @ {new Date(article.publishedAt).toDateString()}</div>
                    <br />
                    <p className="description">{article.description}</p>
                    <Link to={`/article/${article._id}`} className="readmore">read more</Link>
                </div>
            )
        }))
    }

    render(){
        
        return(
            <div className="ui container">
                {this.renderArticles()}
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        articles:Object.values(state.articles)
    }
}

export default connect(mapStateToProps, {
    allArticle
})(Home)