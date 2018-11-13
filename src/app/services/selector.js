import filesStoreSelector from '../modules/files/Selector';

export default (state, modules = []) => {
    if (!modules.length) {
        return {
            ...filesStoreSelector(state)
        };
    }

    let stateInProps = {};

    if (modules.includes('files')) {
        stateInProps = Object.assign({}, stateInProps, {...filesStoreSelector(state)});
    }

    return stateInProps;
};
