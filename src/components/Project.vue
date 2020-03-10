<template>
    <div class="project_card col-xm-12 col-sm-6 col-md-3 col-lg-3">
        <div class="overlay">
            <a v-bind:href="project.github">github</a>
            <a v-bind:href="project.website">website</a>
            <!-- <a v-b-modal-gallery id="gallery_btn">screenshots</a> -->
            <b-modal id="gallery" title="gallery">
                <p>hello from modal</p>
            </b-modal>
        </div>
        <div class="project_content">
            <div class="image">
                <img src="../assets/images/my_pic.jpg">
            </div>
            <div class="details">
                <p>{{project.title}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Project",
    props: {
        project: {
            type:Object,
            required:true
        }
    }
}
</script>
<style lang="scss" scoped>
    .project_card{
    position: relative;
    width: 300px;
    margin: 0 auto;
    background: #f5f3f3;
    padding: 2px;
    box-sizing: border-box;
    text-align: center;
    box-shadow: 0px 10px 40px rgba(0,0,0,0.5);
    color: rgba(0,0,0,0.5);
    overflow: hidden;
    }
    .project_card .overlay{
    position: absolute;
    top: calc(100% - 2px);
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: linear-gradient(#252934, #1E242C);
    transition: 0.5s;
    opacity: 0.8;
    color: #fff;
    align-content: center;
    padding-top: 25%;
    a{
        color: #fff;
        text-decoration: none;
        display: block;
        border:1px solid #fff;
        width: 35%;
        margin: 0 auto;
        margin-bottom: 10px;
        padding: 10px;
        border-radius: 5px;
        transition:all 0.5s;
        text-transform: capitalize;
    }
    a:hover{
        background-color: #fff;
        color: #1E242C;
    }
}
    .project_card:hover .overlay{
    top: 0;
}
    .project_card .project_content p{
    line-height: 24px;
    font-size: 18px;
}
    .project_card .project_content .image{
    width: 100%;
    max-height: 200px;
    margin: 0 auto;
    overflow: hidden;
    // box-shadow: 0px 10px 20px rgba(0,0,0,0.2);
}
.project_card .project_content .image img{
    width: 100%;
    height: 200px;
    text-align: center;
}
</style>