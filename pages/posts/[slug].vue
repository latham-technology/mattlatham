<template>
    <div>
        <ContentDoc>
            <template #default="{ doc: post }">
                <article class="post prose dark:prose-invert">
                    <header class="post__header">
                        <h1 class="post__title">{{ post.title }}</h1>

                        <div class="post__meta">
                            <time :datetime="post.published">{{
                                $dayjs(post.published).format('MMMM DD, YYYY')
                            }}</time
                            >•
                            <span>{{ post.readingTime.text }}</span>

                            <div class="post__tags">
                                <template v-if="Array.isArray(post.category)">
                                    <PostCategoryTag
                                        v-for="category in post.category"
                                        :key="category"
                                        :category="category"
                                    />
                                </template>
                                <PostCategoryTag
                                    v-else
                                    :category="post.category"
                                />
                            </div>
                        </div>
                    </header>

                    <ContentRenderer :value="post" class="my-10" />

                    <div class="flex items-center flex-wrap gap-8 not-prose">
                        <NuxtLink
                            v-if="prev"
                            :to="prev._path"
                            :key="prev._path"
                            class="mr-auto flex gap-1 items-center"
                        >
                            <span>&laquo;</span>
                            <span>{{ post.title }}</span>
                        </NuxtLink>
                        <NuxtLink
                            v-if="next"
                            :to="next._path"
                            :key="next._path"
                            class="ml-auto flex gap-1 items-center"
                        >
                            <span>{{ next.title }}</span>
                            <span>&raquo;</span>
                        </NuxtLink>
                    </div>
                </article>
            </template>

            <template #not-found>
                <div class="flex flex-col h-full justify-center items-center">
                    <h1>404 :(</h1>
                    <div class="max-w-sm">
                        <NuxtImg src="/memes/what-huh.gif" alt="" />
                    </div>

                    <NuxtLink class="mt-5" to="/posts">View all posts</NuxtLink>
                </div>
            </template>
        </ContentDoc>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()

const [prev, next] = await queryContent('posts')
    .only(['_path', 'title'])
    .sort({ published: 1 })
    .findSurround(route.path)
</script>

<style lang="scss" scoped>
.post {
    @apply mx-auto text-sm md:text-base;

    &__meta {
        @apply flex items-center gap-2;
        @apply text-xs text-brand-primary-dark;
    }

    &__tags {
        @apply ml-auto flex gap-1;
    }
}

.other-posts {
    @apply flex items-center gap-4;
    @apply mt-8;

    &__link {
        @apply flex flex-col;
        @apply max-w-xs;

        &--prev {
            @apply mr-auto;
            @apply text-right;
        }

        &--next {
            @apply ml-auto;
        }
    }
}
</style>
