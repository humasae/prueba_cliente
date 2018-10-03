import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainView from './MainView'
import Podcast from './Podcast'


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={MainView}/>
      <Route path='/podcast' component={Podcast}/>      
    </Switch>
  </main>
)

export default Main