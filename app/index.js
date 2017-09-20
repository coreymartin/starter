import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom'
import {PasswordReset} from './components/PasswordReset'

const app = document.getElementById('app')

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route path="/" component={PasswordReset}/>
    </Switch>
  </BrowserRouter>
), app)