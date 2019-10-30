<template>
    <div class='project' v-bind:class="{ mobile: mobile }">
        <img src='@/assets/water_pi.jpg' />
        <span class='project-links'>
            <h3><span>{{project.title}}</span></h3>
            <span> - </span>
            <a target="_blank" :href="project.github">Git</a>
            <span> - </span>
            <a target="_blank" :href="project.demo">Demo</a>
        </span>
        <p>{{project.description}}</p>
        <div class='technology-container'>
            <span v-for="(technology, index) in project.technologies" :key="index">{{technology}} </span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            project: Object,
        },
        computed: {
            mobile(){
                return this.$store.state.mobile
            } 
        },
        mounted(){
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                this.$store.commit('mobile')
            }
        },
    }
</script>

<style lang="scss">
    .project {
        background: rgba(200, 200, 200, .8);
        margin: 10px;
        padding: 10px;
        width: 45%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 2px;

        .project-links {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
            h3 {
                padding-left: 10px;
                padding-right: 10px;
            }
            a {
                padding-left: 10px;
                padding-right: 10px;

            }
        }

        img {
            margin-top: 15px;
            border-radius: 2px;;
            width: 90%;
            max-height: 220px;
        }

        h3 {
            display: flex;
            justify-self: center;
            width: max-content;
        }

        p {
            padding: 10px;
        }
    }

    .mobile {
        width: 90%;
    }
</style>