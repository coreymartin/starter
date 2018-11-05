import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'
import Container from './components/Container'
import Home from './components/Home'

const app = document.getElementById('app')

ReactDOM.render((
  <BrowserRouter>
    <Container>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route exact path="/" component={() => <Redirect to="/home"/>}/>
      </Switch>
    </Container>
  </BrowserRouter>
), app)
