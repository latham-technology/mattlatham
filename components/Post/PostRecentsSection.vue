<template>
    <section class="section">
        <h1>Latest Posts</h1>

        <div class="flex flex-col gap-10">
            <ContentList :query="query" v-slot="{ list }">
                <PostCard v-for="post in list" :key="post._path" :post="post" />
            </ContentList>
        </div>
    </section>
</template>

<script setup>
const query = {
    sortBy: {
        published: 1,
    },
    limit: 3,
}
</script>
