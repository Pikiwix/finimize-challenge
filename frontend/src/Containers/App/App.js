import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import Calculator from '../Calculator/Calculator'
import '../Calculator/calculator.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hasError: false
    }
  }
  componentDidCatch (error, info) {
    this.setState({ hasError: true })
    if (process.env.NODE_ENV !== 'production') {
      console.log(error, info)
    }
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }
    return (
      <Switch>
        <Route path='/' component={Calculator} />
      </Switch>
    )
  }
}

export default connect(null, null)(App)
