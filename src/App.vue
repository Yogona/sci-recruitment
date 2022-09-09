<template>
  <img alt="Vue logo" src="./assets/sensenetlogo.png">
  <Recruitment id="reg_id" msg="Welcome to Your Vue.js App"/>
</template>

<script>
import Recruitment from './components/RecruitmentComponent.vue'

export default {
  name: 'App',
  components: {
    Recruitment
  }
}
</script>

<style>
  #reg_id{
    margin: 0px 20% 0px 20%;
    text-align: left;
  }

  .form-control:focus{
    border-color: green;
    box-shadow: 0px 0px 10px green;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 0px;
}
</style>
