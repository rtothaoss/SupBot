import axios from "axios";


export default {
  loadDroplist: function(query) {
    return axios.get("/api/droplist");
  },
  scrape: function() {
    return axios.get('/api/scrape')
  },
  createCard1: function(data) {
    return axios.post('/api/card1/', data)
  },
  createCard2: function(data) {
    return axios.post('/api/card2/', data)
  },
  card1picks: function() {
    return axios.post('/api/card1picks')
  },
  card2picks: function() {
    return axios.post('/api/card2picks')
  },
  deleteList: function() {
    return axios.delete('/api/droplist')
  },
  login: function() {
    return axios.get('/auth/google')
  },
  loginCallback: function() {
    return axios.get('/auth/google/callback')
  },
  bot1: function(data) {
    return axios.post('/bot/bot1', data)
  },
  bot2: function() {
    return axios.get('/bot/bot2')
  }

};

