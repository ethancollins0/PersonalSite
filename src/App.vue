<template>
<v-app>
  <div id="app">
    <MobileNavbar v-if="mobile" />
    <Navbar v-if="mobile == false" />
    <router-view />
  </div>
  </v-app>
</template>

<style lang="scss">
  #app {
    background: url('./assets/background.jpg') no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
</style>

<script>
  import Navbar from './components/Navbar'
  import MobileNavbar from './components/MobileNavbar'

  export default {
    computed: {
      mobile(){
        return this.$store.state.mobile
      }
    },
    mounted() {
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        this.$store.commit('mobile')
      }
    },
    components: {
      MobileNavbar,
      Navbar,
    }
  };
</script>
