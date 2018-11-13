export const GetFromHash = (hash, key) => {
    const regex = new RegExp('.+' + key + '=');
    return hash.replace(regex, '').split('&')[0];
};