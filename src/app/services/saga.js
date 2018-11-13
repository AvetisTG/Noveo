import FilesSaga from '../modules/files/Saga';
import AuthSaga from '../modules/auth/Saga';

export default function*() {
    yield [
        FilesSaga(),
        AuthSaga(),
    ];
};
