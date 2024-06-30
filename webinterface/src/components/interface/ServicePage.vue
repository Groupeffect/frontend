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
      name: 'ServicePage',
      data: () => ({
        textFilter: 'ServicePage',
        pictureFilter: 'ServicePage,service',
        cardFilter: 'ServicePage',
        bannerTextListPreset: [
            'SERVICES',
            'Cloud Provider:','AWS, GCP, Azure, OCI',
            'E-Mail Hosting:', 'Private, Business, Enterprise',
            'Development:', 'Web, Mobile, Desktop',
          ]
      })
    }
    </script>
    
    <style>
    
    </style>