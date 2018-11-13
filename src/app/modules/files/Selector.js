import {createSelector} from 'reselect';

const authStoreSelector = (state) => state.get('Files');

const filesSelector = createSelector(
    authStoreSelector, (Auth) => Auth.get('files')
);

const filesFetchingSelector = createSelector(
    authStoreSelector, (Auth) => Auth.get('filesFetching')
);

const filesErrorSelector = createSelector(
    authStoreSelector, (Auth) => Auth.get('filesError')
);

export default state => {
    return {
        files: filesSelector(state),
        filesFetching: filesFetchingSelector(state),
        filesError: filesErrorSelector(state),
    };
};
