import React from "react";
import uuid from "uuid/v4";

import DeleteNote from '../delete-note/delete-note';
import EditNote from '../edit-note/edit-note';
import {Link} from "react-router-dom";

class ListCreations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    // should never be 'null'...
    this.state.blogposts = this.props.blogposts.map((blog) => {
      return blog;
    }) || 'null';

  }

  renderBlogPosts = () => {
    return (
        <ul>
          {
            this.state.blogposts.map((currentBlogPost) => {
              return <li className="listCreationsLI" key={currentBlogPost.id}>
                {currentBlogPost.title}
                <br />
                {currentBlogPost.body}
                <br />
                <DeleteNote blogpost={currentBlogPost}/>
                { /* passing prop method from App to editnote for blogpost edit update/callback*/ }

                { /* the below line resulted in react telling me this is not allowed and refused to render */}
                { /* currentBlogPost.handleUpdateBlogPost = this.props.handleUpdateBlogPost */ }

                { /* <Link to={{pathname: '/editnote', state: { currentBlogPost }}} params={{test: 1}}>edit</Link> */ }
                <EditNote currentBlogPost={currentBlogPost} handleUpdateBlogPost={this.props.handleUpdateBlogPost}/>
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
