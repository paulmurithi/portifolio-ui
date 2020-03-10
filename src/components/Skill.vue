<template>
    <div class="skill">
        <label class="name" v-bind:for="skill.name">{{skill.name}}</label>
        <b-progress :value="skill.proficiency" :max="max" show-progress v-bind:id="skill.name"></b-progress>
    </div>
</template>
<script>
export default {
    name:"Skill",
    props: {
        skill: {
            type:Object,
            required:true
        }
    },
    data() {
        return {
            max:100
        }
    },
}
</script>
<style lang="scss" scoped>

</style>