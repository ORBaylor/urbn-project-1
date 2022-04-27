<template>
 <div class="btn-div">
    <button class="btn"> Joke 1</button>
    <button class="btn"> Joke 2</button>
  

 </div>
</template>

<script>
export default {

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