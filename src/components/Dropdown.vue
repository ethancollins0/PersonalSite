<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          color="black"
          v-on="on"
          outlined
        >
          Menu
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="handleClick(item.route)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'About', route: '/about' },
        { title: 'Projects', route: '/projects' },
        { title: 'Blogs', route: '/blogs'  },
        { title: 'Contact', route: '/contact'},
      ],
    }),
    methods: {
        handleClick(route){
            this.$router.history.push(route)
        }
    }
  }
</script>
