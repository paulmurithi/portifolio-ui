<template>
    <div class="projects" id="projects">
        <div class="project-title pb-5">
            <h1 class="text-uppercase title-h1">projects</h1>
            <div class="rule"></div>
            <div class="button-group">
                <button type="button" class="active">all</button>
                <button type="button">react</button>
                <button type="button">vue</button>
                <button type="button">django</button>
                <button type="button">sass</button>
            </div>
        </div>
        <!-- <h1>Projects</h1>
        <div class="rule"></div>
        <ul class="projects_nav">
            <li>react</li>
            <li>vue</li>
            <li>django</li>
            <li>laravel</li>
            <li>sass</li>
        </ul> -->
        <div class=" row projects_container">
            <!-- <isotope :options='getOptions()' :list="projects" @filter="filterOption=arguments[0]" @sort="sortOption=arguments[0]">
               <project v-for="element in projects" :key="element.id" v-bind:project="element"/>
            </isotope> -->
            <project v-for="element in projects" :key="element.id" v-bind:project="element"/>
        </div>
    </div>
</template>
<script>
import Project from './Project.vue';
import { mapGetters, mapActions } from "vuex";
// import isotope from 'vueisotope';
export default {
    name:"Projects",
    components:{
        Project,
        // isotope
    },
    data:function () {
        return{
            projects:[
                {
                    id:1,
                    title:'School management system',
                    images:['../assets/images/my_pic.jpg'],
                    github:'github.com',
                    website:'school.com',
                },
                {
                    id:2,
                    title:'Rental management system',
                    images:['../assets/images/my_pic.jpg'],
                    github:'github.com',
                    website:'rental.com',
                },
                {
                    id:3,
                    title:'Hospital management system',
                    images:['../assets/images/my_pic.jpg'],
                    github:'github.com',
                    website:'hospital.com',
                },
                {
                    id:4,
                    title:'car management system',
                    images:['../assets/images/my_pic.jpg'],
                    github:'github.com',
                    website:'car.com',
                }
            ]
        }
    },
    computed: mapGetters(["allProjects"]),
    created() {
        this.fetchProjects();
    },
    methods: {
        ...mapActions(["fetchProjects"])
    },
}
</script>
<style lang="scss" scoped>
@import "../styles/global";
.projects{
    // padding: 4rem 0;
    padding: 2rem 2rem;
    .project-title .button-group{
        text-align: center;
    }
    .project-title .button-group button{
        padding: 10px;
        background:transparent;
        border:none;
        font:normal 500 16px/130px;
        text-transform: uppercase;
    }
    // .project-title .button-group button+button{
    //     padding-left: 3rem;
    // }
}
    h1{
        text-align: center;
    }
    .rule{
        margin: 0 auto;
        width:100px;
        border-bottom: 5px solid black;
    }
    // ul{
    //     list-style-type: none;
    //     text-align: center;
    //     li{
    //         display: inline;
    //         padding: 10px;
    //         text-align:center;
    //         text-transform: capitalize;
    //     }
    //     li:hover{
    //         background-color: #252934;
    //         cursor: pointer;
    //         color: #ffffff;
    //     }
    // }
    // .projects_container{
    //     display: flex;
    //     column-count:4;
    //     column-gap: 2;
    //     flex-wrap: wrap;
    //     justify-content: center;
    // }
    // .project_card{
    //    margin: 0.5px;
    // }
</style>
