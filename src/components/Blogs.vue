<template>
    <div class='blogs'>
        <section id='blogs' class='divider'></section>
        <div class='content-container'>
            <div class='blogs-title'>
                <h1>Blogs</h1>
            </div>
            <div class='blogs-container'>
                <Blog :blog="blog" v-for="(blog, index) in blogs" :key="index"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Blog from './Blog'

    export default {
        computed: {
            blogs(){
                return this.$store.state.blogs
            }
        },
        components: {
            Blog
        }
    }
</script>

<style lang="scss">
    .blogs {   
        width: 100%;
        height: max-content;
        min-height: calc(100vh + 53px);
        background: #f5f5f5;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 10vh;

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

            .blogs-container {
                display: flex;
                flex-flow: row wrap;
                justify-content: space-evenly;
                width: 100%;
            }

            .blogs-title {
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
        }
    }
</style>