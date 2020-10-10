
import React, { Component } from 'react'
import './HeaderStyles.css'



class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {

      }
  }

  render() {
    return (
        <div className="header">
            <ul>
                <li>Home Work</li>
                <li>Time Table</li>
                <li>Notes</li>
                <li>Gallery</li>
            </ul>
        </div>
    )
  }
}


export default Header