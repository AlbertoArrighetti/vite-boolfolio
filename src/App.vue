<script>
import AppFooter from './components/AppFooter.vue';

import AppHeader from './components/AppHeader.vue'

export default {

    data() {

        return {
         

        }

    },

    mounted() {

    },

    methods: {
        
    },

    components: {
      
        AppFooter,
        AppHeader,
    },

}

</script>

<template>

    <AppHeader></AppHeader>

    <div class="container">
        <router-view></router-view>
        <AppFooter></AppFooter>
    </div>
    
</template>

<style lang="scss">

</style>
