<template>
    <div class='projects'>
        <section id='projects' class='divider'></section>
        <div class='content-container'>
            <div class='projects-title'>
                <h1 >Projects</h1>
            </div>
            <div class='projects-container'>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => {
            return {
                test: false
            }
        },
        mounted(){
            console.log(this.test)
        }
    }
</script>

<style lang="scss">
    .projects {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: calc(100vh + 53px);


        .divider {
            height: 4rem;
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

                h1 {
                    font-size: 25pt;
                    font-family: 'raleway-bold';
                }
            }

            .projects-container {
                width: 80%;
            }
        }  
    }
</style>