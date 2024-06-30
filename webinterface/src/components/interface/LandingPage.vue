<template>
  <div>
    <alpha-template :textFilterTags="textFilter" 
      :pictureFilterTags="pictureFilter"
      :cardFilterTags="cardFilter"
      :bannerTextListPreset="bannerTextListPreset">
    </alpha-template>
  </div>
</template>

<script>
import AlphaTemplate from '/src/components/page/AlphaTemplate.vue'
export default {
  components: { AlphaTemplate },
  name: 'LandingPage',
  data: () => ({
    textFilter: 'LandingPage',
    pictureFilter: 'LandingPage,mosaik',
    cardFilter: 'LandingPage',
    bannerTextListPreset: [
      'Welcome to the digital world of tomorrow',
      '+ Web hosting',
      '+ Business solutions',
      '+ Consulting'
    ]
  })
}
</script>

<style></style>