<template>
 <div class="container">
    <button class="btn"> Joke 1</button>
    <button class="btn"> Joke 2</button>
  

 </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: lightskyblue;
    border-style: outset;
    height: 120px;
     width: 300px;
}
.btn{
    background-color: whitesmoke;
    width: 100px;
    border-radius: 10px;
}
</style>