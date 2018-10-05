import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash'

import PodcastListElement from './PodcastListElement'
import TextFilter from './TextFilter'

class MainView extends Component {
  constructor(props) {
    super(props);
    this.filterChange = this.filterChange.bind(this);
    
    this.state = {
      podcasts: [],
      podcastsFiltered: [],
      filter: "",
    };
  }

  filterChange(data){
    this.setState({
      filter: data
    }, function(){
      this.filterPodcasts()
    });
    ;
  }

  filterPodcasts(){
    let filterNew = this.state.filter;
    console.log('el valor de nuevo filtro: ' + filterNew)
    
    if(filterNew !== ""){
      let podcastToFilter = this.state.podcasts;
      let podcastFiltered = podcastToFilter.filter(podcast => (
        podcast.title.toUpperCase().includes(filterNew.toUpperCase()) ||
        podcast.author.toUpperCase().includes(filterNew.toUpperCase())
      ));
      console.log('set a podcastsFiltered');
      this.setState({podcastsFiltered: podcastFiltered});
    }else{
      this.setState({podcastsFiltered: this.state.podcasts});
    }
  }

  componentDidMount() {
    //check localstorage to get podcasts
    let podcastsStorage = localStorage.getItem('podcasts');
    if(podcastsStorage == null){
      //get podcast from itunes
      this.axiosCalling();
    }else{
      this.setState({podcasts:JSON.parse(podcastsStorage)});
      this.setState({podcastsFiltered:JSON.parse(podcastsStorage)});
    }
  }

  //function to simplify the object received
  formatPodcasts(data){
    let simplyPodcasts = [];
    
    data.map((elem, index) => {
      let sp = {
        id: elem["id"]["attributes"]["im:id"],
        image: elem["im:image"][2].label,
        title: elem["title"].label.split(" - ")[0].toUpperCase(),
        author: elem["im:artist"].label
      }
      simplyPodcasts.push(sp);
      return true;
    })
    return simplyPodcasts;
  }

  axiosCalling(){
    let thisElement = this;
    const URLPODCAST = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';
		axios.get(URLPODCAST)
      .then(function (respPodcast) {
        let results = respPodcast.data;
        let resultsKeys = Object.keys(results);

        //Check if the property 'entries' exists
        if(_.hasIn(resultsKeys, 'entries')){
          console.log(results.feed.entry);
          let oPodcasts = thisElement.formatPodcasts(results.feed.entry);
          
          thisElement.setState({podcasts:oPodcasts});
          thisElement.filterPodcasts();
          localStorage.setItem('podcasts', JSON.stringify(thisElement.state.podcasts));
        }else{
          console.log('Error receiving data from iTunes: no entries exist.');
          thisElement.setState({podcasts:[]});
          thisElement.setState({podcastsFiltered:[]});
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <ul className="flex-container">
        <TextFilter onFilterChange={this.filterChange} podcastsCount={this.state.podcastsFiltered.length}/>
        {this.state.podcastsFiltered.map((elem, index) => {
          return	<PodcastListElement key={elem.id} detail={elem}/>
        })}
      </ul>
    );
  }
}

export default MainView;