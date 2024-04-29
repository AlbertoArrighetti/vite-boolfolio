<script>
// chri
import axios from 'axios';

// components
import ProjectList from './components/ProjectList.vue';

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
        ProjectList,
    },

}

</script>

<template>
    <h1>Hello</h1>
    <!-- Alan Item -->

    <!-- content -->
    <ProjectList></ProjectList>

</template>

<style lang="scss">

</style>
