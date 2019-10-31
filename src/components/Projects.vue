<template>
    <div class='projects'>
        <h1>Projects</h1>
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
        justify-content: center;
        height: 400px;
        h1 {
            font-size: 25pt;
            font-family: 'raleway-bold';
        }
    }
</style>