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
    //check localstorage to get podcasts
    let podcastsStorage = localStorage.getItem('podcasts');
    if(podcastsStorage == null){
      //get podcast from itunes
      this.axiosCalling();
      localStorage.setItem('podcasts', this.state.podcasts);
    }else{
      this.setState({podcasts:JSON.parse(podcastsStorage)});
    }
  }

  axiosCalling(){
    let thisElement = this;
    const URLPODCAST = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';
		axios.get(URLPODCAST)
      .then(function (respPodcast) {
        let results = respPodcast.data;
        let resultsKeys = Object.keys(results);
        console.log('SI QUE SE LLAMA A axios')

        //Check if entries exists
        if(_.hasIn(resultsKeys, 'entries')){
          thisElement.setState({podcasts:results.feed.entry});
          localStorage.setItem('podcasts', JSON.stringify(thisElement.state.podcasts));
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
          {this.state.podcasts.map((elem, index) => {
              return	<PodcastListElement key={elem["id"]["attributes"]["im:id"]} detail={elem}/>
            }
          )}
      </div>
    );
  }
  }
  
  export default MainView;