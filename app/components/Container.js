import React, { Component } from 'react'

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date().toDateString(),
    }
  }

  render() {
    return (
      <div>Simple react example {this.state.date}</div>
    )
  }
}

export default Container
