<template>
<div class="container">
    <div>
        <header>
            Press Next For The Next Joke
        </header>
        <div class="center">
          <h3>{{joke}}</h3>
          <button>Next</button>
        </div>
    </div>
    
</div>
  
</template>

<script>
export default {
    data(){
        return {
            joke:  "joke"
        }
    }
}
</script>

<style>
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 200px;
        
        background-color: whitesmoke;
        height: 500px;
        width: auto;
    }
</style>