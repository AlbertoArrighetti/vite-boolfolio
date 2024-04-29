<script>
import ProjectCard from './ProjectCard.vue';

export default {
    name: 'ProjectCard',

    components: {
        ProjectCard,
    },
}
</script>

<template>
    <div>
        <ul>
            <ProjectCard v-for="project in projects">

            </ProjectCard>
        </ul>
    </div>
</template>

<style lang="scss">

</style>