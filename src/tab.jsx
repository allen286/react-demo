import React from 'react'
import Item from './item.jsx'

class Tab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
    }
  }

  render() {
    const { actions, text } = this.props
    return (
      <div>
        <Item text="0-0">
          <Item offset="2" text="0-0-1">
            <Item offset="2" text="0-0-1-1"></Item>
            <Item offset="2" text="0-0-1-2"></Item>
          </Item>
          <Item offset="2" text="0-0-2"></Item>
        </Item>
        <Item text="0-1">
          <Item offset="2" text="0-1-1"></Item>
          <Item offset="2" text="0-1-2"></Item>
        </Item>
        <Item text="0-2">
          <Item offset="2" text="0-2-1"></Item>
          <Item offset="2" text="0-2-2"></Item>
        </Item>
      </div>
    )
  }
}

export default Tab
