<template>
    <v-container>
        <v-row justify="center">
            <v-card
                    v-for="button in socialLinks" :key="button.text"
                    :href="button.link"
                    class="mx-3 rounded-lg"
                    :id="button.text"
                    ripple
                    hover
                    target="_blank"
            >
                <v-icon x-large class="pa-1" color="primary">{{ button.icon }}</v-icon>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
    import axios from '@/axios'

    export default {
        name: "SocialLinks",
        data() {
            return {
                socialLinks: []
            }
        },
        created () {
            axios.get('/users/').then(resp => {
                this.socialLinks = resp.data[0].social_links
            }).catch(err => alert(err))
        }
    }
</script>
