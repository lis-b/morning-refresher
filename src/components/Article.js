import React from 'react'
import "./Article.scss";

export class Article extends React.Component {
    render() {
        const { content, description, publishedAt, source, title, url, urlToImage} = this.props.article;
        const date = new Date(publishedAt);

        return (

            <div className="module-article">
                <h1> {title} </h1>

                <p className="source"> Source: <a href={url}>  {source.name} </a> </p>

                <p className="pub"> Published on: {date.toLocaleDateString()} </p>

                <p className="desc"> {description} </p>

                <img src={urlToImage} alt="article-appropriate content" />

                <p className="content"> {content} </p>

            </div>

        )
    }
}

export default Article;
