import React, { Component } from 'react'

export class Img extends Component {
    constructor (){
        super()
        this.tab=[1,2,3,4,56,7,9]
    }
  render() {
    return (
      <div>{this.tab[parseInt(Math.random()*7)]}</div>
    )
  }
}

export default Img