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
  accessoryBot1: function(data) {
    return axios.post('/supbot/accessoryBot1', data)
  },
  accessoryBot2: function(data) {
    return axios.post('/supbot/accessoryBot2', data)
  },

  botWithSize1: function(data) {
    return axios.post('/supbot/botWithSize1', data)
  },

  botWithSize2: function(data) {
    return axios.post('/supbot/botWithSize2', data)
  },

  tester: function(data) {
    return axios.post('/supbot/tester', data)
  },
  loginSuccessful: function() {
    return axios.get('/login/success')
  }

};

