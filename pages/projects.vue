<template>
    <div>
        <h1 class="lg:text-4xl">Projects</h1>

        <ContentList
            v-slot="{ list }"
            :query="{
                path: 'projects',
                sort: [
                    {
                        published: 1,
                    },
                ],
            }"
        >
            <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
            >
                <ProjectCard
                    v-for="project in list"
                    :project="project"
                    :key="project._path"
                />
            </div>
        </ContentList>
    </div>
</template>

<script setup>
useHead({
    title: 'Projects',
})
</script>
