import { defineEventHandler } from 'h3'
import type { ParsedContent } from '@nuxt/content'
import { serverQueryContent } from '#content/server'
import { defineSitemapEventHandler, asSitemapUrl } from '#imports'

export default defineSitemapEventHandler(async (event) => {
    const contentList = (await serverQueryContent(
        event,
    ).find()) as ParsedContent[]

    console.log(contentList)

    return contentList
        .filter((content) => content._path.startsWith('/post'))
        .map((content) =>
            asSitemapUrl({
                loc: content._path,
                lastmod: content.updatedAt,
            }),
        )
})
