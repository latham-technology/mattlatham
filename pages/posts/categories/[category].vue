<template>
    <div class="posts">
        <h1>{{ formattedCategoryName }} Posts</h1>

        <ContentList :query="query" v-slot="{ list }">
            <PostCard
                v-for="post in list"
                :key="post._path"
                :post="post"
                class="post"
            />
        </ContentList>
    </div>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const route = useRoute()

const formattedCategoryName = computed(() => {
    const { category } = route.params

    return category.charAt(0).toUpperCase() + category.slice(1)
})

const query: QueryBuilderParams = {
    path: '/posts',
    sort: [
        {
            published: 1,
        },
    ],
    where: [
        {
            category: {
                $contains: route.params.category,
            },
        },
    ],
    without: ['body'],
}
</script>

<!-- <script>
import hasFeatureEnabled from '@/middleware/hasFeatureEnabled'

export default {
  name: 'PostCategory',

  middleware: [hasFeatureEnabled('posts')],

  async asyncData({ $content, params }) {
    const posts = await $content('posts')
      .where({
        category: { $contains: params.category },
      })
      .sortBy('createdAt')
      .without(['body'])
      .fetch()

    return {
      posts,
    }
  },

  head() {
    return {
      title: `${this.formattedCategoryName} Posts`,
    }
  },

  computed: {
    formattedCategoryName() {
      const { category } = this.$route.params

      return category.charAt(0).toUpperCase() + category.slice(1)
    },
  },
}
</script> -->

<style lang="scss" scoped></style>
