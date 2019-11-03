<template>
    <div id='about' class='about'>
        <div class='about-container'>
            <h1>About</h1>
            <div class='about-content'>
                <div class='about-text'>
                    <p>Full-stack web developer with a background in computer science. Experienced with both hardware as well as software. I went to college for 2 years pursuing a degree in computer engineering, where I took courses in computer logic, electronics, physics, and computer science, using software like MATLAB. I also have experience with AutoCAD, and reached state level for technical drafting in Texas in 2016.</p>
                </div>
                <div class='about-technologies-title'>
                    <h2>Technologies</h2>
                </div>
                <div class='project-masonry'>
                    <div @click='handleClick' class='project-brick' v-for="(technology, index) in technologies" :key="index">{{ technology }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted(){
            let about = document.querySelector('#navbar').getBoundingClientRect()
            console.log('top:', about.top, 'view-height:', screen.height)
        },
        data(){
            return {
                technologies: Object.keys(this.$store.state.technologies),
            }
        },
        methods: {
            handleClick(event){
                window.open(this.$store.state.technologies[event.target.innerText])
            }
        }
    }
</script>

<style lang="scss">
    .about {
        width: 100%;
        height: max-content;
        min-height: calc(100vh + 53px);
        background: #f5f5f5;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 10vh;

        .about-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            justify-content: flex-start;

            .about-content {
                width: 70%;
                
                .about-technologies-title {
                    display: flex;
                    justify-content: center;

                    h2 {
                        margin: 30px;
                        width: 40%;
                        border-bottom: 1px solid black;
                        display: flex;
                        justify-content: center;
                    }
                }

                .project-masonry {
            display: flex;
            flex-flow: row wrap;
            margin-left: -8px;
            width: 100%;

            .project-brick:hover {
                background: #474747;
                cursor: pointer;
            }

            .project-brick {
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 3px;
                background: #333;
                color: #fff;
                flex: auto;
                height: 40px;
                min-width: 70px;
                min-width: 20%;
                max-width: 250px;
                margin: 0 8px 8px 0;
                border: 1px solid black;
            }
        }

                img {
                    height: 240px;
                    width: auto;
                    padding: 20px;
                    float: left;
                } 
                .about-text {
                    width: 100%;
                    p {
                        margin: 0;
                        margin-bottom: 5vh;
                        text-indent: 50px;
                        width: 100%;
                        color: black;
                    }
                }  
            }

                h1 {
                    margin: 30px;
                    width: 60%;
                    margin-top: calc(10vh);
                    border-bottom: 1px solid black;
                    display: flex;
                    justify-content: center;
                }

            

            .about-text {
                width: 50%;
            }
        }  
    }

    @media screen and (max-width: 600px) {
        .about {
            .about-container {
                .about-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    img {
                        height: 240px;
                        width: 211px;
                    }

                    .about-text {
                        width: 100%;
                        p {
                            width: 100%;
                            font-size: 16px;
                        }
                    }
                }
            }
        }
    }
</style>