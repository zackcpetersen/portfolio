<template>
    <v-container class="portfolio-list">
        <v-row justify="center">
            <v-col lg="8">
                <h1>Here's some of <span class="first-header">my Work</span></h1>
                <p>{{ description }}</p>

                <v-divider class="my-10" />

                <div class="filter-toggle mt-4" @click="filterToggle = !filterToggle">
                    <p class="filter-button" v-if="!filterToggle"><strong>Show Filters</strong></p>
                    <v-icon v-if="!filterToggle">mdi-chevron-down</v-icon>
                    <p class="filter-button" v-if="filterToggle"><strong>Hide Filters</strong></p>
                    <v-icon v-if="filterToggle">mdi-chevron-up</v-icon>
                </div>
                <v-card raised v-if="filterToggle">
                    <v-card-title>
                        <v-chip-group
                                active-class="primary--text"
                                column>
                            <v-row justify="center" class="px-3">
                                <v-chip
                                        @click="updateTagFilter('ALL')"
                                        value="ALL"
                                >
                                    ALL
                                </v-chip>
                                <v-chip
                                        v-for="tag in tags" :key="tag.id"
                                        @click="updateTagFilter(tag.name)"
                                        v-ripple
                                >
                                    {{ tag.name }}
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
                    <v-img
                            :src="project.images[0].image"
                            class="white--text align-end"
                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.3)"
                            max-height="600"
                    >
                        <v-card-title v-text="project.name"/>
                    </v-img>
                </v-card>
            </v-col>
        </v-row>
        <snackbar :snackbar="snackbar"></snackbar>
    </v-container>
</template>

<script>
    import axios from '@/axios'
    import snackbar from '@/components/snackbar'

    export default {
        name: "PortfolioList",
        components: {
            'snackbar': snackbar
        },
        data() {
            return {
                // TODO add project overview description
                description: null,
                projects: [],
                tags: [],
                tagFilter: 'ALL',
                filterToggle: false,
                snackbar: {
                    color: 'red',
                    icon: 'mdi-thumb-down',
                    show: false
                }
            }
        },
        methods: {
            updateTagFilter(tag) {
                this.tagFilter = tag
            },
            showFailedSnackbar(err) {
                this.snackbar['content'] = err
                this.snackbar['show'] = true
            }
        },
        computed: {
            filterProjects() {
                if (this.tagFilter === 'ALL') {
                    return this.projects
                } else {
                    return this.projects.filter(project => {
                        return project.all_tags.includes(this.tagFilter)
                    })
                }
            }
        },
        created() {
            axios.get('/projects/').then(resp => {
                this.projects = resp.data
            }).catch(err => this.showFailedSnackbar(err))
            axios.get('/tags/').then(resp => {
                this.tags = resp.data
            }).catch(err => this.showFailedSnackbar(err))
        }
    }
</script>

<style>
    .filter-toggle {
        cursor: pointer;
    }
</style>
