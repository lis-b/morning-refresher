import React, { Component } from 'react'
import "./Article.css";

export class Article extends Component {
    render() {
        const { content, description, publishedAt, source, title, url, urlToImage} = this.props.article;
        const date = new Date(publishedAt);

        return (
           
            <div className="module-article">
                <h1> {title} </h1>

                <p className="source"> Source: <a href={url}>  {source.name} </a> </p>

                <p className="pub"> Published on: {date.toLocaleDateString()} </p>

                <p className="desc"> {description} </p>
                
                <img src= {urlToImage} /> 

                <p className="content"> {content} </p>
                
            </div>
            
        )
    }
}

export default Article;
