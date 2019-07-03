import axios from 'axios'
export default() => {
  return axios.create({
    baseURL: `https://cancionerofeminista.now.sh/api/` // the url of our server
  })
}