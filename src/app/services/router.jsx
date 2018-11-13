import { Route, Switch } from 'react-router';
import { NotFound } from '../../components';
import * as Pages from '../pages';
import * as React from 'react';

export default (store) => {
    return (
        <Switch>
            <Route exact path='/' component={Pages.Home} />
            <Route exact path='/files/:path?' component={Pages.Files} />
            <Route path='*' component={NotFound} />
        </Switch>
    );
};
