<template>
    <div>
        <v-container align="center">
            <div>
                <v-row>
                    <v-col cols="12" class="text-center">
                        <h1 class="display-1">Welcome to {{ $interfaceName }}</h1>
                    </v-col>
                </v-row>
                <div v-if="!$user.isAuthenticated">
                    <v-card max-width="400" @submit="$login(user)">
                        <v-card-title>
                            Please login to continue
                        </v-card-title>
                        <form>
                            <div class="pa-4">
                                <v-text-field @keydown.enter.prevent="$login(user)" label="Username" v-model="user.username"></v-text-field>
                                <v-text-field @keydown.enter.prevent="$login(user)" label="Email" v-model="user.email"></v-text-field>
                                <v-text-field @keydown.enter.prevent="$login(user)" class="ma-0 pa-0" type="password" label="Password" v-model="user.password"></v-text-field>
                            </div>
                            <v-card-actions >
                                <v-btn size="large" block @click="$login(user)">Login</v-btn>
                            </v-card-actions>
                        </form>
                    </v-card>
                </div>
                <div v-else>
                    <v-card max-width="400">
                        <v-card-title>
                            Hello {{ $userName }}
                        </v-card-title>
                        <v-card-text>
                            {{ $userEmail }}
                        </v-card-text>
                        <v-card-actions>
                            <v-btn block color="warning" @click="$logout()">Logout</v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'LoggingPage',
    data: () => ({
        user: {
            email: null,
            password: null,
            username: null
        }
    }),
    computed: {

    },
    created() {
        this.user.email = this.$userEmail
        this.user.username = this.$userName
        this.user.password = '12345678qw'
    }
}
</script>

<style></style>