import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash'

import PodcastListElement from './PodcastListElement'

class MainView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      podcasts: [],
    };
  }


  componentDidMount() {
		this.llamadaAxios();
  }

  llamadaAxios(){
    let thisElement = this;
    const URLPODCAST = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';
		axios.get(URLPODCAST)
      .then(function (respPodcast) {
        let results = respPodcast.data;
        let resultsKeys = Object.keys(results);

        //Check if entries exists
        if(_.hasIn(resultsKeys, 'entries')){
          thisElement.setState({podcasts:results.feed.entry});
        }else{
          thisElement.setState({podcasts:[]});
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="MainView">
        <header className="MainView-header">
          <p>
              Vista principal
          </p>
        </header>
          {this.state.podcasts.map((elem, index) => {
              return	<PodcastListElement detail={elem}/>
            }
          )}
      </div>
    );
  }
  }
  
  export default MainView;