<template>
    <div class="footer" id="contact">
        <div class="row">
        <div class=" col-xs-10 col-sm-10 col-md-6 contact_form">
            <h1>Contact</h1>
            <div></div>
            <p>Have a question or you want us to work together?</p>
            <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="error in errors" v-bind:key="error.id">{{error}}</li>
                </ul>
            </p>
            <form action="#" method="POST" enctype="multipart/form-data" @submit="checkForm">
                
                <input type="text" id="name" name="name" placeholder="Name" v-model="name">
                <br>

                <input type="email" name="email" id="email" placeholder="Email" v-model="email">
                <br>

                <textarea name="message" id="message" cols="30" rows="10" placeholder="Message" v-model="message">
                    
                </textarea>
                <br>

                <input type="submit" value="Send" id="submit">
            </form>
        </div>
        </div>
        <div class="social_media">
            <li class="Linkedin"><a href="#"><font-awesome-icon :icon="['fab', 'twitter']" /></a></li>
            <li class="facebook"><a href="#"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a></li>
            <li class="instagram"><a href="#"><font-awesome-icon :icon="['fab', 'instagram']" /></a></li>
            <li class="linkedin-in"><a href="#"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></a></li>
            <li class="google-plus-g"><a href="#"><font-awesome-icon :icon="['fab', 'google-plus-g']" /></a></li>
            <li class="whatsapp"><a href="#"><font-awesome-icon :icon="['fab', 'whatsapp']" /></a></li>
            <p>&copy;2020 Murithi Paul. All rights reserved</p>
        </div>
    </div>
</template>
<script>
    export default {
        name:'Footer',
        data:function() {
            return {
                errors:[],
                name:"",
                email:"",
                message:""
            }
        },
        methods:{
            checkForm:function (e) {
                e.preventDefault();
                if(this.name&&this.email&&this.message){
                    this.errors=[];
                    return true
                }
                else if(!this.name){
                    this.errors.push('Name is required');
                }
                else if(!this.email){
                    this.errors.push('Email is required');
                }
                else if(!this.message){
                    this.errors.push('Message is required');
                }else{
                    console.log("form validate successfully");
                }
            }
        }
    }
</script>
<style lang='scss' scoped>
    @import '../styles/prefix';
    .footer{
        background-color: #252934;
        clear: both;
        color: #ffffff;
        box-sizing: border-box;
        clip-path: polygon(49% 9%, 100% 0, 100% 100%, 0 100%, 0 0);
        padding-top: 4%;
        
    }
    .contact_form{
        padding: 10px;
        width: 90%;
        margin: 0 auto;
        h1{
            text-transform: uppercase;
            text-align: center;
        }
        div{
            border-bottom: 5px solid #ffffff;
            width: 100px;
            margin: 0 auto;
        }
        p{
            text-align: center;
            color:#3d3dee;
        }
        form{
            width: 100%;
            margin: 0 auto;
            label{
                display: block;
            }
            input{
                width: 100%;
            }
            input[type="text"], input[type="email"]{
                padding: 5px;
                background-color: #1E242C;
                color: #ffffff;
                border: none;
                font-size: 1.2em;
            }
            input[type="email"]{
                margin: 5px 0;
            }
            textarea{
                padding: 5px;
                width: 100%;
                background-color: #1E242C;
                color: #ffffff;
                border: none;
                font-size: 1.2em;
            }
            #submit{
                color:#ffffff;
                font-size: 1.2em;
                padding: 5px;
                background-color: #1b242f;
                text-transform: capitalize;
                border-radius: 5px;
                border: none;
            }
            #submit:hover{
                background-color: #313f42;
            }
        }
    }
    .social_media{
            background-color: #1b242f;
            text-align:center;
            padding: 20px;
            li{
                display:inline;
                list-style-type: none;
                padding: 10px;
                margin-left: 5px;
            }
            a{
                text-decoration: none;
                color:#ffffff;
                transition: transform 1s;
                -webkit-transition: -webkit-transform 1s;
                -moz-transition: -moz-transform 1s;
                -o-transition: -o-transform 1s;
                -ms-transition: -ms-transform 1s;
                @include prefix(transition-timing-function, ease, moz webkit o ms);
            }
            a:hover{
                // transform: rotateY(360deg) scale(2, 2);
                @include prefix(transform, rotateY(360deg), moz webkit o ms);
            }
        }
</style>