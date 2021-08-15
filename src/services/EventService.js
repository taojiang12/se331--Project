import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/taojiang12/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  //receive perPage and page to sent to the request url
  getEvents(perPage, page) {
    return apiClient.get('/Events?page=' + page + '&size=' + perPage)
  },
  //Added new call
  getEvent(id) {
    return apiClient.get('/Events/' + id)
  }
}
