import React from 'react';
import PropTypes from 'prop-types';

class CreationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      likes: 0,
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.props);
    this.props.handleCreateBlogPost(this.state);
  };

  render() {
    return (
        <form className="creationForm" onSubmit={this.handleSubmit}>
          <input
              type="text"
              name="title"
              placeholder="title blog..."
              value={this.state.title}
              onChange={this.handleChange}
          />
          <textarea rows="4" cols="50"
                    name="body" form="usrform"
                    value={this.state.body} onChange={this.handleChange}
                    placeholder="write blog...">
          </textarea>
          <input
              type="number"
              name="likes"
              placeholder="0"
              value={this.state.likes}
              onChange={this.handleChange}
          />
          <br />
          <button className="submitButton" type="submit">Create Post</button>
        </form>
    );
  }
}

CreationForm.propTypes = {
  handleCreateBlogPost : PropTypes.func,
};


export default CreationForm;
