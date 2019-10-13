import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { userSelector } from '../redux/selectors'
import {
  Avatar,
  FontIcon,
  List,
  ListItem,
  Button,
} from 'react-md';

import {
  GetUserList
} from '../redux/actions'

class Home extends PureComponent {

  componentDidMount() {
    this.props.dispatch(GetUserList())
  }

  render() {
    const { list } = this.props.user
    console.log('zzz', list)
    return (
      <div>
        <div className='md-cell md-grid md-cell--12'>
        <h2 className='md-cell md-cell--12'>Welcome People!</h2>
        {
          list && list.length
          && list.map((e, i) => (
            <div key={i.toString()} className='md-cell md-cell--4'>
              <List className="md-paper md-paper--1">
                <ListItem primaryText={`${e.name}`} />
                <ListItem
                  leftAvatar={<Avatar icon={<FontIcon>work</FontIcon>} />}
                  primaryText="Company"
                  secondaryText={e.company.name}
                />
                <ListItem
                  leftAvatar={<Avatar icon={<FontIcon>public</FontIcon>} />}
                  primaryText="Website"
                  secondaryText={e.website}
                />
              </List>
            </div>
          ))
        }
        </div>
      </div>
    )
  }
}

export default connect(userSelector)(Home)
