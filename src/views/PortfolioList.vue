<template>
    <v-container class="portfolio-list">
        <v-row justify="center">
            <v-col lg="8">
                <h1>Here's some of <span class="first-header">my Work</span></h1>
                <p><span v-html="description"></span></p>

                <v-divider class="my-10"/>

<!--                    TODO can keep this if I want to hide/show filters -->
<!--                    TODO add v-if="filterToggle" in v-card-text below if keeping the toggle-->
<!--                <div class="filter-toggle mt-4" @click="filterToggle = !filterToggle">-->
<!--                    <p class="filter-button" v-if="!filterToggle"><strong>-->
<!--                        Show Filters-->
<!--                        <v-icon v-if="!filterToggle">mdi-chevron-down</v-icon>-->
<!--                    </strong></p>-->
<!--                    <p class="filter-button" v-if="filterToggle"><strong>-->
<!--                        Hide Filters-->
<!--                        <v-icon v-if="filterToggle">mdi-chevron-up</v-icon>-->
<!--                    </strong></p>-->
<!--                </div>-->

                <v-card-text>
                    <p>Use tags to filter by project type or technology</p>
                    <v-chip-group column>
                        <v-row justify="center" class="px-3">
                            <v-chip
                                v-for="tag in tags" :key="tag.id"
                                :color="tagFilter.includes(tag.name) ? 'primary' : 'null'"
                                @click="updateTagFilter(tag.name)"
                                v-ripple>
                                {{ tag.name }}
                            </v-chip>
                        </v-row>
                    </v-chip-group>
                </v-card-text>
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
                description: null,
                projects: [],
                tags: [],
                tagFilter: [],
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
                const exists = this.tagFilter.includes(tag)
                if (exists) {
                    const index = this.tagFilter.indexOf(tag)
                    this.tagFilter.splice(index, 1)
                } else {
                    this.tagFilter.push(tag)
                }
            },
            showFailedSnackbar(err) {
                this.snackbar['content'] = err
                this.snackbar['show'] = true
            }
        },
        computed: {
            filterProjects() {
                if (!this.tagFilter.length) {
                    return this.projects
                } else {
                    const filtered = []
                    this.projects.forEach(project => project.all_tags.forEach(tag => {
                        if (this.tagFilter.includes(tag) && !filtered.includes(project)) {
                            filtered.push(project)
                        }
                    }))
                    return filtered
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
