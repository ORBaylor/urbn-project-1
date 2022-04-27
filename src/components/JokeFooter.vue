<template>
 <div class="btn-div">
    <button class="btn" v-on:click="redirectJoke"> Joke </button>
    <button class="btn" v-on:click="redirectFriend" > Friend</button>
  

 </div>
</template>

<script>
export default {
    methods: {
        redirectJoke(){
            this.$router.push({ name: 'joke' });
        },
        redirectFriend(){
            this.$router.push({ name: 'friend' });
        }
    }
}
</script>

<style scoped>
.btn-div{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: lightskyblue;
    border-style: outset;
    height: 120px;
   
}
.btn{
    background-color: whitesmoke;
    width: 100px;
    border-radius: 10px;
}
</style>