<template>
    <div class='blog' @click="handleClick">
        <img :src="image" :alt='blog.alt'/>
        <div class='blog-content'>
            <h2>{{blog.title}}</h2>
            <h4>{{blog.date}}</h4>
            <p>{{blog.intro}}</p>
        </div>
    </div>
</template>

<script>

    export default {
        props: {
            blog: Object
        },
        data(){
            return {
                image: require('@/assets/' + this.blog.image)
            }
        },
        methods: {
            handleClick(){
                window.open(this.blog.url, '_blank')
            }
        }
    }
</script>

<style lang="scss">
    .blog {
        flex-flow: row wrap;
        border-radius: 1px;
        // box-shadow: 5px 5px 10px black;
        // border: 1px solid black;
        border-radius: 2px;
        margin: 1vw;
        width: 40%;
        display: flex;
        flex-direction: column;
        align-content: center; 
        -webkit-background-size: 250px 300px; 
        -moz-background-size: 250px 300px;
        -o-background-size: 250px 300px;
        background-size: 250px 300px;
        height: max-content;
        width: 250px;

        img {
            height: 200px;
            width: 250px;
        }

        .blog-content {

            h2 {
                font-size: 20px;
            }

            h4 {
                color: black;
                border-bottom: 1px solid black;
                padding-bottom: 5px;
                font-size: 14px;
                color: black;
                font-weight: 400;
            }

            p {
                color: rgb(0, 0, 0);
                font-weight: 400;
            }
        }
    }

    .blog:hover {
        cursor: pointer;

        h2 {
            color: #0074D9;
        }
    }
</style>