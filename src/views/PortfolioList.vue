<template>
    <div class="portfolio-list container">
        <h1>Here's Some Of My Work</h1>
        <p>{{ about.description }}</p>

        <hr>

        <div class="filter-toggle" @click="filterToggle = !filterToggle">
            <p class="filter-button" v-if="!filterToggle"><strong>Show Filters</strong></p>
            <p class="filter-button" v-if="filterToggle"><strong>Hide Filters</strong></p>
            <i class="fas fa-angle-down arrow"></i>
        </div>
        <div class="tagList" v-if="filterToggle">
            <input class="tags" type="text" placeholder="ALL" value="ALL" @click="updateTagFilter('ALL')" readonly/>
            <input v-for="(tag, index) in about.tags"
                   :key="index"
                   class="tags"
                   type="text"
                   :value="tag"
                   :placeholder="tag"
                   @click="updateTagFilter(tag)"
                   readonly
            />
            <p class="m-2">Use tags to filter by project type or technology</p>
        </div>
        <hr>

        <div class="projects">
            <div class="project" v-for="project in filterProjects" :key="project.id">
                <div class="card my-2">
                    <router-link :to="{ name: 'PortfolioView', params: {
                            project_slug: project.slug,
                            project_id: project.id }}">
                        <img :src="project.images[0]">
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import db from '@/firebase/init'

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
            },
        },
        computed: {
            filterProjects() {
                if (this.tagFilter === 'ALL') {
                    return this.projects
                } else {
                    return this.projects.filter(project => {
                        return project.tags.includes(this.tagFilter)
                    })
                }
            }
        },
        created() {
            db.collection('projects-overview').doc('AkkQ9ueU8NnhKRWyLH7F').get()
                .then(doc => {
                    let overview = doc.data()
                    this.about.description = overview.description
                    this.about.tags = overview.tags
                })
            db.collection('projects').get()
                .then(snapshot => {
                    snapshot.forEach(doc => {
                        let project = doc.data()
                        project.id = doc.id
                        this.projects.push(project)
                    })
                })
        }
    }
</script>

<style>
    /*tags*/
    input.tags {
        border: 1px black solid;
        border-radius: 1em;
        margin: 4px;
        padding: 4px 0;
        font-size: .9em;
        text-align: center;
    }

    .tagList {
        border: 1px grey solid;
        border-radius: 1em;
        padding: 1em 0;
    }

    .tagList ::placeholder {
        color: black
    }

    .project {
        display: inline-block;
    }

    .project .card, img {
        /*border-radius: 2.5em;*/
        border: none;
    }

    .project img {
        max-width: 95%;
        height: auto;
        padding: 0;
        border: 1px solid black;
    }

    .filter-toggle {
        cursor: pointer;
    }
    .arrow {
        font-size: 2em;
    }
    .filter-button {
        padding: 1px;
        margin: 1px;
    }

    @media only screen and (min-width: 768px) {
        .project img {
        }
    }
</style>
