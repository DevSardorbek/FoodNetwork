import React, { Component } from 'react';
import { data } from '../../static/Static';
import "../../sass/__features.scss";

export default class Features extends Component {
  render() {
    return (
      <div id='features' className='features__wrapper data-aos="animation_name"'>
        <div className="container">
          <div className="features__title">
            <h3>Features</h3>
            <h2>Food with a New Passion</h2>
          </div>
          <div className="features__cards">
            {
              data?.map((e) => {
                return (
                  <div key={e.id} className="features__card">
                    <span>
                        <img src={e.img} alt="" />
                    </span>
                    <h3>{e.title}</h3>
                    <p>{e.desc}</p>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
