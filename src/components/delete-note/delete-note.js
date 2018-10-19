import React from 'react';

class DeleteNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.blogpost;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleDeleteBlogPost(this.state);
  };

  render() {
    return (
      <button onClick={this.handleSubmit}>delete</button>
    );
  }
}

export default DeleteNote;
