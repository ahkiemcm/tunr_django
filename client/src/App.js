import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import ArtistList from "./components/ArtistList";
import Artist from "./components/Artist"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <div>
            <h1>Tun.r</h1>
            <Link to={'/'}>All Artists</Link>
          </div>

          <Switch>
            <Route exact path={"/"} component={ArtistList}/>
              <Route exact path={'/artist'} component={Artist}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;