<template>
  <div class="container">
    <div class="header">
      <table id="score">
        <thead>
          <th> Correct</th>
          <th>Wrong</th>
        </thead>
        <tbody>
          <td> {{rightAnswer}}</td>
          <td> {{wrongAnswer}}</td>
        </tbody>
      </table>
    </div>
    <div class="main">
      <label for="friendsQuote">quote</label>
      
      <div class="quote">
        {{quote}}
      </div>
        <h3>{{userInput}}</h3>
    
      <div class="choice">
        
        <input type="radio" id="joey" name="Joey" value="Joey" v-model="userInput">
        <label for="joey">Joey</label>
       
        <input type="radio" id="monica" name="choice" value="Monica" v-model="userInput">
         <label for="monica">Monica</label>
       
        <input type="radio" id="ross" name="choice" value="Ross" v-model="userInput">
         <label for="ross">Ross</label>
      
        <input type="radio" id="phoebe" name="choice" value="Phoebe" v-model="userInput">
          <label for="phoebe">Phoebe</label>
      
        <input type="radio" id="chandler" name="choice" value="Chandler" v-model="userInput">
          <label for="chandler">Chandler</label>
     
        <input type="radio" id="rachel" name="choice" value="Rachel" v-model="userInput">
           <label for="rachel">Rachel</label>
      
      </div>
    </div>
    <div class="check-btn">
      <button id="btn"  v-on:click="checkAnswer(userInput)">Check</button>
    </div>

  </div>
</template>

<script>
import FriendsService from '../services/FriendsService';
//How to change the background color using two tones
// background: linear-gradient(red,blue);

export default {
    data(){
      return {
        
        quote: "",
        character: "",
        rightAnswer: 0,
        wrongAnswer: 0,
        userInput: "",
        turns: 0,
        showCorrect: false,
        showIncorrect: true,
      }
    },
    created(){
      this.retriveveQuote();
    },
    methods: {
      retriveveQuote(){
        FriendsService.getQuote().then(response => {
          this.quote = response.data.quote;
          this.character = response.data.character;
        });
      },
      checkAnswer(){
        while(this.rightAnswer <= 5 || this.wrongAnswer <= 5){
             if(this.userInput == this.character){
          this.rightAnswer++;
           this.retriveveQuote();
        }
        else{
          this.wrongAnswer++;
           this.retriveveQuote();
        }
        }
       
       
      }
    }
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: orange;
}

#friendsQuote{
  max-width: auto;
}
.quote{
  border-style: groove;
  width: 600px;
}
.main{
  background-color: beige;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>