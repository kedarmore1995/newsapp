import React, { Component } from 'react'
import loading from "./loading.gif";

export class SpinnerGif extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className='my-3' src={loading} alt="loading" style={{width: '5%'}} />
      </div>
    )
  }
}

export default SpinnerGif