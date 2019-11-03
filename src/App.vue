<template>
<v-app>
  <div id="app">
    <router-view />
    <Navbar />
    <About />
    <Projects />
    <Blogs />
    <Contact />
  </div>
  </v-app>
</template>

<script>
  import Navbar from './components/Navbar'
  import About from './components/About'
  import Projects from './components/Projects'
  import Blogs from './components/Blogs'
  import Contact from './components/Contact'

  const MailtoUI = require('../node_modules/mailtoui/dist/mailtoui-min.js')

  export default {
      components: {
        Navbar,
        About,
        Projects,
        Blogs,
        Contact
      },
      computed: {
        viewheight(){
          return this.$store.state.viewheight
        },
      },
      mounted(){
        this.$store.commit('viewheight', window.innerHeight + 53)
        MailtoUI.run()
      },
  };
</script>

<style lang="scss">
  #app {
    background: #fff;
    width: 100%;
  }
</style>

