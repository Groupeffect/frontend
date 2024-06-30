<template>
    <v-card align="left" justify="center" max-width="500" min-width="200" style="border-radius: 0% 20%;">
      <v-img :src="card.picture && card.picture.picture">
          <div style="background-color: rgba(0,0,0,0.9);">

            <v-card-title class="bgColour"><b>{{ card.title }}</b></v-card-title>
            <br>
            <v-card-text class="text-subtitle-1">{{ card.text }}</v-card-text>
            <v-card-text class="text-subtitle-1" v-for="(text,kk) in card.texts" :key="kk">
              {{ text.text }}
            </v-card-text>
          </div>
        </v-img>
        <v-card-actions>
          <div v-for="(link,k) in card.links" :key="k" style="width: 100%; text-align: right;">

            <v-btn v-if="link && link.router" :prepend-icon="link.icon" @click="$router.push({name:link.link})">
              {{ link.title }}
            </v-btn>
            <v-btn v-else :prepend-icon="link.icon" :href="link.link" target="_blank">
              {{ link.title }}
            </v-btn>

          </div>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
  name: 'AlphaCard',
  props: {
    width: {
      type: Number,
      required: false
    },
    card: {
      type: Object,
      required: false
    }
  }
}
</script>

<style>

</style>