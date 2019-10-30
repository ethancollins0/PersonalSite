<template>
  <div class="about">
    <div class='header' v-bind:class="{mobile: this.$store.state.mobile}">
      <div class='title-container'>
        <h1>Ethan Collins</h1>
        <h2>Software Developer</h2>
      </div>
      <div class='picture-container'>
        <img src='@/assets/profile.jpg' />
      </div>
    </div>
    <body v-bind:class="{body_mobile: this.$store.state.mobile}">
      <article class='about-container' >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. </p>

        <p>Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>

        <p>Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. </p>

        <p>Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. </p>
      </article>
    </body>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss">
  .about {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .header {
      border-radius: 5px 5px 0 0;
      margin-top: 10px;
      width: 50%;
      background: rgba(255, 255, 255, 0.8);
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      height: 200px;

      .title-container {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }

      .picture-container {
        display: flex;
        align-items: center;
        width: max-content;
        max-width: 160px;
        img {
          height: 80%;
          border-radius: 5px;
        }
      }
    }

    .mobile {
      width: 90%;
      height: 150px;
      .picture-container {
        img {
          height: 80%;
        }
      }
      .title-container {
          h1 {
            font-size: 25px;
          }
          h2 {
            font-size: 20px;
          }
        }
    }

    .body_mobile {
      width: 90%;
      article {
        width: 100%;
      }
    }

    body {
      display: flex;
      justify-content: center;
      article {
        padding: 10px;
        width: 50%;
        background: rgba(255, 255, 255, 0.8);
      }
    }
  }
</style>