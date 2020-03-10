<template>
    <div class="testimony">
        <div class="profile">
            <img src="../assets/images/my_pic.jpg" alt="">
            <h5>{{testimony.author}}</h5>
            <p class="occupation">{{testimony.occupation}} at {{testimony.company}}</p>
        </div>
        <div class="content">
            <p>"{{testimony.content}}"</p>
        </div>
    </div>
</template>
<script>
export default {
    name:"Testimony",
    props:{
        testimony:{
            type:Object,
            required:true
        }
    }
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Indie+Flower|Kelly+Slab&display=swap');
    .testimony{
        width:70%;
        margin:0 auto;
        text-align: center;
        padding: 20px;
        background-color: #edeff5;
        border-radius: 20px;
        // box-shadow: 2px 5px #252934;
        img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
        h5{
            text-transform: capitalize;
        }
        .occupation{
            font-style: italic;
        }
        .content{
            // font-family: 'Kelly Slab', cursive;
            font-family: 'Indie Flower', cursive;
        }
    }
</style>