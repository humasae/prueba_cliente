import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainView from './MainView'
import PodcastRouter from './PodcastRouter'

const MainViewComponent = () => {
  return(
    //probando una manera alterntiva
    <MainView />
  );
}

const MainRouter = () => (
  <main>
    <Switch>
      <Route exact path='/' render={MainViewComponent}/>
      <Route path='/podcast' component={PodcastRouter}/>      
    </Switch>
  </main>
)

export default MainRouter