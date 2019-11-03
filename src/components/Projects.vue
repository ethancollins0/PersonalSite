<template>
    <div class='projects'>
        <section id='projects' class='divider'></section>
        <div class='content-container'>
            <div class='projects-title'>
                <h1 >Projects</h1>
            </div>
            <div class='projects-container'>
                <Project :project="project" v-for="(project, index) in projects" :key="index"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Project from './Project'

    export default {
        computed: {
            projects(){
                return this.$store.state.projects
            }
        },
        components: {
            Project
        }
    }
</script>

<style lang="scss">
    .projects {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        height: max-content;
        min-height: calc(100vh + 53px);
        padding-bottom: 53px;
        background: #fff;

        .divider {
            height: 1rem;
        }

        .content-container {
            margin-top: 10vh;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .projects-title {
                display: flex;
                justify-content: center;
                justify-items: center;
                width: 60%;
                border-bottom: 1px solid black;
                margin-bottom: 20px;

                h1 {
                    font-size: 25pt;
                    font-family: 'raleway-bold';
                }
            }

            .projects-container {
                display: flex;
                flex-flow: row wrap;
                justify-content: space-evenly;
                width: 100%;
            }
        }  
    }
</style>