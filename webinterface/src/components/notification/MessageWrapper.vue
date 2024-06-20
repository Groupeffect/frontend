<template>
  <div v-if="$notifications.length">
    <v-snackbar v-model="snackbar">
        <div v-for="(e,k) in $notifications" :key="k">
            <v-card :color="e.category" class="ma-2">
                <v-card-title>{{ e.message }}</v-card-title>
            </v-card>
        </div>
    </v-snackbar>
  </div>
</template>

<script>
export default {
    name: 'MessageWrapper',
    data: () => ({
        snackbar: true,
    }),
    computed: {
    
    },
    created() { }
}
</script>

<style>

</style>