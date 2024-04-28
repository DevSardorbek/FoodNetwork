import React, { Component } from 'react'
import "../../sass/__about.scss"
import aboutImg from "../../assets/aboutImg.png"

export default class About extends Component {
  render() {
    return (
      <div id='about' className='about__wrapper'>
            <div className="container">
                <div className="about__section">
                    <div className="about__section-img">
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className="about__section-info">
                        <h3>About us</h3>
                        <h2>Food Stalls with Persons but  to  Product marketing planecatlogues etc to. </h2>
                        <p>
                            There are many things are needed to start the Fast Food Business.
                             You need not only Just Food Stalls with Persons but also equipment  make your marketing plane Effective
                        </p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}
