<template>
    <div>
        <section class="section flex flex-wrap items-start gap-10">
            <div class="flex flex-wrap items-center gap-5">
                <NuxtImg
                    class="shadow-2xl rounded-full overflow-hidden flex-shrink-0"
                    provider="cloudinary"
                    src="/mattlatham/assets/photo.jpg"
                    fit="fill"
                    height="200"
                    width="200"
                    :modifiers="{ gravity: 'face' }"
                    placeholder
                />

                <div class="prose dark:prose-invert">
                    <h1>Hi, I'm Matt 👋</h1>
                    <p>
                        I'm a web applications developer focused on building
                        user friendly tools that are fast, flexible, scalable,
                        and maintainable. I also do some DevOps and Unix systems
                        administration.
                    </p>
                    <p>
                        Find me on
                        <a href="https://twitter.com/jadget">Twitter</a>,
                        <a href="https://www.linkedin.com/in/mattlatham/"
                            >LinkedIn</a
                        >, or send me an
                        <a href="mailto:matt@mattlatham.dev">email</a>.
                    </p>
                </div>
            </div>

            <PostRecentsSection class="max-w-lg" />
        </section>
    </div>
</template>

<script setup>
useHead({
    title: 'Hello',
})
</script>

<style lang="scss" scoped></style>
