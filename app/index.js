import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom'
import {Home} from './components/Home'

const app = document.getElementById('app')

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home}/>
    </Switch>
  </BrowserRouter>
), app)
