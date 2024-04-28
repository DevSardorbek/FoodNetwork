import React, { Component } from 'react'
import logo from "../../assets/logo.png"
import "../..//sass/__navbar.scss"

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar__section'>
        <div className="container">
          <div className="navbar__wrapper">
            <div className="navbar__logo">
                <img src={logo} alt="" />
            </div>
            <div className='navbar__links'>
              <div className="navbar_link">
                <a href="#home">Home</a>
                <a href="#about">About us</a>
                <a href="#menu">Menu</a>
                <a href="#features">Features</a>
                <a href="#contact">Contact us</a>
              </div>
              <button>Booking Now</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}






















// import React, { Component } from 'react'

// export default class Navbar extends Component {
// export default class Navbar extends Component {
//     constructor(){
//         super()
//         this.state = {
//             count:5,
//             bool: false , 
//             data: []
//         }
//     }
//   render() {
//     return (
//       <div>
//         <h2>{this.props.text}</h2>
//         <h3>{this.props.age}</h3>
//         <h3>{this.state.count}</h3>
//         <button onClick={()=>this.setState({count: this.state.count + 1})}>inc</button>
//         <button disabled={this.state.count===0} onClick={()=>this.setState({count:this.state.count - 1})}>dec</button>
//         <button onClick={()=> this.setState({bool: !this.state.bool})}>Turn {this.state.bool ? "off" : "on"}</button>
//       </div>
//     )
//   }
// }
