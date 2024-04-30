
<script>
// chri
import axios from 'axios';

// components
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: "HomePage",

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

<div class="container py-3">

    
    
    <h1 class="text-center mb-2">Visualizza i nostri progetti</h1>
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


</div>

</template>

<style lang="scss">
.container {
    ul {
       display: flex;
       flex-wrap: wrap;
       gap: 20px;
    }
}
</style>
