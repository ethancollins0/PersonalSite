<template>
    <div class='project'>  <!-- hover to reveal cool features, flip card -->
        <div class='project-title'>
            <img src='@/assets/water.pi.png' />
            <div class='project-info'>
                <span class='title-division'></span>
                <span class='title-division'>
                    <h2>{{project.title}}</h2>
                </span>
                <span class='title-division links'>
                    <img src='@/assets/github.png' alt='github' @click="handleClick" />
                    <a v-if="project.demo" :href="project.demo">Demo</a>
                </span>
            </div>
        </div>
        <p class='project-description'>{{ project.description }}</p>
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
        methods: {
            handleClick(){
                window.open(this.project.github, '_blank')
            }
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
        width: 40%;
        background-color: #f5f5f5;
        display: flex;
        flex-direction: column;
        align-content: center;

        .project-description {
            display: flex;
            justify-content: center;
        }

        .project-title {
            display: flex;
            flex-direction: column;
            align-items: center;
            img {
                height: auto;
                width: 100%;
            }

            .project-info {
                display: flex;
                flex-direction: row;
                width: 100%;
                padding-bottom: 0.5rem;

                .title-division:first-of-type {
                    width: 30%;
                }

                .title-division:nth-of-type(2) {
                    width: 40%;
                    // background-color: black;
                    display: flex;
                    justify-content: center;
                }



                .links {
                    width: 30%;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    img {
                        height: 25px;
                        width: auto;
                        margin-right: 0.8rem;
                    }

                    img:hover {
                        cursor: pointer;
                    }

                    a {
                        margin-right: 0.8rem;
                    }
                }
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
                border: 1px solid black;
            }
        }
    }
</style>