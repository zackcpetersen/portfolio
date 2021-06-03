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
        <snackbar :snackbar="snackbar"></snackbar>
    </v-container>
</template>

<script>
    import axios from '@/axios'
    import snackbar from '@/components/snackbar'

    export default {
        name: "socialLinks",
        data() {
            return {
                socialLinks: [],
                snackbar: {
                    color: 'red',
                    icon: 'mdi-thumb-down',
                    show: false
                }
            }
        },
        methods: {
            showFailedSnackbar(err) {
                this.snackbar['content'] = err
                this.snackbar['show'] = true
            }
        },
        created () {
            axios.get('/users/').then(resp => {
                this.socialLinks = resp.data[0].social_links
            }).catch(err => this.showFailedSnackbar(err))
        },
        components: {
            'snackbar': snackbar
        },
    }
</script>
