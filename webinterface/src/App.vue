<template>
    <v-layout class="rounded rounded-md"  >
    <v-app-bar elevation="0" v-if="!hideBar">
      <v-img id="logo" class="h-100 w-0 left-0 d-flex" :src="logo" max-height="40" ></v-img>
      <v-app-bar-title class="left-0 w-0 d-flex" >
        <a @click="$router.push({name:'LandingPage'})" class="text-decoration-none" aria-label="home" title="Home">
          Groupeffect
        </a>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <template v-slot:append>
        <v-app-bar-nav-icon :color="$user.isAuthenticated ? 'active': ''" @click="setMenuState()" title="Menu"></v-app-bar-nav-icon>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" location="right" width="180">
      <div :style="navBgCss" >
        <v-list>
          
          <v-list-item :style="navListItemStyle" class="text-left navItem" v-for="(link, index) in navLinks" :key="index" >
            <v-btn :prepend-icon="link.icon" @click="$router.push({name: link.to})" :title="link.title">
              <b>{{link.title}}</b>
            </v-btn>
          </v-list-item>
          
          <v-list-item :style="navListItemStyle" class="text-left navItem">
            <v-btn prepend-icon="mdi-github" href="https://github.com/Groupeffect" target="_blank">Github</v-btn>
          </v-list-item>
          
          <v-list-item :style="navListItemStyle" class="text-left navItem">
            <div v-if="!$user.isAuthenticated">
              <v-btn prepend-icon="mdi-account" @click="$router.push({name:'LoggingPage'})">login</v-btn>
            </div>
            <div v-else >
              <v-btn prepend-icon="mdi-account" @click="$logout()">logout</v-btn>
            </div>
          </v-list-item>
        </v-list>

      </div>
    </v-navigation-drawer>
    <v-main >
      <message-wrapper/>
      <router-view/>
    </v-main>
  </v-layout>
</template>
<script>
import Environment from '/src/models/interface/Environment';
import logo from '/src/assets/logo.svg'
import navBg from '/src/assets/navigation-drawer-bg.png'
import MessageWrapper from './components/notification/MessageWrapper.vue';

export default {
  components: { MessageWrapper },
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
    hideBar() {
      return this.$route.query && this.$route.query.hideBar  || false
    },
    menuActive() {
      return this.drawer
    },
    navListItemStyle(){
      return {margin: '0%', padding: '0%'}
    },  
    navBgCss() {
      return {
        'background-image': `url(${this.navBg})`,
        'background-size': 'cover',
        'background-position': 'left',
        'background-repeat': 'no-repeat',
        'height': '100%',
        'width': '100%',
        'boreder-radius': '0px',
        "position": "absolute",
        "top": "0",
        "left": "0",
        "animation": "color-change 90s infinite",
        "animation-timing-function": "linear"
      } ||  null
    }
  },
  methods: {
    setMenuState(){
            this.drawer = !this.drawer
    },
  },
  created() {
    Environment.load()
    Environment.checkBackend(this.axios)
  }
  
}
</script>
<style>
#logo {
  filter: invert(1); /* Invert colors completely */
  max-width: 70px;
}
.navItem .v-list-item__content  {
  background: rgb(7, 13, 13);
}
</style>
