import {actions} from './Reducer';

export function getFiles(path) {
    return { type: actions.GET_FILES, payload: path };
}

export function getFilesSuccess(data) {
    return { type: actions.GET_FILES_SUCCESS, payload: data };
}

export function getFilesFail(error) {
    return { type: actions.GET_FILES_FAIL, payload: error };
}




