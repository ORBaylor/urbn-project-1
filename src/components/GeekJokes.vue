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
            joke:  "new test"
        }
    }
}
</script>

<style>
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        
        background-color: whitesmoke;
        height: 100vh;
    }
</style>