<template>
    <div id='about' class='about'>
        <div class='about-container'>
            <h1>About</h1>
            <div class='about-content'>
                <img src='@/assets/profile.jpg' />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

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
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-around;
                img {
                    height: 180px;
                    width: auto;
                    padding: 20px;
                    float: left;
                } 

                p {
                    margin: 0;
                    text-indent: 50px;
                    width: 70%;
                    float: left;
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
            .about-content {
                display: flex;
                flex-direction: column;
            }
        }
    }
</style>