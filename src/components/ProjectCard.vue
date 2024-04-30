<script>
export default {
      name:"ProjectCard",

      props:{
        card: Object,
      },

    data(){
        return{

        }
    }
}
</script>

<template>

<div class="">
       
  <li class="py-3">
     <span>{{ card.title }}</span>
     
   <router-link :to="{name: 'single-post', params: {id: card.id}}"  class="btn btn-outline-info btn-outline">Mostra</router-link>
  </li>
    
</div>

</template>

<style lang="scss">



</style>