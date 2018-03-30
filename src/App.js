import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Switch} from 'react-router-dom';

import ForumManagement from './component/ForumManagement';
import Sidebar from './component/Sidebar';
import PostDetails from './component/PostDetails';
import NoPageFound from './component/NoPageFound';
import Navigation from './component/Navigation';
import ForumList from './component/ForumList';

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <Sidebar/>,
    main: () => <ForumManagement/>
  },
  {
    path: "/forum",
    sidebar: () => <Sidebar/>,
    main: () => <ForumList/>
  },
  
  {
    path: "/about",
    sidebar: () => <Sidebar/>,
    main: () => <h2>about</h2>
  }
];


class App extends Component {
  render() {
    return (
      <div>
        <Router basename={process.env.PUBLIC_URL}>
          <div>
           <Navigation/>
          
          {/* <Router>
            <Switch>
              <Route exact path="/" component={ForumManagement} />
              <Route path={"/forum/:id"} component={PostDetails} />
              <Route path="/forum" component={ForumList} />
            </Switch>
          </Router> */}

      <div className="container-fluid">
      <div className="row">

        <div className="col-md-9">
        <Route path={"/post/:id"} component={PostDetails} />
          {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
        </div>

        <div className="col-md-3">
        <Route path={"/post/:id"} component={Sidebar} />
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.sidebar}
            />
          ))}
          </div>
        </div>
      </div>
       
        </div>
        </Router>
          </div>
    );
  }
}

export default App;
