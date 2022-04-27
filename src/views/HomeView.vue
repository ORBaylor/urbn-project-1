<template>
    <div class="home-div">
        <joke-header></joke-header>
    <div class="main-div">

        <p>Click The Joke Button To Hear A random Joke</p>
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

</style>