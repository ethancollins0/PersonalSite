<template>
    <div class='projects' >
        <h1>Projects</h1>
        <div class='projects-container'>
            <template v-for="(project, index) in projects">
                <Project  :project="project" :key="index" />
            </template>
        </div>
    </div>
</template>

<script>
    import Project from '../components/Project'

    export default {
        data(){
            return {
                projects: this.$store.state.projects,
            }
        },
        components: {
            Project
        },
        mounted() {
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                this.$store.commit('mobile')
            }
        },
    }
</script>

<style lang="scss">
    .projects {
        margin-top: 20px;
        // background: rgba(200, 200, 200, .8);
        display: flex;
        flex-direction: column;
        align-items: center;

        .projects-container {
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
        }
    }
</style>
