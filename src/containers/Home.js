import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { userSelector } from '../redux/selectors'

import {
  GetUserList
} from '../redux/actions'

class Home extends PureComponent {

  componentDidMount() {
    this.props.dispatch(GetUserList())
  }

  render() {
    const { list } = this.props.user
    return (
      <div>
        <h2>You Are Home!!!!</h2>
        {
          list && list.length
          && list.map((e, i) => (<h3 key={i.toString()}>{`hahaasdfasdha ${e.name}`}</h3>))
        }
      </div>
    )
  }
}

export default connect(userSelector)(Home)
