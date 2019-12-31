<template>
    <div class="portfolio-list container">
        <h1>Software Engineer Portfolio</h1>
        <p>{{ about.description }}</p>

        <div class="tagList">
            <li v-for="(tag, index) in about.tags" :key="index" class="tags">{{ tag }}</li>
        </div>

        <p class="my-4">Use tags to filter by project type or technology</p>
        <hr>

        <div class="card" v-for="project in projects" :key="project.id">
            <router-link :to="{ name: 'PortfolioView', params: {
                project_slug: project.slug,
                project_id: project.id,
                project_tags: project.tags }}"> <!--can maybe use this for filters?-->
                <img :src="project.images[0]">
            </router-link>
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
                // tagFilter: null,
            }
        },
        // computed: {
        //     filterProjects() {
        //         return this.projects.filter(project => {
        //             project.tags.forEach(tag => {
        //                 return tag.includes(this.tagFilter)
        //             })
        //         })
        //     }
        // },
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
    .tags {
        display: inline-block;
        white-space: pre-wrap;
        border: solid black 1px;
        margin: 4px;
        padding: 4px;
    }
</style>
