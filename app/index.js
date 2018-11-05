import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Container from './components/Container'
import Home from './components/Home'

const app = document.getElementById('app')

ReactDOM.render((
  <BrowserRouter>
    <Container>
      <Route path="/home" component={Home}/>
      <Route exact path="/" component={() => <Redirect to="/home"/>}/>
    </Container>
  </BrowserRouter>
), app)
