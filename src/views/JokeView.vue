<template>
  <div class="Joke-div">
      <joke-header></joke-header>
      <geek-jokes></geek-jokes>
      <dark-joke-footer></dark-joke-footer>
  </div>
</template>

<script>
import JokeHeader from '@/components/JokeHeader.vue'
import GeekJokes from '@/components/GeekJokes.vue'
import DarkJokeFooter from '@/components/DarkJokeFooter.vue'

export default {
    components:{
        JokeHeader,
        GeekJokes,
        DarkJokeFooter
    }

}
</script>

<style scoped>
    .Joke-div{
         display: flex;
    flex-direction: column;
    justify-content: center;
    width: 600px;
    background:  #F7F7F7;
    margin-left: 630px;
    margin-top: 60px;
    }
</style>