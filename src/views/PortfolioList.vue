<template>
    <v-container class="portfolio-list">
        <v-row justify="center">
            <v-col lg="8">
                <h1>Here's some of <span class="first-header">my Work</span></h1>
                <p>{{ about.description }}</p>

                <v-divider class="my-10" />

                <div class="filter-toggle mt-4" @click="filterToggle = !filterToggle">
                    <p class="filter-button" v-if="!filterToggle"><strong>Show Filters</strong></p>
                    <v-icon v-if="!filterToggle">mdi-chevron-down</v-icon>
                    <p class="filter-button" v-if="filterToggle"><strong>Hide Filters</strong></p>
                    <v-icon v-if="filterToggle">mdi-chevron-up</v-icon>
                </div>
                <v-card
                        raised
                        v-if="filterToggle"
                >
                    <v-card-title>
                        <v-chip-group
                                active-class="primary--text"
                                column
                        >
                            <v-row justify="center">
                                <v-chip
                                        @click="updateTagFilter('ALL')"
                                        value="ALL"
                                >
                                    ALL
                                </v-chip>
                                <v-chip
                                        v-for="tag in about.tags" :key="tag"
                                        @click="updateTagFilter(tag)"
                                        v-ripple
                                >
                                    {{ tag }}
                                </v-chip>
                            </v-row>
                        </v-chip-group>
                    </v-card-title>
                    <v-card-text class="subtitle-1">
                        <p>Use tags to filter by project type or technology</p>
                        <p>Sorting by < {{ tagFilter }} ></p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col
                    lg="8"
                    v-for="project in filterProjects"
                    :key="project.id"
                    :cols=12
            >
                <v-card
                        elevation="24"
                        tile
                        class="mb-2"
                        :to="{ name: 'PortfolioView', params: { project: project.id }}"
                >
                    <v-card-text>yo yo suhhh dude</v-card-text>
<!--                    <v-img-->
<!--                            :src="project.images[0].image"-->
<!--                            class="white&#45;&#45;text align-end"-->
<!--                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.3)"-->
<!--                            max-height="600"-->
<!--                    >-->
                        <v-card-title v-text="project.name"/>
<!--                    </v-img>-->
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    // import db from '@/firebase/init'
    import axios from '@/axios'

    export default {
        name: "PortfolioList",
        components: {},
        data() {
            return {
                about: {
                    description: null,
                    tags: []
                },
                projects: [],
                tagFilter: 'ALL',
                filterToggle: false,
            }
        },
        methods: {
            updateTagFilter(tag) {
                this.tagFilter = tag
            }
        },
        computed: {
            filterProjects() {
                return this.projects
                // if (this.tagFilter === 'ALL') {
                //     return this.projects
                // } else {
                //     return this.projects.filter(project => {
                //         return project.tags.includes(this.tagFilter)
                //     })
                // }
            }
        },
        created() {
            axios.get('/projects/').then(resp => {
                this.projects = resp.data
            }).catch(err => alert(err))
        //     db.collection('projects-overview').doc('AkkQ9ueU8NnhKRWyLH7F').get()
        //         .then(doc => {
        //             let overview = doc.data()
        //             this.about.description = overview.description
        //             this.about.tags = overview.tags
        //         })
        //     db.collection('projects').get()
        //         .then(snapshot => {
        //             snapshot.forEach(doc => {
        //                 let project = doc.data()
        //                 project.id = doc.id
        //                 this.projects.push(project)
        //             })
        //         })
        }
    }
</script>

<style>
    .filter-toggle {
        cursor: pointer;
    }
</style>
