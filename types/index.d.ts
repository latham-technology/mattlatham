import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export interface Post extends ParsedContent {}
export interface Project extends ParsedContent {
    image?: {
        provider: string
        src: string
    }
    tags?: string[]
    url: string
}
