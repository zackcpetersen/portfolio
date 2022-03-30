<template>
    <v-container v-if="article" class="article-view">
        <v-row justify="center">
            <v-col xl="7" lg="10">
                <v-row justify="center" class="mb-5">
                    <h1 class="font-italic font-weight-bold display-1">{{ article.name }}</h1>
                </v-row>
                <v-row justify="start">
                    <v-btn v-if="article.live_url" :href="article.live_url" target="_blank" color="primary" class="ma-3">
                        See Published Article
                    </v-btn>
                </v-row>
                <v-card elevation="8">
                    <v-carousel
                        show-arrows-on-hover
                        height="auto"
                        progress
                    >
                        <v-carousel-item
                            v-for="(img, i) in article.images"
                            :key="i"
                            :src="img.image"
                            aspect-ratio="1"
                            contain
                        >
                        </v-carousel-item>
                    </v-carousel>
                </v-card>
            </v-col>
        </v-row>

        <div class="about mt-10 text-left pl-5">
            <span v-html="article.description"></span>
        </div>
        <v-divider class="my-10"/>
        <snackbar :snackbar="snackbar"></snackbar>
    </v-container>
</template>

<script>
import axios from '@/axios'
import snackbar from '@/components/snackbar'

export default {
    name: "ArticleView",
    data() {
        return {
            article: null,
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
        axios.get(`/articles/${this.$route.params.slug}/`).then(resp => {
            this.article = resp.data
        }).catch(err => this.showFailedSnackbar(err))
    },
    components: {
        'snackbar': snackbar
    },
}
</script>
