import React from 'react'
import {connect} from "react-redux"

import {
    singleArticle
} from "../../actions"

class Article extends React.Component{

    componentDidMount(){
        this.props.singleArticle(this.props.match.params.id)
    }


    renderContent = ()=>{
       const article = this.props.article
       const arr = this.props.article.content.split(".")
        return(
            <div className="ui segment">
                <h1 className="title"> {article.title} </h1>
                <img src={article.urlToImg} alt={article.title} className="ui centered image"/>
                <br />
                {arr.map((el,i)=>{
                    return(
                    <p className="content" key={i}>{el}</p>
                    )
                })}
                <br />
                <br />
                <div className="author"> <em>By :</em>{article.author.name} @ {new Date(article.publishedAt).toDateString()}</div>
            </div>
        )
    }

    loading = ()=>{
        return(
            <div className="ui">
            <div className="ui active dimmer">
              <div className="ui indeterminate text loader">Preparing Article</div>
            </div>
            <p></p>
          </div>
        )
    }

    render(){
        return(
            <div className="ui container">
                {this.props.article ? this.renderContent(): this.loading()}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    
    return {
        article:state.articles[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {
    singleArticle
})(Article)