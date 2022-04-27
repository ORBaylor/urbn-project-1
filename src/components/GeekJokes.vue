<template>
<div class="container">
    <div class="main" >
        <header>
            Press Next For The Next Joke
        </header>
        <div class="center">
          <h3>{{joke}}</h3>
         
        </div>
        <div class="btn-class">
             <button v-on:click="retriveveJoke" id="btn">Next</button>
        </div>
    </div>
    
</div>
  
</template>

<script>
import JokeService from '../services/JokeService';
export default {
    data(){
        return {
            joke:  ""
        }
    },
      methods: {
      retriveveJoke(){
        JokeService.getJoke().then(response => {
          this.joke = response.data;
          
        });
      },
      }
}
</script>

<style scoped>
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 100px;
        margin-bottom: 100px;
        
        background:  #F7F7F7;
        
        width: auto;
    }
    .center{
         border-style: groove;
         width: 600px;
    }
    .main{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #btn{
        height: 30px;
    border: 1px solid;
    
    background-color: cornflowerblue;
    margin: 0px, 20px;
    border-radius: 10px;
     width: 150px;
     border: 2px solid gray;   
     color: white;
     
     
    }
   
</style>