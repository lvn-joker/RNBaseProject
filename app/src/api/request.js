import axios from 'axios';
import { API_BASE_URL } from 'app/src/config';

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 30000,
    headers: {},
});


export const get = async ({url, query}) => {
    try {
        await axiosInstance.get(url, {})
    } catch ( e ) {
        console.log('get error', e);
    }
};

export const post = async ({url, body}) => {
    try {
        await axiosInstance.post(url, {})
    } catch ( e ) {
        console.log('post error', e);
    }
};

export const put = async ({url, body}) => {
    try {
        await axiosInstance.put(url, {})
    } catch ( e ) {
        console.log('put error', e);
    }
};

export const deleteMethod = async ({url, body}) => {
    try {
        await axiosInstance.delete(url, {})
    } catch ( e ) {
        console.log('delete error', e);
    }
};

export default axiosInstance;
