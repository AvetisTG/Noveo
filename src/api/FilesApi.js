import axios from 'axios';
import {YANDEX_TOKEN} from '../helpers/constants';

export default class Api {

    static getFiles(path) {
        const yandexToken = sessionStorage.getItem(YANDEX_TOKEN);
        return axios.request({
            url: `https://cloud-api.yandex.net:443/v1/disk/resources?path=/${path ? path : ''}`,
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `OAuth ${yandexToken}`
            }
        });
    }

}

