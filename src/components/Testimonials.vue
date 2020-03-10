<template>
    <div class="testimonials" id="testimonials">
        <VueSlickCarousel v-bind="settings" >
           <Testimony v-for="testimony in testimonials" v-bind:testimony="testimony" v-bind:key="testimony.id"/>
        </VueSlickCarousel>
        <p>Do you know me or we have worked together? Please take few minutes and leave a testimony! <button v-b-modal.leave-testimony >Go</button></p>
        <b-modal id="leave-testimony" title="Leave Testmony">
            <p class="my-4">hello from modal</p>
        </b-modal>

    </div>
</template>
<script>
import Testimony from './Testimony.vue'

// slick carousel
import VueSlickCarousel from 'vue-slick-carousel'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name:"Testimonials",
    components:{
        Testimony,
        VueSlickCarousel
    },
    data:function() {
        return {
            settings:{
                "arrows": true,
                "dots": true,
                "dotsClass": "slick-dots custom-dot-class",
                "edgeFriction": 0.35,
                "infinite": true,
                "speed": 1000,
                "slidesToShow": 1,
                "slidesToScroll": 1,
                "autoplay":true,
                "autoplaySpeed":3000,
                "pauseOnDotsHover":true,
                "pauseOnFocus":true,
                "pauseOnHover":true
            },
            testimonials:[
                {
                    id:1,
                    author:'paul',
                    occupation:'software developer',
                    company:'Andela',
                    content:'I like your work'
                },
                {
                    id:2,
                    author:'moriso',
                    occupation:'software developer',
                    company:'Andela',
                    content:'I like your work'
                },
                {
                    id:3,
                    author:'iano',
                    occupation:'software developer',
                    company:'Andela',
                    content:'I like your work'
                },
                {
                    id:4,
                    author:'pozee',
                    occupation:'software developer',
                    company:'Andela',
                    content:'I like your work'
                },
                {
                    id:5,
                    author:'Ian mutua',
                    occupation:'devop engineer',
                    company:'Ol pajeta concervancy',
                    content:'Your\'re a brilliant guy'
                }
            ]
        }
    },
}
</script>
<style lang="scss" scoped>
    .testimonials{
        padding-top: 3rem;
        p{
            margin-top: 20px;
            text-align:center;
            font-size: 1.2rem;
            font-style:italic;
            button{
                border: none;
                text-decoration:none;
                background-color: #252934;
                color:#fff;
                padding: 5px;
                border-radius: 5px;
            }
        }
    }
    .slick-slider{
        width: 80%;
        margin: 0 auto;
    }
</style>