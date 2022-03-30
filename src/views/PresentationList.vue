<template>
    <v-container class="presentation-list">
        <v-row justify="center">
            <v-col :cols="12">
                <h1>Take a look at my<span class="first-header"> Presentations</span></h1>
                <v-divider class="my-10"/>
            </v-col>
            <list-content :iterable="presentations" viewPage="PresentationView"></list-content>
        </v-row>
        <snackbar :snackbar="snackbar"></snackbar>
    </v-container>
</template>

<script>
import axios from '@/axios'
import snackbar from '@/components/snackbar'
import listContent from '@/components/listContent'

export default {
    name: "PresentationList",
    components: {
        'list-content': listContent,
        'snackbar': snackbar
    },
    data() {
        return {
            presentations: [],
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
    created() {
        axios.get('/presentations/').then(resp => {
            this.presentations = resp.data
        }).catch(err => this.showFailedSnackbar(err))
    }
}
</script>
