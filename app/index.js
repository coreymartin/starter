import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import {Container} from './components/Container'
import {Home} from './components/Home'

const app = document.getElementById('app')

ReactDOM.render((
  <BrowserRouter>
    <Container>
      <Route path="/home" component={Home}/>
    </Container>
  </BrowserRouter>
), app)