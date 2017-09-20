import React, {Component} from 'react'

class Container extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <h1>React router example</h1>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

export {Container}