<template>
    <div class="portfolio-list container">
        <h1>Software Engineer Portfolio</h1>
        <p>{{ about.description }}</p>

        <div class="tagList">
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
        </div>

        <p class="mt-4">Use tags to filter by project type or technology</p>
        <p>< Sorting by {{ tagFilter }} ></p>
        <hr>

        <div class="row">
            <div class="projects" v-for="project in filterProjects" :key="project.id">
                <div class="col">
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
            }
        },
        methods: {
            updateTagFilter(tag) {
                this.tagFilter = tag
            }
        },
        computed: {
            filterProjects() {
                if (this.tagFilter === 'ALL') {
                    return this.projects
                }
                else {
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
        border-radius: 8px;
        margin: 4px;
        padding: 4px 0;
        font-size: .9em;
        text-align: center;
    }
    .tagList ::placeholder {
        color: black
    }

    /*project cards*/
    .row {
        justify-content: center;
    }
    .projects .card, img {
        border-radius: 2.5em;
        border: none;
    }
    .projects img {
        max-width: 95%;
        padding: 0;
    }
    @media only screen and (min-width: 768px) {
        .projects img {
            max-width: 100%;
        }
        .row {
            margin-bottom: 0px;
        }
    }
</style>
