import React, { Component } from 'react';
import "../../sass/__menu.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { card } from '../../static/Static';

export default class Menu extends Component {
  componentDidMount() {
    AOS.init({
      duration: 600,
      offset: 200,
      easing: 'ease-in-sine'
    });
  }

  render() {
    return (
      <div id='menu' className='menu__wrapper' data-aos="fade-zoom-in">
        <div className="container">
          <div className="menu__title">
            <h3>Menu</h3>
            <h2>Food Full of treaty Love</h2>
            <p>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, </p>
          </div>
          <div className="menu__cards">
            {
              card?.map((e) => {
                return (
                  <div key={e.id} className="menu_card" data-aos="fade-up">
                    <img src={e.img} alt="" />
                    <div className="card_info">
                      <div className='card_title'>
                        <h3>{e.title}</h3>
                        <h3>{e.price}</h3>
                      </div>
                      <p>There are many things are needed to start the Fast Food Business.</p>
                      <div className='card_rating'>
                        <button>+</button>
                        <img src={e.star} alt="" />
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className='btn'>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    )
  }
}
