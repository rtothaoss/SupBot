import axios from "axios";


export default {
  loadDroplist: function(query) {
    return axios.get("/api/droplist");
  },
  scrape: function() {
    return axios.get('/api/scrape')
  },
  createCard1: function() {
    return axios.post('/api/card1')
  },
  createCard2: function() {
    return axios.post('/api/card2')
  },
  card1picks: function() {
    return axios.post('/api/card1picks')
  },
  card2picks: function() {
    return axios.post('/api/card2picks')
  },
};

