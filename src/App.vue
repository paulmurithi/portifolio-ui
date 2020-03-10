<template>
  <div id="app" class="container_fluid" v-scroll-spy v-bind="scroll">
    <Modal />
    <Navigation />
    <About />
    <Skills/>
    <Projects/>
    <Testimonials/>
    <Footer/>
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";
import Footer from "./components/Footer.vue";
import About from "./components/About.vue";
import Projects from './components/Projects.vue';
import Skills from './components/Skills.vue';
import Navigation from './components/Navigation.vue';
import Testimonials from './components/Testimonials.vue';

export default {
  name: 'app',
  components: {
    Footer,
    Modal,
    About,
    Projects,
    Skills,
    Navigation,
    Testimonials
  },
  data:function() {
    return{
      sroll:{
        allowNoActive:true,
      }
    }
  }
}
</script>

<style lang='scss'>
  html,body{
      padding: 0;
      margin: 0;
    }
  
  
</style>

