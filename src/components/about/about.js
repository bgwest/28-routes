import React from 'react';

class About extends React.Component {
  // no need for constructor in the about
  render() {
    return (
        <div className="headerDiv">
          <header>
            { /* Xanga IS Back Blog */ }
            <h1>XIBB</h1>
            <h3>Get ready to b l o g.</h3>
            <p>Remember when Xanga was a blog? Well, this is a lesser version of that.</p>
            <p>Xanga used to give super cool functionality like posting your thoughts on the interwebs.</p>
            <p>This basic site written with React and React Router, will allow you to create and delete blog posts locally on your computer.</p>
            <p>How super cool is that?</p>
            <p>Feel free to explore using our dashboard on the left.</p>
          </header>
        </div>
    );
  }
}

export default About;