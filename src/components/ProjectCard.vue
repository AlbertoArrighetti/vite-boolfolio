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
       
  <li>
    {{ card.title }}
  </li>
    
</div>

</template>

<style lang="scss">



</style>