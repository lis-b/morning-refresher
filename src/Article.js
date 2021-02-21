import React, { Component } from 'react'

export class Article extends Component {
    render() {
        const { author, content, description, publishedAt, source, title, url, urlToImage} = this.props.article;
        const date = new Date(publishedAt);

        return (
            <div className="module article">
                <h1> {title} </h1>
                 <h2> 
                 {/* {author != null ? "Author: " + author : "No Author"} <br />  */}
                    Source: <a href={url}>  {source.name} </a>
                     </h2>
                <h3> {description} </h3>
                <p> Published on: {date.toLocaleDateString()} </p>
                <p> <img src= {urlToImage} /> </p>
                <p> {content} </p>
                
            </div>
        )
    }
}

export default Article;
