<template>
    <article class="post-card">
        <nuxt-link :to="post._path">
            <header class="content-header">
                <h2 class="content-title">{{ post.title }}</h2>
            </header>

            <p class="content-description">
                {{ post.description }}
            </p>
        </nuxt-link>

        <footer class="content-meta">
            <time :datetime="post.published">{{ formattedPublishedTime }}</time>
            <span class="content-meta-separator">•</span>
            {{ post.readingTime.text }}
            <span class="content-meta-separator">•</span>

            <div class="content-tags">
                <template v-if="Array.isArray(post.category)">
                    <PostCategoryTag
                        v-for="category in post.category"
                        :key="category"
                        :category="category"
                    />
                </template>
                <PostCategoryTag v-else :category="post.category" />
            </div>
        </footer>
    </article>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true,
        },

        large: {
            type: Boolean,
            default: false,
        },

        noImage: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        formattedPublishedTime() {
            return this.$dayjs(this.post.published).format('MMMM D, YYYY')
        },
    },
}
</script>

<style lang="scss" scoped>
.post-card {
    @apply flex flex-col overflow-hidden bg-cover;

    &.large {
        @screen md {
            flex: 1 1 100%;
            min-height: 280px;
            @apply flex-row;
        }
    }
}

.image-link {
    @apply relative block overflow-hidden rounded;

    .large & {
        @screen md {
            @apply flex-auto;
            min-height: 380px;
        }
    }

    img {
        @apply w-full h-52;
        @apply object-cover;
        @apply bg-gray-200 dark:bg-gray-700;
        @apply dark:opacity-90;

        .large & {
            @screen md {
                @apply absolute h-full;
            }
        }
    }
}

.content {
    @apply relative;
    @apply flex flex-col flex-grow;
    @apply text-gray-800 dark:text-gray-200;

    .large & {
        @screen md {
            flex: 0 1 361px;
            @apply justify-center pl-10;
        }
    }

    &-header {
    }

    &-tags {
        @apply flex flex-wrap items-start gap-1;
    }

    &-title {
        @apply inline-block;

        .large & {
            @apply text-2xl;
        }
    }

    &-description {
        @apply text-gray-600 dark:text-gray-400;
        @apply mb-2;

        :deep(& .large) {
            @apply mb-4 text-lg;
        }
    }

    &-meta {
        @apply flex items-center mt-2;
        @apply text-xs;

        &-separator {
            @apply inline-block mx-1 opacity-60;
        }
    }
}
</style>
