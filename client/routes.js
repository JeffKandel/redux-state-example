import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Switch, Router} from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import {Search} from './components'

class Routes extends Component {
  render () {
    const {isLoggedIn} = this.props

    return (
      <Router history={history}>
          <Switch>
            <Route component={Search} />
          </Switch>
      </Router>
    )
  }
}

const mapState = (state) => ({})

const mapDispatch = (dispatch) => {}

export default connect(mapState)(Routes)

