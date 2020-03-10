<template>
    <div class="skills" id="skills">
        <h1>Skills</h1>
        <div class="rule"></div>
        <div class="skills_container">
            <Skill v-for="skill in skills" v-bind:skill="skill" v-bind:key="skill.id"/>
        </div>
        
    </div>
</template>
<script>
import Skill from './Skill.vue'
export default {
    name:"Skills",
    components:{
        Skill
    },
    data:function () {
            return{
                skills:[
                    {
                        id:1,
                        name:'sass',
                        proficiency:'75%'
                    },
                    {
                        id:2,
                        name:'vue',
                        proficiency:'80%'
                    },
                    {
                        id:3,
                        name:'react',
                        proficiency:'80%'
                    }
                ]
            }
        }
}
</script>
<style lang="scss" scoped>
    .skills{
        background-color: #f7f2f2;
    }
    .skills_container{
        // display: flex;
        flex-wrap: wrap;
    }
    h1{
        text-align: center;
    }
    .rule{
        margin: auto;
        width: 50px;
        border-bottom: 5px solid black;
    }
</style>
