import {takeLatest} from 'redux-saga/effects';
import {AUTHENTICATION_URL, APP_ID} from '../../../helpers/constants';

export function* getAuthentication({payload}) {
    console.log(payload, '>>>');
    try {
        yield window.open(`${AUTHENTICATION_URL}${APP_ID}${payload ? `&redirect_uri=${payload}` : ''}`);
    } catch (error) {
        new Error(error)
    }
}



function* Saga() {
    yield takeLatest('GET_AUTHENTICATION', getAuthentication);
}

export default Saga;


