<template>
    <div id='home' class='intro-container'>
        <h1>Hi, I'm <span class='highlight'>Ethan Collins.</span></h1>
        <h2>I'm a full-stack software developer.</h2>
        <button @click="handleClick" class='intro-button'>See my Work <i></i> </button>
    </div>
</template>

<script>
    export default {
        methods: {
            handleClick(){
                document.querySelector('#navbar').scrollIntoView({ behavior: 'smooth' })
            }
        }
    }
</script>

<style lang='scss'>
    .intro-container {
        background: url('../assets/background.jpg') no-repeat center center fixed; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;

        height: calc(100vh + 53px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid black;

        h1 {
            text-align: center;
            color: #fff;
        }
        
        h2 {
            text-align: center;
            color: #fff;
        }


        .highlight {
            color: #ffa500;
            font-weight: bold;
        }

        .intro-button {
            padding: 0 10px;
            border: 2px solid black;
            outline: none;
            background-color: white;
            color: black;
            font-weight: bold;
        }

        .intro-button:hover {
            background-color: #333;
            color: white;
        }
    }
</style>