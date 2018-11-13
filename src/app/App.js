import React from 'react';
import getAppConfigurations from '../helpers/getAppConfigurations';
import {default as MainRouter} from './services/router'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

export default () => {
    const {store} = getAppConfigurations();

    return (
        <Provider store={store}>
            <BrowserRouter>
                <MainRouter />
            </BrowserRouter>
        </Provider>
    );
}
