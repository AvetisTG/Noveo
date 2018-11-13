import { fromJS } from 'immutable';

export const actions = {
    GET_FILES: 'GET_FILES',
    GET_FILES_SUCCESS: 'GET_FILES_SUCCESS',
    GET_FILES_FAIL: 'GET_FILES_FAIL',
};

const defaultState = fromJS({
    files: null,
    filesFetching: false,
    filesError: false
});

export default (state = defaultState, {type, payload}) => {
    switch (type) {

        case actions.GET_FILES:
            return state
                .set('files', null)
                .set('filesFetching', true);

        case actions.GET_FILES_SUCCESS:
            return state
                .set('files', fromJS(payload._embedded.items))
                .set('filesFetching', false)
                .set('filesError', false);

        case actions.GET_FILES_FAIL:
            return state
                .set('filesFetching', false)
                .set('filesError', fromJS(payload));

        default:
            return state;
    }
};
