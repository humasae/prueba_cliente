import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import PodcastDetail from './PodcastDetail'
import Episode from './Episode'

//Component to redirect to detail (id) or episode (episode/:episodeId)
class PodcastRouter extends Component {
    render() {
      return (
        <Switch>
            <Route exact path='/podcast/:id' component={PodcastDetail}/>
            <Route path='/podcast/:id/episode/:episodeId' component={Episode}/>  
        </Switch>
      );
    }
  }
  
  export default PodcastRouter;