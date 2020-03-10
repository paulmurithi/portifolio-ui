<template>
  <b-navbar toggleable="lg" type="dark" variant="info" >
    <b-navbar-brand href="#home">Mp</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <div class="mr-auto"></div>
      <b-navbar-nav v-scroll-spy-active v-scroll-spy-link>
        <b-nav-item href="#home">home</b-nav-item>
        <b-nav-item href="#about">about</b-nav-item>
        <b-nav-item href="#skills">skills</b-nav-item>
        <b-nav-item href="#projects">projects</b-nav-item>
        <b-nav-item href="#testimonials">testimonials</b-nav-item>
        <b-nav-item href="#contact">contact</b-nav-item>
        <b-nav-item href="#">blog</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

</template>

<script>
  export default {
    name:'Navigation',
    data: function () {
      return {
        
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import url('https://fonts.googleapis.com/css?family=Monoton&display=swap');
  .navbar-brand{
    font-family: 'Monoton', cursive;
    font-style: italic;
    padding: 0 2rem 0 5rem;
  }
  .navbar{
    z-index: 5;
    position: sticky;
    top: 0;
    background-color: #252934 !important;
    color:#fff !important;
    padding:0 5rem 0 5rem;
    border:none;
    text-align: center;
    .nav-link{
      text-transform: uppercase;
      font-weight: 500;
    }
    li:hover{
      background-color: #161a20;
    }
    .active{
      background-color: #161a20;
    }
  }
</style>
