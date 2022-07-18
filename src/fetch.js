import axios from 'axios';
const baseurl = 'https://art-collection-server.herokuapp.com'

export const GET = url => {
    return axios.get(`${baseurl}/${url}`);
}

export const POST = (url, data) => {
    return axios(`${baseurl}/${url}`, {
        method: 'POST',
        data
    })
}