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
        <!--Indico dove in uno specifico figlio verranno usati le variabili props-->
        <img  :src="comImage" alt="">
        <span>{{ comName }}</span>



 
      
</div>

</template>

<style lang="scss">



</style>