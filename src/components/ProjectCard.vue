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
    <button type="button" class="btn btn-primary">show element</button>
  </li>
    
</div>

</template>

<style lang="scss">



</style>