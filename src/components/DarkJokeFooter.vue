<template>
 <div class="container">
    <button class="btn" v-on:click="redirect"> Home</button>
    
   
 </div>
</template>

<script>
export default {
      methods: {
        redirect(){
            this.$router.push({ name: 'home' });
        },
      
    }
}
</script>

<style scoped>
.container{
    display: flex;
    align-items: flex-end;
    justify-content: center;
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