<template>
    <v-container v-if="project" class="portfolio-view">
        <v-row justify="center">
            <v-col xl="7" lg="10">
                <v-row justify="center" class="mb-5">
                    <h1 class="font-italic font-weight-bold display-1">{{ project.name }}</h1>
                </v-row>
                <v-row justify="start">
                    <v-btn v-if="project.live_url" :href="project.live_url" target="_blank" color="primary" class="ma-3">
                        Visit Website
                    </v-btn>
                    <v-btn v-if="project.source" :href="project.source" target="_blank" color="warning" class="my-3 black--text">
                        See Source
                    </v-btn>
                </v-row>
                <v-card elevation="8">
                    <v-carousel
                            show-arrows-on-hover
                            height="auto"
                            progress
                    >
                        <v-carousel-item
                                v-for="(img, i) in project.images"
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

        <div class="about mt-10" v-for="description in project.descriptions">
            <h2 class="text-left pl-4">{{ description.title }}</h2>
            <p class="ml-4 pt-0 text-left"><span v-html="description.info"></span></p>
        </div>
        <v-divider class="my-10"/>

        <div class="techSheet">
            <h2 class="text-left pl-4">Technical Sheet</h2>
            <p class="text-left pl-4">Technology I used to create this project</p>
            <v-expansion-panels popout flat class="mt-5">
                <v-expansion-panel
                        v-for="tag in project.tags"
                        :key="tag.id"
                >
                    <v-expansion-panel-header>{{ tag.name }}</v-expansion-panel-header>
                    <v-expansion-panel-content class="text-left">
                        <span v-html="tag.description"></span>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>

        <v-divider class="my-10"/>

        <div class="resourceList">
            <p v-if="project.live_url" class="my-1">
                See this project live at <a :href="project.live_url" target="_blank">{{ project.live_url }}</a>
            </p>
            <p v-if="project.source">
                See project source at <a :href="project.source" target="_blank">Github</a>
            </p>
        </div>
        <snackbar :snackbar="snackbar"></snackbar>
    </v-container>
</template>

<script>
    import axios from '@/axios'
    import snackbar from '@/components/snackbar'

    export default {
        name: "ProjectView",
        data() {
            return {
                project: null,
                feedback: null,
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
            axios.get(`/projects/${this.$route.params.slug}/`).then(resp => {
                this.project = resp.data
            }).catch(err => this.showFailedSnackbar(err))
        },
        components: {
            'snackbar': snackbar
        },
    }
</script>

<style>
    div.resourceList {
        list-style-type: none;
        text-align: left;
    }
</style>
