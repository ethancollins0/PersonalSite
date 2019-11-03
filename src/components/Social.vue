<template>
    <div class='intro-social-links'>
        <v-icon 
            @click='handleClick'
            name='github'
            class='intro-social-icon' 
            :size="30" 
            alt='github icon'>mdi-github-box
        </v-icon>
        <v-icon 
            @click='handleClick'
            name='linkedin'
            class='intro-social-icon'
            :size="30" 
            alt='linkedin icon'>mdi-linkedin-box
        </v-icon>
        <v-icon 
            name='medium'
            @click='handleClick'
            class='intro-social-icon' 
            :size="30" 
            alt='medium icon'>mdi-medium
        </v-icon>
        <a class='mailtoui intro-social-anchor' href="mailto:ethantcollins98@gmail.com"><v-icon 
            name='gmail'
            class='intro-social-icon' 
            :size="30" 
            alt='gmail icon'>mdi-gmail
        </v-icon>
        </a>
        <v-icon 
            @click='handleResume'
            class='intro-social-icon' 
            :size="30" 
            alt='resume icon'>mdi-file-account
        </v-icon>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                social: this.$store.state.social
            }
        },
        methods: {
            handleClick(event){
                const name = event.target.getAttribute('name')
                window.open(this.social[name], '_blank')
            },
            handleResume(){
                const pdf = './Resume.pdf'
                window.open(pdf)
            }
        },
    }
</script>

<style lang="scss">
    .intro-social-links {
        height: 2em;
        width: 10em;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin: 5px;
        margin-top: 0;

        .intro-social-icon:hover {
            cursor: pointer;
        } 

        .intro-social-anchor {
            text-decoration: none;
        }
    }
</style>