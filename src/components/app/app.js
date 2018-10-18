import "@babel/polyfill";
import React from 'react';
import uuid from "uuid/v4";

import { BrowserRouter, Route, Link } from 'react-router-dom';
import About from '../about/about';
import Dashboard from '../dashboard/dashboard';
import Landing from '../landing/landing';
import CreationForm from '../creation-form/creation-form';
import ListCreations from '../list-creations/list-creations';

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
                  blogposts={this.state.blogposts}/>}/>
          <Route exact={true} path="/managenotes"
                 render={(props) => <ListCreations {...props}
                 blogposts={this.state.blogposts}/>}/>
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
