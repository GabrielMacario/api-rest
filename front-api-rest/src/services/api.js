import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000', // Altere para sua API
})

export default api
