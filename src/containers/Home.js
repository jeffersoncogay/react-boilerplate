import React, { PureComponent } from 'react'

class Home extends PureComponent {

  componentDidMount() {
    this.getUserList()
  }

  getUserList = () => {
    
  }

  render() {
    console.log('HOME ===> ', this.props)
    return (
      <div>You Are Home!</div>
    )
  }
}

export default Home
