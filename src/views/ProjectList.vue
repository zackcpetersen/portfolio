<template>
    <v-container class="project-list">
        <v-row justify="center">
            <v-col :cols="12">
                <h1>Here's some of my <span class="primary--text">Projects</span></h1>
                <p><span v-html="description"></span></p>
                <v-divider class="my-10"/>
                <v-card-text>
                    <p>Select tags below to filter by technology</p>
                    <p>Filtering by: {{ tagFilter }}</p>
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
            <list-content :iterable=filterProjects viewPage="ProjectView"></list-content>
        </v-row>
        <snackbar :snackbar="snackbar"></snackbar>
    </v-container>
</template>

<script>
import axios from '@/axios'
import snackbar from '@/components/snackbar'
import listContent from '@/components/listContent'

export default {
    name: "ProjectList",
    components: {
        'list-content': listContent,
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
