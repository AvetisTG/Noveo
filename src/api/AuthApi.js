import axios from 'axios';
import {AUTHENTICATION_URL, APP_ID} from '../helpers/constants';

export default class Api {
    static getAuthentication(url) {
        return axios.request({
            url: `${AUTHENTICATION_URL}${APP_ID}${url ? `&redirect_uri=${url}` : ''}`,
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
    }
}

