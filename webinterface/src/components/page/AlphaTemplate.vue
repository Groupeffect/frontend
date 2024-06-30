<template>
  <div>
    <div v-for="(e, k) in bannerTextList" :key="k">
      <div v-if="bannnerText >= k + 1" class="animate__animated animate__backInLeft">
        <div class="text-left d-flex">
          <h2 class="pl-4 pr-4 pt-4 bgColour"> <i>{{ e }}</i> </h2>
        </div>
      </div>
    </div>
    <br>
    <v-container align="center" justify="center">

      <v-row dense align="center" justify="center"  >
        <v-col v-for="(e,k) in cards" :key="k" lg="3" md="12" sm="12" xs="12" xxs="12" style="text-align: center;">
          <alpha-card :card="e" ></alpha-card>
        </v-col>
      </v-row>
      <br>
      <mosaik-loader :width="mosaikWidth" v-if="computedPictures" :pictures="computedPictures"></mosaik-loader>
    </v-container>

  </div>
</template>

<script>
import AlphaCard from '/src/components/pictures/AlphaCard.vue'
import MosaikLoader from '/src/components/pictures/MosaikLoader.vue'
export default {
  components: { MosaikLoader,AlphaCard },
  name: 'AlphaTemplate',
  props: {
    mosaikWidth: {
      required: false,
      InstanceType: Number
    },
    textFilterTags: {
      required: true
    },
    pictureFilterTags: {
      required: false
    },
    bannerTextListPreset: {
      required: false
    },
    cardFilterTags: {
      required: false
    }
  },
  data: () => ({
    pictures: null,
    bannerTextList: null,
    currentText: 0,
    cards: null
  }),
  computed: {
    bannerStyle() {
      return {
        'background-color': this.$bgColor,
        'color': 'white'
      }
    },
    bannnerText() {
      return this.currentText || null
    },
    computedPictures() {
      return this.pictures
    }
  },
  methods: {
    animateText(index) {
      this.currentText += 1
    }
  },
  created() {
    this.bannerTextList = this.bannerTextListPreset
    this.$getText(this.textFilterTags).then(res => {
      if (res.data.length > 0) {
        this.bannerTextList = res.data.map(e => e.text)
      }
      else {
        this.bannerTextList = this.bannerTextListPreset
      }
      this.bannerTextList.map((e, k) => {
        this.animateText(k)
      })
    }).catch(err => {
      console.error(err)
      this.bannerTextList = this.bannerTextListPreset
      this.bannerTextList.map((e, k) => {
        this.animateText(k)
      })
    })

    this.$getPictures(this.pictureFilterTags).then(res => {
      this.pictures = res.data
    })

    this.$getCards(this.cardFilterTags).then(res => {
      this.cards = res.data
    })
  }
}
</script>

<style></style>