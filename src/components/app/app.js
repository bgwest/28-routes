import "@babel/polyfill";
import React from 'react';
import uuid from "uuid/v4";

import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import About from '../about/about';
import Dashboard from '../dashboard/dashboard';
import Landing from '../landing/landing';
import CreationForm from '../creation-form/creation-form';
import ListCreations from '../list-creations/list-creations';
import EditNote from "../edit-note/edit-note";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.blogposts = []; // [ '0': {title: '', body: '', likes: 0, } ]
  }

  handleCreateBlogPost = (blogPost) => {
    blogPost.createdOn = new Date();
    blogPost.id = uuid();
    return this.setState((previousState) => {
      return {
        blogposts: [...previousState.blogposts, blogPost],
      }
    });
  };

  handleUpdateBlogPost = (updatedBlog) => {
    return this.setState((previousState) => {
      return { blogposts: previousState.blogposts.map(function (previousBlog) {
        if (previousBlog.id === updatedBlog.id) {
          console.log('note updated. check app state.');
          return updatedBlog;
        }
        if (previousBlog.id !== updatedBlog.id) {
          return previousBlog;
        }
      })
    }
    })
  };

  handleDeleteBlogPost = (blogToDelete) => {
    return this.setState((previousState) => {
      return { blogposts: previousState.blogposts.filter(function(blog) {
          return blog.id !== blogToDelete.id;
        })
      }
    })
  };

  render() {
    return (
        <BrowserRouter>
        <div>
          <Dashboard/>
          <Route exact={true} path="/about" component={About}/>
          <Route exact={true} path="/" component={Landing}/>
          <Route exact={true} path="/newnote"
                 render={(props) => <CreationForm {...props}
                 handleCreateBlogPost={this.handleCreateBlogPost}
                  blogposts={this.state.blogposts}
                 />}
          />
          { /* passing handleCreateBlogPost to list creations for EditNote... */ }
          <Route exact={true} path="/managenotes"
                 render={(props) => <ListCreations {...props}
                 handleUpdateBlogPost={this.handleUpdateBlogPost}
                 handleDeleteBlogPost={this.handleDeleteBlogPost}
                 blogposts={this.state.blogposts}
                 />}
          />
          { /* <Route exact={true} path="/editnote" handleUpdateBlogPost={this.handleUpdateBlogPost} component={EditNote}/> */ }
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
