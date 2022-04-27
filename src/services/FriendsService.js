import axios from 'axios';

const http = axios.create({
  baseURL: "https://friends-quotes-api.herokuapp.com"
});

export default {

    getQuote(){
        return http.get('/quotes/random')
    }
}