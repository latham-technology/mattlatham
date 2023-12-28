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
                I'm a web applications developer focused on building user
                friendly tools that are fast, flexible, scalable, and
                maintainable. I also do some DevOps and Unix systems
                administration.
            </p>
            <p>
                Find me on
                <a href="https://twitter.com/jadget">Twitter</a>,
                <a href="https://www.linkedin.com/in/mattlatham/">LinkedIn</a>,
                or send me an <a href="mailto:matt@mattlatham.dev">email</a>.
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
