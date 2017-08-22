import React from 'react'
import { render } from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';

//action部分定义两种事件：“文字来回切换”、“按钮点击”
//我们这里并没有使用const来声明常量，实际生产中不推荐像下面这样做
function changeText() {
  return {
    type: 'CHANGE_TEXT'
  }
}

function buttonClick() {
  return {
    type: 'BUTTON_CLICK'
  }
}

//reducer
//最初的状态是"Hello"
const initialState = {
  text: 'Hello'
}

function myApp(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return {
        text: state.text == 'Hello' ? 'Allen' : 'Hello'
      }
    case 'BUTTON_CLICK':
      return {
        text: 'You just click button'
      }
    default:
      return {
        text: 'Hello'
      }
  }
}

let store = createStore(myApp)


// 三个组件：文字组件Hello，按钮Change，以及它们的父组件App
// Hello
class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.actions.changeText();
  }

  render() {
    return (
      <h1 onClick={this.handleClick}> {this.props.text} </h1>
    );
  }
}

//Change
class Change extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.actions.buttonClick();
  }

  render() {
    return (
      <button onClick={this.handleClick} >change</button>
    );
  }
}

//App
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //actions和text这两个props在第5步中会解释
    const { actions, text } = this.props;
    return (
      <div>
        <Hello actions={actions} text={text} />
        <Change actions={actions} />
      </div>
    );
  }
}

render(
  <Hello name="World" />,
  document.getElementById('AppRoot')
)
