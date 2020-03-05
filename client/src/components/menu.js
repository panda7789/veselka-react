import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Index from '../pages/index';

export default function Menu() {
    return (
        <Router>
            <div>
                <nav>
                <ul>
                    <li>
                    <Link to="/pages/index">Home</Link>
                    </li>
                    <li>
                    <Link to="/pages/index">About</Link>
                    </li>
                    <li>
                    <Link to="/pages/index">Users</Link>
                    </li>
                </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                <Route path="/pages/index">
                    <Index />
                </Route>
                </Switch>
            </div>
        </Router>
    );
}