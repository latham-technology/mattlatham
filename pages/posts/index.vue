<template>
    <div>
        <h1 class="lg:text-4xl">Posts</h1>

        <ContentList path="/posts" :query="query" v-slot="{ list }">
            <PostCard
                v-for="post in list"
                :key="post._path"
                :post="post"
                class="post"
            />
        </ContentList>
    </div>
</template>

<script setup>
useHead({
    title: 'Posts',
})

const query = {
    sort: {
        published: 1,
    },
}
</script>

<style lang="scss" scoped>
.posts {
    @apply flex flex-col;
}

.post {
    @apply mt-8;
}
</style>
