<template>
    <!-- <div class="about" id="about">
        <div class="image">
            <img src="../assets/images/about.jpg" />
          </div>
        <div class="content">
            <h1>About me</h1>
        </div>
    </div> -->
    <div class="about-area" id="about">
        <div class="row">
            <div class="col-md-6">
                <div class="about-image">
                    <img src="../assets/images/about.jpg" alt="about image">
                </div>
            </div>
            <div class="col-md-6 about-title">
                <h2 class="text-uppercase pt-5">
                    <span>About me</span>
                </h2>
                <div class="paragraph py-4 w-75">
                    <p class="para">
                        let me introduce myself
                    </p>
                    <p class="para">
                        let me introduce myself
                    </p>
                    <button type="button" class="btn button primary-button text-uppercase">download cv</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"About"
}
</script>
<style lang="scss" scoped>
    // .about{
    //     display: flex;
    //     column-count: 2;
    //     flex-wrap: wrap;
    //     padding: 20px;
    // }
    @import "../styles/global";
    .about-area{
        padding: 1rem 1rem;
        .about-title h2 span{
            display: block;
            font:normal bold 49px/60px;
            letter-spacing: 21px;
        }
        .about-title .paragraph{
            padding: 4rem 0;
        }
    }
</style>
