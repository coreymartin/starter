import React, {Component} from 'react'
import s from './styles.scss'

class PasswordReset extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className={s.wrapper}>
        <h1>React, SASS loader, React Router, and dynamic HTML index generation for both dev and prod webpack</h1>
      </div>
    )
  }
}

export {PasswordReset}