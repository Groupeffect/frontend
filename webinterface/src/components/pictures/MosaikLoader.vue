<template>
        <v-row align="center" justify="center" v-if="pictures" class="imageContainer">
            <v-col v-for="(e, k) in pictures" :key="k" class="mosaikImg text-center">
                <v-container align="center" justify="center">
                    <v-card style="border-radius: 0% 50% 50%;" :width="width || 100" >
                        <v-img :src="e.picture"></v-img>
                    </v-card>
                </v-container>
            </v-col>
        </v-row>
</template>

<script>
export default {
    name: "MosaikLoader",
    props: {
        width: {
            type: Number,
            required: false
        },
        pictures: {
            required: true
        }
    }
}
</script>

<style scoped>
.imageContainer {
    /* text-align: center; */
    /* margin: 0px;
    padding: 0px; */
    /* display: inline-block; */
    /* position: relative */
}

.mosaikImg {
    /* position: relative; */
    max-width: 400px;
    min-width: 200px;
    /* margin: 0px; */
    /* padding: 12px; */
}
</style>