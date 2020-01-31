<template>
    <v-container v-if="project" class="portfolio-view">
        <div class="title">
            <h1 class="font-italic font-weight-bold display-1">{{ project.name }}</h1>
        </div>

        <v-row justify="center">
            <v-col :xl="9">
                <v-btn v-if="project.liveUrl" :href="project.liveUrl" color="primary" block class="mb-2">
                    Visit Website
                </v-btn>
                <v-card elevation="8">
                    <v-carousel
                            cycle
                            show-arrows-on-hover
                            height="auto"
                            progress
                    >
                        <v-carousel-item
                                v-for="(img, i) in project.images"
                                :key="i"
                                :src="img"
                        >
                        </v-carousel-item>
                    </v-carousel>
                </v-card>
            </v-col>
        </v-row>

        <div class="about mt-10">
            <h2>About This Project</h2>
            <p>{{ project.description }}</p>
            <v-divider class="my-10"/>
        </div>

        <div class="techSheet">
            <h2>Technical Sheet</h2>
            <p>Technology I used to create this project</p>
            <v-expansion-panels popout flat class="mt-5">
                <v-expansion-panel
                        v-for="(tech, index) in project.technology"
                        :key="index"
                >
                    <v-expansion-panel-header>{{ tech }}</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>

        <v-divider class="my-10" />

        <div class="resourceList">
            <p v-if="project.liveUrl" class="my-1">
                See this project live at <a :href="project.liveUrl">{{ project.liveUrl.split("www.")[1] }}</a>
            </p>
            <p v-if="project.githubUrl">
                See project source at <a :href="project.githubUrl">Github</a>
            </p>
        </div>
    </v-container>
</template>

<script>
    import db from '@/firebase/init'

    export default {
        name: "PortfolioView",
        data() {
            return {
                project: null,
                feedback: null,
            }
        },
        created() {
            let ref = db.collection('projects').where(
                'slug',
                '==',
                this.$route.params.project_slug)
            ref.get().then(snapshot => {
                snapshot.forEach(doc => {
                    this.project = doc.data()
                })
            })
        }
    }
</script>

<style>
    div.resourceList {
        list-style-type: none;
        text-align: left;
    }
</style>
