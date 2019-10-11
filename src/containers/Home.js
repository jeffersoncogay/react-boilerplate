import React, { PureComponent } from 'react'

class Home extends PureComponent {
  render() {
    console.log('HOME ===> ', this.props)
    return (
      <div>You Are Home!</div>
    )
  }
}

export default Home
