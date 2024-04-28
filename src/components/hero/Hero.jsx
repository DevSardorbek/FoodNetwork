import React, { Component } from 'react'
import heroImg from "../../assets/heroImg.png"
import "../../sass/__hero.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


export default class Hero extends Component {
  render() {
    return (
      <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
      <div id='home' className='hero__wrapper'>
            <div className="container">
                <div className="hero__section">
                    <div className="hero__section-info">
                        <h1>Making time a good time by making food the good food.</h1>
                        <p>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment,</p>
                        <div className="hero_btn">
                            <button>Order Now</button>
                            <button>Food Details</button>
                        </div>
                    </div>
                    <div className="hero__section-img">
                        <img src={heroImg} alt="" />
                    </div>
                </div>
            </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>  
         <div className='hero__wrapper hero_bg'>
            <div className="container">
                <div className="hero__section">
                    <div className="hero__section-info">
                        <h1>Making time a good time by making food the good food.</h1>
                        <p>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment,</p>
                        <div className="hero_btn">
                            <button>Order Now</button>
                            <button>Food Details</button>
                        </div>
                    </div>
                    <div className="hero__section-img">
                        <img src={heroImg} alt="" />
                    </div>
                </div>
            </div>
      </div></SwiperSlide>
      <SwiperSlide>   <div className='hero__wrapper'>
            <div className="container">
                <div className="hero__section">
                    <div className="hero__section-info">
                        <h1>Making time a good time by making food the good food.</h1>
                        <p>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment,</p>
                        <div className="hero_btn">
                            <button>Order Now</button>
                            <button>Food Details</button>
                        </div>
                    </div>
                    <div className="hero__section-img">
                        <img src={heroImg} alt="" />
                    </div>
                </div>
            </div>
      </div></SwiperSlide>
    </Swiper>
      </>
    )
  }
}
