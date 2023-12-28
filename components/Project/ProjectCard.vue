<template>
    <div>
        <a :href="props.project._path" target="_blank">
            <div v-if="props.project.image" class="w-[309px] h-[190px]">
                <NuxtImg
                    width="309"
                    height="190"
                    sizes="sm:100vw md:309px"
                    placeholder
                    class="w-full h-full"
                    :src="props.project.image.src"
                    :provider="props.project.image.provider"
                />
            </div>
            <h3 class="my-2">{{ props.project.title }}</h3>
        </a>
        <div class="flex items-center gap-2">
            <Tag v-for="tag in props.project.tags" :key="tag" :text="tag" />
        </div>

        <ContentRendererMarkdown class="mt-2" :value="$props.project" />
    </div>
</template>

<script setup lang="ts">
import type { Project } from '@/types'

const props = defineProps<{
    project: Project
}>()
</script>
