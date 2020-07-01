import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";

import Index from '../pages/index';
import Obsazeni from '../pages/obsazeni';
import { Akce } from '../pages/akce';
import { Aktuality } from '../pages/aktuality';

class Content extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact={true} path="/">
                    <Index />
                </Route>
                <Route path="/pages/index">
                    <Index />
                </Route>
                <Route path="/pages/obsazeni">
                    <Obsazeni />
                </Route>
                <Route path="/pages/akce">
                    <Akce />
                </Route>
                <Route path="/pages/aktuality">
                    <Aktuality />
                </Route>
            </Switch>
        )
    }
}

export default Content;