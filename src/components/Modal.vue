<template>
    <!-- <div class="card" id="home">
      <transition appear>
        <div class="intro">
            <div class="image_wrapper">
              <img src="../assets/images/my_pic.jpg" />
            </div>
          <h3>Murithi Paul</h3>
          <h5>Fullstack software developer</h5>
        </div>
      </transition>
      <div class="scroll">
        <p><font-awesome-icon :icon="['fas', 'angle-double-down']" /></p>
      </div>
    </div> -->
    <div class="site-banner">
      <div class="container">
        <div class="row" id="home">
          <div class="col-md-6 site-title">
            <h3 class="title-text">HELLO</h3>
            <h1 class="title-text text-uppercase">I am Murithi Paul</h1>
            <h4 class="title-text text-uppercase">Fullstack software developer</h4>
            <div class="site-buttons">
              <div class="d-flex flex-row flex-wrap">
                <button type="button" class="btn button primary-button mr-4 text-uppercase">hire me</button>
                <button type="button" class="btn button secondary-button mr-4 text-uppercase">Get cv</button>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <img src="../assets/images/my_pic.jpg" alt="banner image" class="img-fluid">
          </div>
        </div>
        <div class="row">
          <div class="col-xm-12">
            <div class="scroll">
              <p><font-awesome-icon :icon="['fas', 'angle-double-down']" /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
</template>
<script>
    export default {
        name:'Modal',
        components:{
        }
    }
</script>
<style lang='scss' scoped>
@import "../styles/global";
  //   .card{
  //   background-image: url('../assets/images/background1.jpg');
  //   background-size: cover;
  //   background-repeat: no-repeat;
  //   background-attachment: fixed;
  //   position: relative;
  //   margin:0;
  //   padding:0;
  //   min-height: 100vh;
  //   border:none;
  // }
  .site-banner{
    min-height: 100vh;
    position: relative;
  }
  .site-title{
    h3{
      padding-top:35%;
      font-weight: 500;
    }
    h3::after{
      content: "";
      height: 2px;
      width: 18vw;
      display: inline-block;
      background-color: black;
      transform:translateY(-10px);
    }
    h1{
      font-size: 3rem;
    }
    h4{
      font-size: 1.2rem;
      // font-style: italic;
    }
  }
  .img-fluid{
    padding: 2rem 0;
    width: 90rem;
  }
  @keyframes sroll {
    0%{
      bottom: 20px;
      transform: scale(2);
    }
    25%{
      bottom: 15px;
      transform: scale(1.5);
    }
    50%{
      bottom: 10px;
      transform: scale(1);
    }
    75%{
      bottom: 5px;
      transform: scale(0.5);
    }
    100%{
      bottom: 0px;
      transform: scale(0);
    }
  }
  .scroll{
    position: absolute;
    bottom: 20px;
    left:50%;
    animation-name: sroll;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease;
    svg{
        font-size:2.5em;
        color: #252934;
    }
  }
  .intro{
      position: absolute;
      width:40%;
      top: 50%;
      left: 30%;
      // margin: 0 auto;
      // clip-path: polygon(0 0, 100% 0, 82% 100%, 0 100%, 0% 38%);
      // height: 100%;
      // background-color: #252934;
      padding: 20px;
      opacity: 0.8;
      border-radius: 10px;
      box-shadow: 10 5 black;
      // z-index: 1;
      color: #ffffff;
      background:transparent;
      // opacity: 0.9;
      .image_wrapper{
        width:300px;
        height:300px;
        margin:50px auto;
        border-radius: 50%;
        border:5px solid #ffffff;
        img{
            width: inherit;
            height: inherit;
            border-radius: 50%;
        }
      }
      h3,h5{
          margin: 0;
          text-align: center;
      }
      h5{
          font-style: italic;
          font-weight: lighter;
      }
    }
</style>