import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date().toDateString(),
    }
  }

  render() {
    return (
      <div>
        <h1>React router example</h1>
        <h2>{this.state.date}</h2>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Container
