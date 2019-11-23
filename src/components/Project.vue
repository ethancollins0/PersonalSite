<template>
    <div class='project'>
        <div class='project-title'>
            <div class='project-image'>
                <img :src="require('@/assets/' + project.image_url)" />
            </div>
            <div class='project-info'>
                <span class='title-division'>
                    <h2>
                        {{project.title}}
                        <div class='links'>
                            <span><img src='@/assets/github.png' alt='github' @click="handleClick" /></span>
                            <span><v-icon v-if="project.demo" :size="30" :color="'#333'" @click="handleDemo">mdi-earth</v-icon></span>
                        </div>
                    </h2>
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
            },
            handleDemo(){
                window.open(this.project.demo, '_blank')
            }
        }
    }
</script>

<style lang="scss">

    .project {
        flex-flow: row wrap;
        min-width: 250px;
        border-radius: 1px;
        // box-shadow: 5px 5px 10px black;
        border: 1px solid black;
        border-radius: 2px;
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

            .project-image {
                img {
                    height: auto;
                    min-height: 120px;
                    max-height: 180px;
                    width: 100%;
                }
            }
            
            .project-info {
                display: flex;
                flex-direction: column;
                width: 100%;
                padding-bottom: 0.4rem;
                align-items: center;

                .title-division {
                    width: 100%;
                    h2 {
                        width: 100%;
                        display: flex;
                        align-content: center;
                        justify-content: center;

                        .links {
                            padding-left: 10px;
                            display: flex;
                            align-content: center;

                            span {
                                display: flex;
                                align-items: center;

                                img {
                                    height: 25px;
                                    width: 25px;
                                    margin-right: 5px;
                                }

                                img:hover {
                                    cursor: pointer;
                                }
                            }
                        }
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
                max-width: 40%;
                margin: 0 8px 8px 0;
                border: 1px solid black;
            }
        }
    }
</style>