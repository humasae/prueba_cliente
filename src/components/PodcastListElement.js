import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class PodcastListElement extends Component {
    render() {
      console.log(this.props.detail)
      return (
        <div className="PodcastDetail-main">
            
              <a href="/podcast/1">
                <img src={this.props.detail["im:image"][2].label} alt="golf"/>
                <p>{this.props.detail["title"].label}</p>
                <p>Author: {this.props.detail["im:artist"].label}</p>
              </a>
        </div>
      );
    }
  }
  
  export default PodcastListElement;