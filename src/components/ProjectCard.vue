<script>
export default{
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
       
<ul>
  <li v-for="card in cards">
    {{ card.title }}
  </li>
</ul>
    
</div>

</template>

<style lang="scss">



</style>