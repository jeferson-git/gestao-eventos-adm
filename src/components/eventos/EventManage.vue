<template>
  <div class="flex justify-around name-team">
    <div class="">
        <h1 class="font-semibold text-lg">Time A</h1>
    </div>
    <div class="font-semibold text-lg">
        <h1>Time B</h1>
    </div>

  </div>
  <div class="w-full overflow-auto flex items-start">

    <div class="relative mr-4">
      <div class="w-80">
      <img src="../../assets/campo-futebol.jpg" alt="" />
      <!-- goleiro -->
      <div class="w-6 h-6 border rounded-full bg-white mr-4 absolute goalkeeper text-center text-black font-bold"> 1</div>
      <!-- zagueiros -->
      <div class="w-6 h-6 border rounded-full bg-white mr-4 absolute first-back text-center text-black font-bold"> 4</div>
      <div class="w-6 h-6 border rounded-full bg-white mr-4 absolute second-back text-center text-black font-bold"> 3</div>
      <div class="w-6 h-6 border rounded-full bg-white mr-4 absolute third-back text-center text-black font-bold"> 2</div>
      <div class="w-6 h-6 border rounded-full bg-white mr-4 absolute fourth-back text-center text-black font-bold"> 6</div>
      <!-- meio-campo  -->
      <div class="w-6 h-6 border rounded-full bg-white mr-4 absolute first-midfield text-center text-black font-bold"> 5</div>
      <div class="w-6 h-6 border rounded-full bg-white mr-4 absolute second-midfield text-center text-black font-bold"> 7</div>
      <div class="w-6 h-6 border rounded-full bg-white mr-4 absolute third-midfield text-center text-black font-bold"> 8</div>
      <div class="w-6 h-6 border rounded-full bg-white mr-4 absolute fourth-midfield text-center text-black font-bold"> 10</div>

      <!-- atacantes  -->
       <div class="w-6 h-6 border rounded-full bg-white mr-4 absolute first-forward text-center text-black font-bold"> 11</div>
      <div class="w-6 h-6 border rounded-full bg-white mr-4 absolute second-forward text-center text-black font-bold"> 9</div>
      </div>
    </div>


    <!-- <img :src="require(`@/assets/campo-futebol.jpg`)" alt=""> -->
    <div class=" relative ">
      <div class="w-80">
        <img src="../../assets/campo-futebol.jpg" alt="" />
        <!-- goleiro -->
        <div class="w-6 h-6 border rounded-full bg-white mr-4 absolute goalkeeper text-center text-black font-bold"> 1</div>
        <!-- zagueiros -->
        <div class="w-6 h-6 border rounded-full bg-white mr-4 absolute first-back text-center text-black font-bold"> 4</div>
        <div class="w-6 h-6 border rounded-full bg-white mr-4 absolute second-back text-center text-black font-bold"> 3</div>
        <div class="w-6 h-6 border rounded-full bg-white mr-4 absolute third-back text-center text-black font-bold"> 2</div>
        <div class="w-6 h-6 border rounded-full bg-white mr-4 absolute fourth-back text-center text-black font-bold"> 6</div>
        <!-- meio-campo  -->
        <div class="w-6 h-6 border rounded-full bg-white mr-4 absolute first-midfield text-center text-black font-bold"> 5</div>
        <div class="w-6 h-6 border rounded-full bg-white mr-4 absolute second-midfield text-center text-black font-bold"> 7</div>
        <div class="w-6 h-6 border rounded-full bg-white mr-4 absolute third-midfield text-center text-black font-bold"> 8</div>
        <div class="w-6 h-6 border rounded-full bg-white mr-4 absolute fourth-midfield text-center text-black font-bold"> 10</div>

        <!-- atacantes  -->
        <div class="w-6 h-6 border rounded-full bg-white mr-4 absolute first-forward text-center text-black font-bold"> 11</div>
        <div class="w-6 h-6 border rounded-full bg-white mr-4 absolute second-forward text-center text-black font-bold"> 9</div>
      </div>
    </div>

    
    <div class="p-4 space-x-2 flex">
        <input-form :configButton="configButtonPlayer"></input-form>
        <input-form :configButton="configButtonPosition"></input-form>
        <input-form :configButton="configButtonNumber"></input-form>
    </div>
    
  </div>



  
  
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import InputForm from "../shared/InputForm.vue"

export default defineComponent({
  components: { InputForm },
  setup() {
    const configButtonPlayer = computed(() => {
      const base = [{
        labelInput: "Jogador :",
        placeholderButton: "Nome do Jogador",
        typeButton: "text",
        idButton: "player",
        nameButton: "player",
      }]
      return base
    })

    const configButtonPosition = computed(() => {
      const base = [{
        labelInput: "Posição :",
        placeholderButton: "Posição do jogador",
        typeButton: "text",
        idButton: "position",
        nameButton: "position",
      }]
      
      return base
    })

     const configButtonNumber = computed(() => {
      const base = [{
        labelInput: "Número :",
        placeholderButton: "Númerod da camisa",
        typeButton: "text",
        idButton: "number",
        nameButton: "number",
      }]
      
      return base
    })

    return { configButtonPlayer, configButtonPosition, configButtonNumber }
  },
});
</script>

<style>

.name-team {
  width: 658px;
}

.goalkeeper {
  top: 25px;
  left: 145px;
}

.first-back {
  top: 60px;
  left: 98px; 
}

.second-back {
  top: 60px;
  left: 195px;
}

.third-back {
  top: 100px;
  left: 30px;
}

.fourth-back {
  top: 100px;
  left: 265px;
}

.first-midfield {
  top: 146px;
  left: 110px;
}

.second-midfield {
  top: 146px;
  left: 180px;
}

.third-midfield {
  top: 230px;
  left: 50px
}

.fourth-midfield {
  top: 230px;
  left: 245px
}

.first-forward {
  top: 310px;
  left: 90px
}

.second-forward {
  top: 310px;
  left: 200px
}
</style>
