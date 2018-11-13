import {call, put, takeLatest} from 'redux-saga/effects';
import * as Actions from './Actions';
import {actions} from './Reducer';
import Api from '../../../api/FilesApi';

export function* getFiles({ payload }) {
    try {
        const response = yield call(Api.getFiles, payload);
        yield put(Actions.getFilesSuccess(response.data));
    } catch (e) {
        const error = e.response.data.description;
        yield put(Actions.getFilesFail(error));
    }
}



function* Saga() {
    yield takeLatest(actions.GET_FILES, getFiles);
}

export default Saga;
