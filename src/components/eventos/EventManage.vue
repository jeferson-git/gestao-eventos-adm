<template>
  <div class="w-full md:flex">
    <div class="xl:flex m-auto">
      <!-- Visao do campo -->
      <div class="sm:flex">
        <!-- Time A  -->
        <div class="sm:mr-4">
          <h1 class="text-center font-semibold text-lg md:text-center">
            Time A
          </h1>
          <div class="w-80 relative m-auto">
            <img src="../../assets/campo-futebol.jpg" alt="" />
            <!-- goleiro -->
            <div
              class="
                w-6
                h-6
                border
                rounded-full
                bg-white
                mr-4
                absolute
                goalkeeper
                text-center text-black
                font-bold
              "
            >
              1
            </div>
            <!-- zagueiros -->
            <div
              class="
                w-6
                h-6
                border
                rounded-full
                bg-white
                mr-4
                absolute
                first-back
                text-center text-black
                font-bold
              "
            >
              4
            </div>
            <div
              class="
                w-6
                h-6
                border
                rounded-full
                bg-white
                mr-4
                absolute
                second-back
                text-center text-black
                font-bold
              "
            >
              3
            </div>
            <div
              class="
                w-6
                h-6
                border
                rounded-full
                bg-white
                mr-4
                absolute
                third-back
                text-center text-black
                font-bold
              "
            >
              2
            </div>
            <div
              class="
                w-6
                h-6
                border
                rounded-full
                bg-white
                mr-4
                absolute
                fourth-back
                text-center text-black
                font-bold
              "
            >
              6
            </div>
            <!-- meio-campo  -->
            <div
              class="
                w-6
                h-6
                border
                rounded-full
                bg-white
                mr-4
                absolute
                first-midfield
                text-center text-black
                font-bold
              "
            >
              5
            </div>
            <div
              class="
                w-6
                h-6
                border
                rounded-full
                bg-white
                mr-4
                absolute
                second-midfield
                text-center text-black
                font-bold
              "
            >
              7
            </div>
            <div
              class="
                w-6
                h-6
                border
                rounded-full
                bg-white
                mr-4
                absolute
                third-midfield
                text-center text-black
                font-bold
              "
            >
              8
            </div>
            <div
              class="
                w-6
                h-6
                border
                rounded-full
                bg-white
                mr-4
                absolute
                fourth-midfield
                text-center text-black
                font-bold
              "
            >
              10
            </div>

            <!-- atacantes  -->
            <div
              class="
                w-6
                h-6
                border
                rounded-full
                bg-white
                mr-4
                absolute
                first-forward
                text-center text-black
                font-bold
              "
            >
              11
            </div>
            <div
              class="
                w-6
                h-6
                border
                rounded-full
                bg-white
                mr-4
                absolute
                second-forward
                text-center text-black
                font-bold
              "
            >
              9
            </div>
          </div>
        </div>
        <!-- Time B  -->
        <div class="">
          <h1 class="font-semibold text-center text-lg md:text-center">
            Time B
          </h1>
          <div class="w-80 relative m-auto">
            <img src="../../assets/campo-futebol.jpg" alt="" />
            <!-- goleiro -->
            <div
              class="
                w-6
                h-6
                border
                rounded-full
                bg-white
                mr-4
                absolute
                goalkeeper
                text-center text-black
                font-bold
              "
            >
              1
            </div>
            <!-- zagueiros -->
            <div
              class="
                w-6
                h-6
                border
                rounded-full
                bg-white
                mr-4
                absolute
                first-back
                text-center text-black
                font-bold
              "
            >
              4
            </div>
            <div
              class="
                w-6
                h-6
                border
                rounded-full
                bg-white
                mr-4
                absolute
                second-back
                text-center text-black
                font-bold
              "
            >
              3
            </div>
            <div
              class="
                w-6
                h-6
                border
                rounded-full
                bg-white
                mr-4
                absolute
                third-back
                text-center text-black
                font-bold
              "
            >
              2
            </div>
            <div
              class="
                w-6
                h-6
                border
                rounded-full
                bg-white
                mr-4
                absolute
                fourth-back
                text-center text-black
                font-bold
              "
            >
              6
            </div>
            <!-- meio-campo  -->
            <div
              class="
                w-6
                h-6
                border
                rounded-full
                bg-white
                mr-4
                absolute
                first-midfield
                text-center text-black
                font-bold
              "
            >
              5
            </div>
            <div
              class="
                w-6
                h-6
                border
                rounded-full
                bg-white
                mr-4
                absolute
                second-midfield
                text-center text-black
                font-bold
              "
            >
              7
            </div>
            <div
              class="
                w-6
                h-6
                border
                rounded-full
                bg-white
                mr-4
                absolute
                third-midfield
                text-center text-black
                font-bold
              "
            >
              8
            </div>
            <div
              class="
                w-6
                h-6
                border
                rounded-full
                bg-white
                mr-4
                absolute
                fourth-midfield
                text-center text-black
                font-bold
              "
            >
              10
            </div>

            <!-- atacantes  -->
            <div
              class="
                w-6
                h-6
                border
                rounded-full
                bg-white
                mr-4
                absolute
                first-forward
                text-center text-black
                font-bold
              "
            >
              11
            </div>
            <div
              class="
                w-6
                h-6
                border
                rounded-full
                bg-white
                mr-4
                absolute
                second-forward
                text-center text-black
                font-bold
              "
            >
              9
            </div>
          </div>
        </div>
      </div>

      <!-- Cadastro de jogadores  -->
      <div class="w-full md:ml-4 mt-4">
        <header-message :message="message" />
        <div class="xl:flex w-full block xl:space-x-2 space-y-2">
          <input-form :configButton="configButtonPlayer"></input-form>
          <input-form :configButton="configButtonPosition"></input-form>
          <input-form :configButton="configButtonNumber"></input-form>
          <div class="md:float-right">
            <icon-button-manage>
              <icon-plus></icon-plus>
            </icon-button-manage>
          </div>
        </div>

        <!-- Lista de jogadores Cadastrados-->
        <div class="mt-4 overflow-auto">
          <player-table-manage />
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import InputForm from "../shared/InputForm.vue";
import HeaderMessage from "../shared/HeaderMessage.vue";
import IconButtonManage from "./components/IconButtonManage.vue";

import PlayerTableManage from "./components/PlayerTableManage.vue";

import IconPlus from "../icons/IconPlus.vue";
import IconBase from "../icons/IconPlus.vue";

export default defineComponent({
  components: {
    InputForm,
    HeaderMessage,
    IconPlus,
    IconBase,
    IconButtonManage,
    PlayerTableManage,
  },
  setup() {
    const configButtonPlayer = computed(() => {
      const base = [
        {
          labelInput: "Jogador :",
          placeholderButton: "Nome do Jogador",
          typeButton: "text",
          idButton: "player",
          nameButton: "player",
        },
      ];
      return base;
    });

    const configButtonPosition = computed(() => {
      const base = [
        {
          labelInput: "Posição :",
          placeholderButton: "Posição do jogador",
          typeButton: "text",
          idButton: "position",
          nameButton: "position",
        },
      ];

      return base;
    });

    const configButtonNumber = computed(() => {
      const base = [
        {
          labelInput: "Número :",
          placeholderButton: "Númerod da camisa",
          typeButton: "text",
          idButton: "number",
          nameButton: "number",
        },
      ];

      return base;
    });

    const message = computed(() => {
      return "Monte os time, ou deixe que o sistema faça por voçê ...";
    });

    return {
      configButtonPlayer,
      configButtonPosition,
      configButtonNumber,
      message,
    };
  },
});
</script>

<style>
.name-team {
  width: 658px;
}

.goalkeeper {
  top: 45px;
  left: 148px;
}

.first-back {
  top: 80px;
  left: 98px;
}

.second-back {
  top: 80px;
  left: 195px;
}

.third-back {
  top: 120px;
  left: 30px;
}

.fourth-back {
  top: 120px;
  left: 265px;
}

.first-midfield {
  top: 166px;
  left: 110px;
}

.second-midfield {
  top: 166px;
  left: 180px;
}

.third-midfield {
  top: 250px;
  left: 50px;
}

.fourth-midfield {
  top: 250px;
  left: 245px;
}

.first-forward {
  top: 330px;
  left: 90px;
}

.second-forward {
  top: 330px;
  left: 200px;
}
</style>
