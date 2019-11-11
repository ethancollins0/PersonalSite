<template>
        <nav class='navbar' id='navbar'>
            <div class='navbar-container' v-bind:class="{ fixed: belowRange }">
                <ul v-if="this.mobile == false">
                    <li @click='handleClick' v-bind:class="{ active: siteSection == 'home' }" name='home'>Home</li>
                    <li @click='handleClick' v-bind:class="{ active: siteSection == 'about' }" name='about'>About</li>
                    <li @click='handleClick' v-bind:class="{ active: siteSection == 'projects' }" name='projects'>Projects</li>
                    <li @click='handleClick' v-bind:class="{ active: siteSection == 'blogs' }" name='blogs'>Blogs</li>
                    <li @click='handleClick' v-bind:class="{ active: siteSection == 'contact' }" name='contact'>Contact</li>
                </ul>
                <Dropdown v-if="this.mobile" />
            </div>
        </nav>
</template>

<script>
    import Dropdown from '../components/Dropdown'

    export default {
        methods: {
            handleClick(event){
                const name = event.target.getAttribute('name')
                name == 'about'
                    ? document.querySelector('#navbar').scrollIntoView({ behavior: 'smooth' })
                    : document.querySelector(`#${event.target.getAttribute('name')}`).scrollIntoView({ behavior: 'smooth' })
            },
            handleScroll(){
                if (document.querySelector('#navbar').getBoundingClientRect().top <= 0){
                    this.belowRange = true
                } else {
                    this.belowRange = false
                }
                this.checkComponent()
            },
            checkComponent(){
                let names = ['contact', 'blogs', 'projects', 'about', 'home']
                let selected = ''
                names.map(name => {
                    let pixels = 1
                    name == 'about'
                        ? pixels = document.querySelector(`#navbar`).getBoundingClientRect().top
                        : pixels = document.querySelector(`#${name}`).getBoundingClientRect().top
                    if (pixels <= 1){
                        if (selected == ''){
                            selected = name
                            this.$store.commit('siteSection', selected)
                        }
                    }
                })
            },
            checkMobile(){
                screen.width <= 700
                    ? this.mobile = true
                    : this.mobile = false
            }
        },
        data(){
            return {
                belowRange: false,
                mobile: false,
            }
        },
        computed: {
            siteSection(){
                return this.$store.state.siteSection
            }
        },
        mounted(){
            window.addEventListener('scroll', this.handleScroll)
            if (window.pageYOffset >= screen.height - 53){
                this.belowRange = true
            } else {
                this.belowRange = false
            }
            this.checkMobile()

            window.addEventListener('resize', this.checkMobile)
        },
        updated(){
            this.checkMobile()
        },
        destroyed(){
            window.removeEventListener('scroll', this.handleScroll)
            window.removeEventListener('resize', this.checkMobile)
        },
        components: {
            Dropdown
        }
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
                    transition: .5s;
                    padding: 0 1.5rem;
                    cursor: pointer;
                }

                li:hover {
                    color: #ffa500;
                }
            }

            .active {
                color:  #ffa500;
            }
        }       
    }

    .fixed {
        position: fixed;
        top: 0;
        z-index: 20;
        // margin-bottom: 30px;
    }

        
</style>