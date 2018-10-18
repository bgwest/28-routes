import React from "react";
import uuid from "uuid/v4";

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
              return <li key={currentBlogPost.id}>
                {currentBlogPost.title} : $ {currentBlogPost.price}
              </li>
            })
          }
        </ul>
    );
  };

  calculateTotalPrice = () => {
    return this.state.blogposts.reduce((sum, currentBlogPost) => {
      return sum + Number(currentBlogPost.likes);
    }, 0);
  };

  render() {
    return (
        <section>
          <h2 className="listCreations">Blog Posts</h2>
          <p className="listCreations">Add new Expense</p>
          <p className="listCreations">Here is a list of all your blogposts so far:</p>
          {this.renderBlogPosts()}
          <p className="listCreations">Your total likes is : $ {this.calculateTotalPrice()} </p>
        </section>
    );
  }
}

 export default ListCreations;
