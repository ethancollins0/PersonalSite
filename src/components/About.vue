<template>
    <div class='about'>
        <h1>About</h1>
        <div class='about-content'>
            <img src='@/assets/profile.jpg' />
            <div class='about-text'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. </p>
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
        height: calc(100vh - 50px);
        background: #f5f5f5;
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            // padding: 10px;
            margin: 30px;
            margin-top: calc(10vh);
            border-bottom: 1px solid black;
        }

        .about-content {
            display: flex;
            flex-direction: row;
            align-items: center;
            img {
                height: 180px;
                width: auto;
                padding: 20px;
            } 

            p {
                margin: 0;
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