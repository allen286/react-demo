import React from 'react'

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: this.props.checked || false,
      spread: this.props.spread || false
    }
    this.handleChange.bind(this)
    this.handleClick.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      checked: nextProps.checked
    })
  }

  handleChange = (e) => {
    this.props.onChange && this.props.onChange(e)
    this.setState({
      checked: e.target.checked
    })
  }

  handleClick = (e) => {
    this.setState({
      spread: !this.state.spread
    })
  }

  render() {
    const { text, children, offset } = this.props
    const { spread, checked } = this.state
    const cloneChildren = children && children.map((o, key) => {
      return React.cloneElement(o, { key, checked })
    });
    return (
      <div style={{ 'marginLeft': `${offset}rem` }}>
        <input type="checkbox" checked={checked} onChange={this.handleChange} />
        <label onClick={this.handleClick}>{text}</label>
        {
          spread ? cloneChildren : ''
        }
      </div>
    )
  }
}

export default Item
