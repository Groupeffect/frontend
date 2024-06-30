<template>
    <v-card flat class="text-left">
        <v-card-title>{{ title }}</v-card-title>
        <div v-for="(e, k) in response" :key="k">
            <v-card style="border: opx;" flat>
                <v-card-text>
                    <p v-if="e && e.title">
                        <b>{{ e.title }}</b>
                    </p>
                    <div v-if="e && e.description">
                        {{ e.description }}
                    </div>
                    <div v-if="e && e.position">
                        {{ e.position }}
                    </div>
                    <div v-if="e && e.activities">
                        {{ e.activities }}
                    </div>
                    <div v-if="e && e.location">
                        {{ e.location }}
                    </div>
                </v-card-text>
            </v-card>
        </div>
    </v-card>
</template>

<script>
export default {
    name: 'PersonCard',
    props: {
        title: {
            type: String,
            required: true
        },
        response: {
            required: true
        }
    }
}
</script>

<style></style>