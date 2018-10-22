# 28: Frontend routing

## Overview

A simple React blog post SPA (Single Page Application) with React DOM Router.

#### Features

* create blog post ("New Note")
* view your blog posts ("Manage Notes")

* edit your blog post after it is created in manage notes
* delete your blog post after it is created in manage notes

* Dashboard remains on screen as the sites UI
* all blogpost state is passed to App
* App distributes to needed components

### How To

##### Start react app and refresh actively

```
npm run watch
```

### Bugs

Current Bugs: 

* On "Manage Notes" route, when "delete" is clicked your note gets deleted but it does not trigger a react fresh. Currently, a way to see that your note is deleted is to click on another page on the site (e.g. "Home") and then return to "Manage notes". The note will then show as deleted.
 
 #### Shoutouts
 
 Cheers to this post for helping me pass props to CreationForm using the React DOM Router:
 https://tylermcginnis.com/react-router-pass-props-to-components/

### Tests Performed with Jest

###### testing app.js

##### myfile.js

###### travis and jest will be integrated in future labs react labs...

### Built With

React, React-dom-router, ES6, babel, eslint, webpack, etc.

** Please see package.json to confirm dependency details.

### Contributing

Please feel free to contribute. Master branch auto merge locked for approval for non-contributors.

### Version

In Development

### Authors

![CF](http://i.imgur.com/7v5ASc8.png) **Benjamin West** 
