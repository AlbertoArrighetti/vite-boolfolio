<script>

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
        AppHeader,
    },

}

</script>

<template>

    <AppHeader></AppHeader>

    <div class="container">
        <router-view></router-view>
    </div>
</template>

<style lang="scss">

</style>
