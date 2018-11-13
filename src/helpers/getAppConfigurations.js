import {mainReducer, mainSaga} from '../app/services';
import configureStore from './configureStore';

export default () => {
    let configs = {
        routes: {}
    };

    configs.store = configureStore(mainReducer, mainSaga);

    return configs;
};
