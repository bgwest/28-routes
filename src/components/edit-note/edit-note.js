import React from 'react';
import {Link} from "react-router-dom";

class EditNote extends React.Component {
  constructor(props){
    super(props);
    // should never be 'null'... if it is there is a problem
    // this.state = this.props.location.state.currentBlogPost || 'first render';
    this.state = this.props.currentBlogPost;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleUpdateBlogPost(this.state);
  };

  renderNoteHeader = () => {
    if (this.state) {
      return <h1 className="listCreationsSelection">Edit Note</h1>
    }
  };

  handleRenderEditForm = () => {
    if (this.state) {
      return <form className="creationForm" onSubmit={this.handleSubmit}>
          <input
              type="text"
              name="title"
              placeholder="title blog..."
              value={this.state.title}
              onChange={this.handleChange}
          />
          <br />
          <textarea rows="4" cols="50"
                    name="body" form="usrform"
                    value={this.state.body} onChange={this.handleChange}
                    placeholder="write blog...">
          </textarea>
          <br />
          <input
              type="number"
              name="likes"
              placeholder="0"
              value={this.state.likes}
              onChange={this.handleChange}
          />
          <br />
          <button className="submitButton" type="submit">update</button>
        </form>
    }

  };

  render() {
    return (
        <section>
          {this.renderNoteHeader()}
          {this.handleRenderEditForm()}
        </section>
    );
  }
}

export default EditNote;
