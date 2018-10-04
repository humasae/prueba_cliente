import React, { Component } from 'react';
import './App.css';

class PodcastListElement extends Component {
  formatTitle(title) {
    let result = title.split(" - ")[0].toUpperCase();
    return result;
  }
    render() {
      let podcastId = this.props.detail["id"]["attributes"]["im:id"];
      return (
        <div className="PodcastDetail-main">
            
              <a href={"/podcast/" + podcastId}>
                <img src={this.props.detail["im:image"][2].label} alt="golf"/>
                <p className="title">{this.formatTitle(this.props.detail["title"].label)}</p>
                <p className="author">Author: {this.props.detail["im:artist"].label}</p>
              </a>
        </div>
      );
    }
  }
  
  export default PodcastListElement;