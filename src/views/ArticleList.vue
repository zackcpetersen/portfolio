<template>
    <v-container class="article-list">
        <v-row justify="center">
            <v-col :cols="12">
                <h1>Checkout my<span class="first-header"> Writing</span></h1>

                <v-divider class="my-10"/>
            </v-col>
            <list-content :iterable="articles" viewPage="ArticleView"></list-content>
        </v-row>
        <snackbar :snackbar="snackbar"></snackbar>
    </v-container>
</template>

<script>
import axios from '@/axios'
import snackbar from '@/components/snackbar'
import listContent from '@/components/listContent'

export default {
    name: "ArticleList",
    components: {
        'list-content': listContent,
        'snackbar': snackbar
    },
    data() {
        return {
            articles: [],
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
        axios.get('/articles/').then(resp => {
            this.articles = resp.data
        }).catch(err => this.showFailedSnackbar(err))
    }
}
</script>

<style scoped>

</style>