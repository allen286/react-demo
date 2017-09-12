import React from 'react'
import ReactDom from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
import HelloRedux from './helloRedux.jsx'
import Tab from './Tab.jsx'

ReactDom.render(
  <Router>
    <div>
      <Route exact path="/" component={Tab} />
      <Route path="/tab" component={Tab} />
      {/* <Route path="/redux" component={HelloRedux} /> */}
    </div>
  </Router>,
  document.getElementById('root')
)
