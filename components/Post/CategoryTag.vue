<template>
    <nuxt-link
        :to="`/posts/categories/${$utilities.kebabCase(category)}`"
        class="post-category-tag"
    >
        <Tag>{{ category }}</Tag>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        category: {
            type: [String, Array],
            required: true,
        },
    },
}
</script>

<style lang="scss" scoped></style>
