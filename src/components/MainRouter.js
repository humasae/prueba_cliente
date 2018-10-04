import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainView from './MainView'
import PodcastRouter from './PodcastRouter'


const MainRouter = () => (
  <main>
    <Switch>
      <Route exact path='/' component={MainView}/>
      <Route path='/podcast' component={PodcastRouter}/>      
    </Switch>
  </main>
)

export default MainRouter