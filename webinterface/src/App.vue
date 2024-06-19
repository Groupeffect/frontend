<template>
    <v-layout class="rounded rounded-md"  >
    <v-app-bar elevation="0">
      <v-img id="logo" class="h-100 w-0 left-0 d-flex" :src="logo" max-height="40" ></v-img>
      <v-app-bar-title class="left-0 w-0 d-flex" >
        Groupeffect
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <template v-slot:append>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" location="right">
      <div :style="navBgCss" >
        <v-list>
          <v-list-item v-for="(link, index) in navLinks" :key="index" style="background-color: black; width: 100%; text-align: left;">
              <v-list-item-title class="title">
                <div @click="$router.push({name: link.to})">
                  <v-icon class="mr-4">{{ link.icon }}</v-icon>
                  {{ link.title }}
                </div>
              </v-list-item-title>
          </v-list-item>
        </v-list>

      </div>
    </v-navigation-drawer>
    <v-main >
      <router-view/>
    </v-main>
  </v-layout>
</template>
<script>
import logo from '/src/assets/logo.svg'
import navBg from '/src/assets/navigation-drawer-bg.png'
export default {
  name: 'App',
  data: () => ({
    drawer: false,
    logo,
    navBg,
    navLinks: [
      { title: 'Home', icon: 'mdi-home', to: 'LandingPage' },
      { title: 'Services', icon: 'mdi-cogs', to: 'ServicePage' },
      { title: 'Contact', icon: 'mdi-email', to: 'ContactPage' },
      { title: 'About', icon: 'mdi-information', to: 'AboutPage' },
    ]
  }),
  computed: {

    navBgCss() {
      return {
        'background-image': `url(${this.navBg})`,
        'background-size': 'cover',
        'background-position': 'center',
        'background-repeat': 'no-repeat',
        'height': '100%',
        'width': '100%',
        'boreder-radius': '0px',
        "position": "absolute",
        "top": "0",
        "left": "0"
      } ||  null
    }
  },
  created() {
  }
  
}
</script>
<style >
#logo {
  filter: invert(1); /* Invert colors completely */
  max-width: 70px;
}


</style>
