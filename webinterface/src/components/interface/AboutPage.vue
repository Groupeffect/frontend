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
import AlphaTemplate from '../page/AlphaTemplate.vue'
export default {
  components: { AlphaTemplate },
  name: 'AboutPage',
  data: () => ({
    textFilter: 'AboutPage,mosaik',
    pictureFilter: 'AboutPage,mosaik',
    cardFilter: 'AboutPage',
    bannerTextListPreset: [
            'ABOUT',
            'Groupeffect is a digital agency based in Cologne, Germany.',
            'We offer a wide range of services, from web hosting to business solutions and consulting.',
            'Our team of experts is ready to help you with your digital needs.',
            'Contact us today to learn more.',
          ]
  })
}
</script>

<style>

</style>