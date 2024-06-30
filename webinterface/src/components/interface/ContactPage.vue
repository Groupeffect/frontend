<template>
  <div>
    <alpha-template 
      v-if="!responseComputed"
      :textFilterTags="textFilter" 
      :pictureFilterTags="pictureFilter"
      :cardFilterTags="cardFilter"
      :bannerTextListPreset="bannerTextListPreset"
      :mosaikWidth="300">
    </alpha-template>
    <div v-if="!responseComputed && $user && $user.isAuthenticated">
      <v-btn prepend-icon="mdi-eye" @click="getProfile">View Full Profil</v-btn>
    </div>
    <person-template v-if="responseComputed && $user && $user.isAuthenticated" :responseData="responseComputed.json"></person-template>
  </div>
</template>
<script>
import PersonTemplate from '/src/components/page/PersonTemplate.vue'
import AlphaTemplate from '/src/components/page/AlphaTemplate.vue'
export default {
  components: { AlphaTemplate, PersonTemplate },
  name: 'ContactPage',
  data: () => ({
    response: null,
    cardFilter: 'ContactPage',
    textFilter: 'ContactPage',
    pictureFilter: 'ContactPage',
    bannerTextListPreset: [
      'CONTACT',
      'Amir Yousefi',
      'mail@groupeffect.de',
    ],
  }),
  computed:{
    responseComputed() {
      return this.response || null
    }
  },
  methods: {
    getProfile() {
      const url = this.$env().find('jsonAssetUrl').value
      this.axios.get(url+'?name=contact_profile')
        .then((res) => {
          console.log(res)
          if (res.data.length > 0){
            this.response = res.data[0]
          }
        })
        .catch((err) => {
          console.error(err)
        })
    },
  },
  created() {
    this.$route.query && this.$route.query.hideBar
    ? this.getProfile()
    : null
    this.$getUserMe()
  }
}
</script>

<style></style>