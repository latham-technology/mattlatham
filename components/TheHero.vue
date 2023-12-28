<template>
    <div class="hero">
        <NuxtImg
            class="hero__image"
            provider="cloudinary"
            src="/mattlatham/assets/photo.jpg"
            fit="fill"
            height="200"
            width="200"
            :modifiers="{ gravity: 'face' }"
            placeholder
        />

        <div class="hero__text-wrapper prose dark:prose-invert">
            <h1>👋 Hi, I'm Matt</h1>
            <p>
                I focus on building web applications that are fast, scalable,
                and maintainable.
            </p>
            <p>
                Also some DevOps and UNIX systems administration. Find me on
                <a target="_blank" href="https://twitter.com/jadget">Twitter</a
                >,
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/mattlatham/"
                    >LinkedIn</a
                >, or send me an
                <a target="_blank" href="mailto:hi@mattlatham.dev">email</a>.
            </p>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.hero {
    @apply flex flex-col items-center;
    padding: 5vh 0;

    &__image {
        @apply shadow-2xl rounded-full overflow-hidden;
    }

    &__text-wrapper {
        @apply mt-8;

        h1 {
            @apply text-center text-4xl;
        }

        p {
            @apply text-xl tracking-wide max-w-md;
        }
    }
}
</style>
