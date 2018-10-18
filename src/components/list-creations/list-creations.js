import React from "react";
import uuid from "uuid/v4";

import DeleteNote from '../delete-note/delete-note';
import EditNote from '../edit-note/edit-note';

class ListCreations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    // should never be 'null'...
    this.state.blogposts = this.props.blogposts.map((blog) => {
      return blog;
    }) || 'null';
    console.log(this.props);

  }

  renderBlogPosts = () => {
    return (
        <ul>
          {
            this.state.blogposts.map((currentBlogPost) => {
              console.log(currentBlogPost);
              return <li className="listCreationsLI" key={currentBlogPost.id}>
                {currentBlogPost.title}
                <br />
                {currentBlogPost.body}
                <br />
                <DeleteNote/>
                <EditNote/>
              </li>
            })
            }
        </ul>
    );
  };

  renderLikes = () => {
        if(this.state.blogposts.length > 0) {
          return <p className="listCreations">Total Likes: {this.calculateTotalPrice()} </p>
        } // else
        if(this.state.blogposts.length === 0) {
          return <p>Empty. Get to creating! :=)</p>
        }
  };

  calculateTotalPrice = () => {
    return this.state.blogposts.reduce((sum, currentBlogPost) => {
      return sum + Number(currentBlogPost.likes);
    }, 0);
  };

  render() {
    return (
        <section className="listCreationsSelection">
          <h2 className="listCreations">Blog Posts</h2>
          {this.renderBlogPosts()}
          {this.renderLikes()}
        </section>
    );
  }
}

 export default ListCreations;
