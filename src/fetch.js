import axios from 'axios'
const baseurl = 'https://art-collection-server.herokuapp.com'
const baseurlLocal = 'https://localhost:7009'

export const GET = (url) => {
  return axios.get(`${baseurl}/${url}`)
}

export const POST = (url, data) => {
  return axios.post(`${baseurl}/${url}`, data)
}
