import React, { Component } from 'react';
import './App.css';

class PodcastListElement extends Component {
  
  render() {
    let podcastId = this.props.detail.id;
    let image = this.props.detail.image;
    let title = this.props.detail.title;
    let author = this.props.detail.author;
    return (
      <li className="flex-item ">
        <div className="recuadro">
            <a href={"/podcast/" + podcastId}>
              <div className="recuadro-icono">
                <img src={image} alt={title}/>
              </div>
              <div className="recuadro-info">
                <p className="title">{title}</p>
                <p className="author">Author: {author}</p>
              </div>
            </a>
        </div>
      </li>
	);
  }
}

export default PodcastListElement;