<template>
    <v-layout class="rounded rounded-md"  >
    <v-app-bar elevation="0">
      <v-img id="logo" class="h-100 w-0 left-0 d-flex" :src="logo" max-height="40" ></v-img>
      <v-app-bar-title class="left-0 w-0 d-flex" >
        <a @click="$router.push({name:'LandingPage'})" class="text-decoration-none" aria-label="home" title="Home">
          Groupeffect
        </a>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <template v-slot:append>
        <v-app-bar-nav-icon :color="$activeUser ? 'active': ''" @click="setMenuState()" title="Menu"></v-app-bar-nav-icon>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" location="right">
      <div :style="navBgCss" >
        <v-list style="background-color: black; width: 100%; text-align: left;">
          <v-list-item class="">
            <div v-if="!$activeUser">
              <v-btn prepend-icon="mdi-account" @click="$router.push({name:'LoggingPage'})">login</v-btn>
            </div>
            <div v-else >
              <v-btn prepend-icon="mdi-account" @click="$logout()">logout</v-btn>
            </div>
          </v-list-item>

          <v-list-item v-for="(link, index) in navLinks" :key="index" >
                <v-btn :prepend-icon="link.icon" @click="$router.push({name: link.to})" :title="link.title">
                  {{ link.title }}
                </v-btn>
          </v-list-item>

          <v-list-item class="">
            <v-btn prepend-icon="mdi-github" href="https://github.com/Groupeffect" target="_blank">Github</v-btn>
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
    menuActive() {
      return this.drawer
    },
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
  methods: {
    setMenuState(){
            this.drawer = !this.drawer
    },
  },
  mounted() {
  },
  created() {
    Environment.load()
  }
  
}
</script>
<style >
#logo {
  filter: invert(1); /* Invert colors completely */
  max-width: 70px;
}
</style>
