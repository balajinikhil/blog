import React from 'react'
import {connect} from "react-redux"
import {Link} from 'react-router-dom'

import {allArticle} from "../../actions"


class Home extends React.Component{
    componentDidMount(){
        this.props.allArticle()
    }

    renderArticles = ()=>{
        return this.props.articles.map(((article,i)=>{
            return(
                <div className="ui raised segment" key={i} style={{overflow:"hidden"}}>
                    <img src={article.urlToImg} alt={article.title} className="ui large left floated image"/>
                    <h1 className="title">{article.title}</h1>
                    <div className="author"> <em>By : </em>{article.author.name} @ {new Date(article.publishedAt).toDateString()}</div>
                    <br />
                    <p className="description">{article.description}</p>
                    <Link to={`/article/${article.slug}`} className="readmore">read more</Link>
                </div>
            )
        }))
    }

    loading = ()=>{
        return(
            <div className="ui">
            <div className="ui active dimmer">
              <div className="ui indeterminate text loader">Preparing Articles</div>
            </div>
            <p></p>
          </div>
        )
    }

    render(){
        
        return(
            <div className="ui container">
                { this.props.articles.length >= 1 ? this.renderArticles() : this.loading()  }
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