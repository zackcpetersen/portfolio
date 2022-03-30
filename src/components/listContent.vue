<template>
    <v-row justify="center">
        <v-col
            v-for="item in iterable"
            :key="item.id"
            :cols="$vuetify.breakpoint.mobile ? 12 : 6"
        >
            <v-card
                elevation="24"
                tile
                class="mb-2"
                :to="{ name: viewPage, params: { slug: item.slug }}"
            >
                <v-img
                    :src="getImage(item)"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,1)"
                    max-height="500"
                    :aspect-ratio="4/3"
                >
                    <v-card-title v-text="item.name"/>
                </v-img>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "listContent",
    methods: {
        // some items have a fk relationship to images, some only have one
        getImage(item) {
            if (item.images) {
                const featuredImg = item.images.filter(img => {return img.featured})
                return featuredImg.length ? featuredImg[0].image : item.images[0].image
            }
            return item.image
        }
    },
    props: {
        iterable: Array,
        viewPage: String,
    }
}
</script>
