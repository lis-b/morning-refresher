import React from 'react'
import "./Article.scss";
import { ReactComponent as LinkSVG } from '../svg/Feather/external-link.svg';

export class Article extends React.Component {
    render() {
        const { description, publishedAt, title, url, urlToImage } = this.props.article;
        const date = new Date(publishedAt);

        return (

            <div className="module-article">
                <a href={url}><h1> <LinkSVG /> {title} </h1></a>

                <p className="pub">{date.toLocaleDateString()} </p>

                {urlToImage !== null ?
                <center><img src={urlToImage} alt={title} /></center> : ''
                }

                <p className="desc"> {description} </p>
            </div>

        )
    }
}

export default Article;
