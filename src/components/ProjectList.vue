<script>
import ProjectCard from './ProjectCard.vue';

export default {
    name: 'ProjectCard',

    components: {
        ProjectCard,
    },

    data() {
        return {
            projects: this.projects,
        }
    },

}
</script>

<template>
    <div>
        <ul>
            <ProjectCard v-for="project in projects" :card="project">

            </ProjectCard>
        </ul>
    </div>
</template>

<style lang="scss">

</style>