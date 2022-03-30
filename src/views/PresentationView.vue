<template>
    <v-container v-if="presentation" class="presentation-view">
        <v-row justify="center">
            <v-col xl="7" lg="10">
                <v-row justify="center" class="mb-5">
                    <h1 class="font-italic font-weight-bold display-1">{{ presentation.name }}</h1>
                </v-row>
            </v-col>
            <!-- TODO how to make this embed work? -->
            <span v-html="presentation.description"></span>
        </v-row>
        <v-divider class="my-10"/>
        <snackbar :snackbar="snackbar"></snackbar>
    </v-container>
</template>

<script>
    import axios from '@/axios'
    import snackbar from '@/components/snackbar'

    export default {
        name: "PresentationView",
        data() {
            return {
                presentation: null,
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
            axios.get(`/presentations/${this.$route.params.slug}/`).then(resp => {
                this.presentation = resp.data
            }).catch(err => this.showFailedSnackbar(err))
        },
        components: {
            'snackbar': snackbar
        },
    }
</script>
