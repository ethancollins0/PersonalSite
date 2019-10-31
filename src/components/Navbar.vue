<template>
        <nav class='navbar' id='navbar'>
            <div class='navbar-container' v-bind:class="{ fixed: belowRange }">
                <ul>
                    <li @click='handleClick' v-bind:class="{ active: siteSection == 'home' }" name='home'>Home</li>
                    <li @click='handleClick' v-bind:class="{ active: siteSection == 'about' }" name='about'>About</li>
                    <li @click='handleClick' v-bind:class="{ active: siteSection == 'projects' }" name='projects'>Projects</li>
                    <li @click='handleClick' v-bind:class="{ active: siteSection == 'blogs' }" name='blogs'>Blogs</li>
                    <li @click='handleClick' v-bind:class="{ active: siteSection == 'contact' }" name='contact'>Contact</li>
                </ul>
            </div>
        </nav>
</template>

<script>
    export default {
        methods: {
            handleClick(event){
                const name = event.target.getAttribute('name')
                this.$store.commit('siteSection', name)
                name == 'about'
                    ? document.querySelector('#navbar').scrollIntoView({ behavior: 'smooth' })
                    : document.querySelector(`#${event.target.getAttribute('name')}`).scrollIntoView({ behavior: 'smooth' })
            },
            handleScroll(){
                console.log(this.belowRange)
                if (window.pageYOffset >= this.$store.state.viewheight){
                    this.belowRange = true
                } else {
                    this.belowRange = false
                }
                this.checkComponent()
            },
            checkComponent(){

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
            height: 4rem;

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
                list-style: none;
                box-sizing: border-box;
                height: 4rem;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;

                li {
                    padding: 0 1.5rem;
                    cursor: pointer;
                }

                li:hover {
                    color: red;
                }
            }

            .active {
                color: red;
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