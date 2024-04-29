<script>
export default{
      name:"ProjectCard",

      props:{
        comName: String,
        comImage: String
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