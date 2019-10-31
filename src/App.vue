<template>
<v-app>
  <div id="app">
    <router-view />
    <Navbar />
    <About />
    <Projects />
  </div>
  </v-app>
</template>

<script>
  import Navbar from './components/Navbar'
  import About from './components/About'
  import Projects from './components/Projects'

  export default {
      components: {
        Navbar,
        About,
        Projects
      },
      computed: {
        viewheight(){
          return this.$store.state.viewheight
        },
      },
      mounted(){
        this.$store.commit('viewheight', window.innerHeight + 53)
      },
  };
</script>

<style lang="scss">
  #app {
    background: #fff;
    width: calc(100vw);
  }
</style>

