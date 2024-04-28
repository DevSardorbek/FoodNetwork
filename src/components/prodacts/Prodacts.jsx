import axios from '../../api/Api'
import React, { Component } from 'react'

export class Prodacts extends Component {
    constructor(){
        super()
        this.state ={
            data : null,
        }
    }
    componentDidMount(){

        axios
            .get("/products")
            .then(res => this.setState({data: res.data.products}))
            .catch(err=>console.log(err))
    }
  render() {
    return (
      <div>
        <h2>Prodacts</h2>
        {
            this.state.data?.map((el)=> <img width={250} height={250} key={el.id} src={el.images[0]} alt={el.title} />
        )
        }
      </div>
    )
  }
}

export default Prodacts