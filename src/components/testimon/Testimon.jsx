import React, { Component } from 'react'
import "../../sass/__testimon.scss"
import testimonImg from "../../assets/testimonImg.png"
import star from "../../assets/star5.png"

export default class Testimon extends Component {
  render() {
    return (
      <div className='testimon__wrapper'>
            <div className="container">
                <div className="testimon__title">
                    <h3>Testimonial</h3>
                    <h2>Making Food great again and again</h2>
                    <p>
                        You need not only Just Food Stalls with Persons but also specialized equipment,
                         Skills to manage Customers, Effective Product catlogues etc to make your.
                    </p>
                </div>
                <div className="testimon__section">
                        <img src={testimonImg} alt="" />
                        <p>
                            You need not only Just Food Stalls with Persons but also specialized equipment, 
                            Skills to manage Customers, Effective Product catlogues etc very successful to make your.
                        </p>
                        <img src={star} alt="" />
                        <h3>Augusta W. Reynoso</h3>
                        <h4>UI&UX DeSIGNER</h4>
                </div>
            </div>
      </div>
    )
  }
}
