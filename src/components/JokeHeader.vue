<template>
 <div class="container">
  
     <label class="switch">
         <input type="checkbox" v-model="isToggled">
        <span class="slider round"></span>
    </label>
    <div class="urbn-div" v-show="isToggled">
      <img src="../assets/urban-outfitters-logo.png" alt="urban-logo">
    </div>
 </div>
</template>

<script>
export default {
  data(){
    return{
      isToggled: false
    }
  }
}
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    background-color: lightskyblue;
    border-style: outset;
    height: 120px;
}


img {
  margin-left: 70px;
 max-width: 50%;
 max-height: 100%;
}
.urban-div {
  
 height: 100px;
 width: 100px;
}
.switch {

  margin-right: 33px;  
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}


.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>