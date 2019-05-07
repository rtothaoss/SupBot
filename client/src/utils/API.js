import axios from "axios";


export default {
  loadDroplist: function(query) {
    return axios.get("/api/scrape");
  }
};