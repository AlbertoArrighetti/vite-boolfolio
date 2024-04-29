<script>
// chri
import axios from 'axios';

// components
import ProjectCard from './components/ProjectCard.vue';

export default {

    data() {

        return {

            projects: [],

            baseApiUrl: 'http://127.0.0.1:8000/api',

        }

    },

    mounted() {
        
        axios.get(this.baseApiUrl + '/projects').then(res => {

            this.projects = res.data.results;

        })

    },

    methods: {
        
    },

    components: {
        ProjectCard,
    },

}

</script>

<template>
    <h1>Hello</h1>
    <!-- Alan Item -->

    <div>
        <ul>

            <ProjectCard 
                v-for="project in projects" 
                :card="project"
            >

            </ProjectCard>
            
        </ul>
    </div>

</template>

<style lang="scss">

</style>
