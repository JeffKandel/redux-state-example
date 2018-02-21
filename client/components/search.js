import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

export const UserHome = (props) => {
  return (
    <div>
      <h3>Welcome, Whomever</h3>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Zip:
          <input type="text" name="zip" />
        </label>
        <label>
          Radius:
          <input type="text" name="radius" />
        </label>
        <label>
          Keywords:
          <form>
            <label>
              Pets:
              <input type="checkbox" name="pets" />
            </label>
            <label>
              Smoker:
              <input type="checkbox" name="smoker" />
            </label>
          </form>
        </label>
      </form>
    </div>
  )
}

const mapState = (state) => ({})

export default connect(mapState)(UserHome)
