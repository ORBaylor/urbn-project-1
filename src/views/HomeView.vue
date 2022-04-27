<template>
    <div class="home-div">
        <joke-header></joke-header>
       
    <div class="p-toggle">
          <p>Hit The Toggle and See what Happens</p>
    </div>     
    <div class="main-div">

        <p>Click The Joke Button For A random Joke</p>
        <p>Click The Friend Button To Put Your Friends Knowlede To The Test</p>
       
    </div>
    <joke-footer></joke-footer>
    </div>
    
</template>

<script>
import JokeFooter from '@/components/JokeFooter.vue'
import JokeHeader from '@/components/JokeHeader.vue'

export default {
    name: 'HomeView',
    components: {
        JokeFooter,
        JokeHeader
    }
}
</script>

<style scoped>
.main-div{
    margin-left: 60px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 200px;
}
.p-toggle{
    display: flex;
    justify-content: flex-end;
}
.home-div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 600px;
    background:  #F7F7F7;
    margin-left: 630px;
    margin-top: 60px;
}
p{
    margin-right: 20px;
    border: 2px solid lightgray;
    border-radius: 10px;
}
</style>