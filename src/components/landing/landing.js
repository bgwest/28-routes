import React from 'react';
import blogImage from './assests/blog-image.jpg';

class Landing extends React.Component {
   // no constructor needed at this time
  render() {
    return (
        <div className="landingDiv">
          <h3>Blog, your way.</h3>
          <img className="landingImg" src={blogImage} alt="Smiley face" />
        </div>
    )
  }
}

export default Landing;
