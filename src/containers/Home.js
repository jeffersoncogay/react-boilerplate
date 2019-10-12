import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { userSelector } from '../redux/selectors'

import {
  GetUserList
} from '../redux/actions'

class Home extends PureComponent {

  componentWillMount() {
    this.props.dispatch(GetUserList())
  }

  render() {
    console.log('HOME ===> ', this.props)
    return (
      <div>You Are Home!</div>
    )
  }
}

export default connect(userSelector)(Home)
