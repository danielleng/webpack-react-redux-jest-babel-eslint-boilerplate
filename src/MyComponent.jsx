import React from 'react'
import landingImage from './img/landing-image.jpg'

class MyComponent extends React.Component {
  constructor() {
    super()
  }
  
  render() {
    return (
      <div>
        <img src={landingImage} alt="landing-image" title="" />
        <p>Hello, my name is Dave</p>
      </div>
    )
  }
}
export default MyComponent