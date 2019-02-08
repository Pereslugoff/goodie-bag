import React from "react";
import CandyList from "./CandyList";
import { Route, Switch, NavLink } from 'react-router-dom';

class Root extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/candies">Candies</NavLink>
        </nav>
        <main>
          <h1>Welcome to the Goodie Bag!</h1>
          <p>What a nice home page for your goodies!</p>
          <Switch>
            <Route path="/candies" component={CandyList} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default Root;
