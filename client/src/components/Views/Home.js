import React from 'react'
import {connect} from "react-redux"
import {Link} from 'react-router-dom'

import {allArticle} from "../../actions"
import Loading from "../Loading"


class Home extends React.Component{
    
    state = {page:null}

    componentDidMount(){
        this.props.allArticle()
    }

    renderArticles = ()=>{
        return this.props.articles.map(((article,i)=>{
            return(
                <div className="ui raised segment" key={i} style={{overflow:"hidden"}}>
                    <img src={article.urlToImg} alt={article.title} className="ui large left floated image"/>
                    <h1 className="title">{article.title}</h1>
                    <Link to={`/author/${article.author._id}`} className="author"> <em>By : </em>{article.author.name} @ {new Date(article.publishedAt).toDateString()}</Link>
                    <br />
                    <p className="description">{article.description}</p>
                    <Link to={`/article/${article._id}`} className="readmore ui blue label">read more</Link>
                </div>
            )
        }))
    }


    nextPage = async()=>{
       const pageno = this.state.page ? this.state.page + 1 : 2
      await this.setState({page:pageno});
      this.props.allArticle(this.state.page)
    }

    render(){
        
        return(
            <div className="ui container">
                { this.props.articles.length >= 1 ? this.renderArticles() : <Loading />  }
                <div className="ui green compact  raised segment" style={{margin:"auto"}}>
                    <div style={{cursor:'pointer'}} onClick={this.nextPage}>
                        Load More
                    </div>
                    </div>
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