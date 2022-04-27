import axios from 'axios';

const http = axios.create({
  baseURL: "https://geek-jokes.sameerkumar.website"
});

export default {

    getJoke(){
        return http.get('/api')
    }
}