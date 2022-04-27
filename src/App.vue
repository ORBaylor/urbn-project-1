<template>
<div class="container">
   <joke-header></joke-header>
  <geek-jokes></geek-jokes>
 
  <dark-joke-footer id="dark-footer"></dark-joke-footer>
  <friends-quotes></friends-quotes>
   <joke-footer></joke-footer>
  <router-view/>
</div>
 
</template>


<script>
import FriendsQuotes from '@/components/FriendsQuotes.vue'


//import JokeFooter from '@/components/JokeFooter.vue'
//import DarkJokeFooter from '@/components/DarkJokeFooter.vue'
//import GeekJokes from '@/components/GeekJokes.vue'
//import JokeHeader from '@/components/JokeHeader.vue'
export default {
  components: {
    FriendsQuotes,
    //GeekJokes,
    //JokeHeader,
    //JokeFooter,
    //DarkJokeFooter,
   
    
    
  }
};

</script>


<style scoped>

  
  




</style>
