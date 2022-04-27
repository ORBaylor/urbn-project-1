<template>
  <div class="friends-div">
    <joke-header></joke-header>
    <friends-quotes></friends-quotes>
    <dark-joke-footer></dark-joke-footer>
  </div>
</template>

<script>
import FriendsQuotes from '@/components/FriendsQuotes.vue'
import DarkJokeFooter from '@/components/DarkJokeFooter.vue'
import JokeHeader from '@/components/JokeHeader.vue'
export default {
  components:{
    FriendsQuotes,
    DarkJokeFooter,
    JokeHeader
  }

}
</script>

<style scoped>
.friends-div{
   display: flex;
    flex-direction: column;
    justify-content: center;
    width: 600px;
    background:  #F7F7F7;
    margin-left: 630px;
    margin-top: 60px;
}

</style>