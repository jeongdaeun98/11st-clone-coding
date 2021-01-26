import axios from 'axios'

export default {
  install (Vue) {
    Vue.prototype.$fetch = async ({ requestName }) => {
      const { data } = await axios.get(`https://trusting-williams-8cacfb.netlify.app/.netlify/functions/main?apiKey=${process.env.API_KEY}&requestName=${requestName}`)
      return data
    }
  }
}