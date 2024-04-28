import React, { Component } from 'react'
import "../../sass/__contact.scss"

export default class Contact extends Component {
  render() {
    return (
      <div id='contact' className='contact__wrapper'> 
            <div className="container">
                <div className="contact__title">
                    <h3>Contact </h3>
                    <h2>Food Stalls with Persons but also specialized equipment, Skills to manage.</h2>
                </div>
                <div className="contact_search">
                    <input type="text" placeholder='Enter your message' />
                    <button>Send</button>
                </div>
            </div>
      </div>
    )
  }
}
