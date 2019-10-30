<template>
    <div class='navbar'>
            <!-- <img src='@/assets/logo.png' /> -->
            <div class='link-container'>
                <div class='text-container' v-bind:class="{active: active == 'about'}" ><h3 @click="handleClick" name='about'>About</h3></div>
                <div class='text-container' v-bind:class="{active: active == 'blogs'}" ><h3 @click="handleClick" name='blogs'>Blogs</h3></div>
                <div class='text-container' v-bind:class="{active: active == 'projects'}" ><h3 @click="handleClick" name='projects'>Projects</h3></div>
                <div class='text-container' v-bind:class="{active: active == 'contact'}" ><h3 @click="handleClick" name='contact'>Contact</h3></div>
            </div>
    </div>
</template>

<script>
    export default {
       computed: {
           active(){
               return this.$store.state.selected_nav
           }
       },
       methods: {
           handleClick(event){
               let name = event.target.getAttribute('name')
               this.$store.commit('selectNav', name)
               this.$router.history.push(`/${name}`)
           }
       }
    }
</script>

<style lang="scss">
    .navbar {
        width: 100%;
        height: 50px;
        // background-color: grey;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .link-container {
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;

            .text-container {
                height: 100%;
                display: flex;
                justify-items: center;
                align-items: center;
                margin-top: 20px;
                // background-clip: content-box;
                padding-right: -10px;
                padding-left: -10px;
            }

            .active {
                margin-top: 10px;
                h3 {
                    font-weight: bold;
                }
            }

            h3 {
                margin: 30px;
                margin-top: 0;
                margin-bottom: 0;
                -moz-box-sizing: border-box;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                border-bottom: 1px solid black;
            }

            h3:hover {
                cursor: pointer;
            }
        }
    }

</style>