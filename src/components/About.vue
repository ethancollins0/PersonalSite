<template>
    <div id='about' class='about'>
        <div class='about-container'>
            <h1>About</h1>
            <div class='about-content'>
                <img src='@/assets/profile.jpg' />
                <p>Full-stack web developer with a background in computer science. I started out with computer science courses in High School, where I took courses in computer science and technical drafting, and became interested in building computers.  This piqued my interest in machinery and computer hardware, which drove me to pursue a degree in computer engineering. </p>
                <p>While completing some computer science and electronics courses in college, I found that having learned about circuitry and computer logic, what I truly loved doing was working with software. I began researching coding bootcamps in early 2019, and decided to make the educational leap to study programming at Flatiron School, with a graduation date of October 2019.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted(){
            let about = document.querySelector('#navbar').getBoundingClientRect()
            console.log('top:', about.top, 'view-height:', screen.height)
        }
    }
</script>

<style lang="scss">
    .about {
        width: 100%;
        height: calc(100vh + 53px);
        background: #f5f5f5;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 10vh;
        padding-bottom: 10vh;

        .about-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .about-content {
                width: 70%;
                // display: flex;
                // flex-direction: row;
                // align-items: center;
                // justify-content: space-around;
                img {
                    height: 240px;
                    width: auto;
                    padding: 20px;
                    float: left;
                } 

                p {
                    margin: 0;
                    text-indent: 50px;
                    width: 100%;
                    color: black;
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
            height: 150vh;
            .about-container {
                .about-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    img {
                        height: 240px;
                        width: 211px;
                    }

                    p {
                        width: 100%;
                        font-size: 16px;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 450px) {
        .about {
            height: 170vh;
        }
    }

    @media screen and (max-width: 350px) {
        .about {
            height: 190vh;
        }
    }
</style>