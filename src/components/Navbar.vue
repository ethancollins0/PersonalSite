<template>
        <nav class='navbar'>
            <div class='navbar-container' v-bind:class="{ fixed: belowRange }">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Blogs</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
</template>

<script>
    export default {
        methods: {
            handleClick(event){
                this.$store.commit('siteSection', event.target.getAttribute('name'))
            },
            handleScroll(){
                console.log(this.belowRange)
                if (window.pageYOffset >= this.$store.state.viewheight){
                    this.belowRange = true
                } else {
                    this.belowRange = false
                }
            }
        },
        data(){
            return {
                belowRange: false
            }
        },
        computed: {
            siteSection(){
                return this.$store.state.siteSection
            },
        },
        mounted(){
            window.addEventListener('scroll', this.handleScroll)
            if (window.pageYOffset >= this.viewheight){
                this.belowRange = true
            } else {
                this.belowRange = false
            }
        },
        destroyed(){
            window.removeEventListener('scroll', this.handleScroll)
        },
    }
</script>

<style lang="scss">
        .navbar {
            width: 100%;
            background-color: #333;
            color: #fff;
            font-size: 1.5rem;
            text-transform: uppercase;
            font-weight: 100;
            height: 4rem;
            line-height: 4rem;

            .navbar-container {
                width: 100%;
                margin: 0 auto;
                background-color: #333;
                color: #fff;
                font-size: 1.5rem;
                text-transform: uppercase;
                font-weight: 100;
                height: 4rem;
                line-height: 4rem;
                border-bottom: 3px solid #04C2C9;


            ul {
                float: left;
                list-style: none;

                li {
                    display: inline-block;
                    padding: 0 1.5rem;
                    cursor: pointer;
                }

                li:hover {
                    color: red;
                }
            }  
        }       
    }

    .fixed {
        position: fixed;
        top: 0;
        z-index: 20;
        margin-bottom: 30px;
    }

        
</style>