import React from 'react'
import { render } from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';

/* 
 Action
 用于描述事件以及需要改变的相关数据，必须type字段，可选error，payload或meta等字段
 */
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

/* 
 Reducer
 负责相应action并修改数据
 */
const initialState = {
  text: 'Hello'
}

function myApp(previousState = initialState, action) {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return {
        text: previousState.text == 'Hello' ? 'Allen' : 'Hello'
      }
    case 'BUTTON_CLICK':
      return {
        text: 'You just clicked the button'
      }
    default:
      return {
        text: 'Hello'
      }
  }
}
/* 
 Store
 负责保存数据
 */
let store = createStore(myApp)


// 三个组件：文字组件Hello，按钮Change，以及它们的父组件App
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

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //actions和text这两个props，是通过connect给App的
    const { actions, text } = this.props;
    return (
      <div>
        <Hello actions={actions} text={text} />
        <Change actions={actions} />
      </div>
    );
  }
}

// mapStateToProps的作用是声明，当state树变化的时候，哪些属性是我们关心的
// 由于我们这个应用太小，只有一个属性，所以只有text这个字段。
function mapStateToProps(state) {
  return { text: state.text }
}

// mapDispatchToProps的作用是把store中的dispatch方法注入给组件
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ changeText, buttonClick }, dispatch)
  }
}

// 这里实际上给了App两个props：text和actions
App = connect(mapStateToProps, mapDispatchToProps)(App)

// Provider是react-redux直接提供的
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
