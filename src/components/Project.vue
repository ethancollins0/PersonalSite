<template>
    <div class='project'>  <!-- hover to reveal cool features, flip card -->
        <div class='project-title'>
            <img src='@/assets/water.pi.png' />
            <h1>{{project.title}}</h1>
        </div>
        <div class='project-info'>
            <p>Github Link | Deployed Link</p>
            <p>This is what is does and some cool stuff</p>
        </div>
        <div class='project-masonry'>
            <div class='project-brick' v-for="(technology, index) in project.technologies" :key="index">{{ technology }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            project: Object
        },
        mounted(){
            console.log(this.project)
        }
    }
</script>

<style lang="scss">
    .project {
        flex-flow: row wrap;
        min-width: 250px;
        border-radius: 1px;
        box-shadow: 5px 5px 10px black;
        margin: 1vw;
        padding: 20px;
        width: 45%;
        background-color: #f5f5f5;
        display: flex;
        flex-direction: column;
        align-content: center;
        .project-title {
            display: flex;
            flex-direction: column;
            align-items: center;
            img {
                height: auto;
                width: 80%;
            }
        }

        .project-masonry {
            display: flex;
            flex-flow: row wrap;
            margin-left: -8px;
            width: 100%;

            .project-brick {
                text-align: center;
                border-radius: 3px;
                background: #333;
                color: #fff;
                flex: auto;
                height: 30px;
                min-width: 20%;
                margin: 0 8px 8px 0;
            }
        }
    }
</style>