import React, { Component } from 'react'
import TextInput from './TextInput'
import './Input.css'

export default class LocationInput extends Component {
  render(props) {
    return (
      <>
      <div className="input-container">
        
        <input onfocus="this.placeholder = ''" className="main-input" placeholder='location...'></input>
      </div>
      </>
    )
  }
}


