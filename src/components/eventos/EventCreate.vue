<template>
  <div class="container mx-auto bg-gray-100">
    <!-- Header lista Eventos  -->
    <header-message :message="message" />

    <!-- Form to Crate a new Event  -->
    <div class="py-12 w-3/5 m-auto rounded-lg hidden md:block">
      <h1 class="text-xl mb-2">Criar Evento:</h1>
      <div class="w-full shadow-lg shadow-slate-700">
        <div :class="formClass">
          <input-form :configButton="configButtonModality"></input-form>
          <input-form :configButton="configButtonParticipants"></input-form>
          <input-form :configButton="configButtonAward"></input-form>
          <input-form :configButton="configButtonDate"></input-form>
          <input-form :configButton="configButtonInitHour"></input-form>
          <input-form :configButton="configButtonEndHour"></input-form>
          <input-form :configButton="configButtonOpen"></input-form>
          <input-form :configButton="configButtonResponsible"></input-form>
        </div>
        <div class="p-4 float-right flex">
          <button-form
            :messageButton="messageButtonCreate"
            :colorButton="colorButtonCreate"
          />
          <button-form
            :messageButton="messageButtonCancel"
            :colorButton="colorButtonCancel"
          />
        </div>
      </div>
    </div>

    <!-- Form to Crate a new Event (mobile) -->
    <div class="w-full mt-4 m-auto md:hidden">
      <h1 class="text-xl mb-2">Criar Evento:</h1>

      <div class="md:hidden">
        <input-form-mobile
          :configButton="configButtonModality"
        ></input-form-mobile>
        <input-form-mobile
          :configButton="configButtonParticipants"
        ></input-form-mobile>
        <input-form-mobile
          :configButton="configButtonAward"
        ></input-form-mobile>
        <input-form-mobile :configButton="configButtonDate"></input-form-mobile>
        <input-form-mobile
          :configButton="configButtonInitHour"
        ></input-form-mobile>
        <input-form-mobile
          :configButton="configButtonEndHour"
        ></input-form-mobile>
        <input-form-mobile :configButton="configButtonOpen"></input-form-mobile>
        <input-form-mobile
          :configButton="configButtonResponsible"
        ></input-form-mobile>
      </div>
      <hr>
      <div class="mr-6 p-2">
        <button-form
          :messageButton="messageButtonCreate"
          :colorButton="colorButtonCreate"
          :mobileButton="true"
        />
        <button-form
          :messageButton="messageButtonCancel"
          :colorButton="colorButtonCancel"
          :mobileButton="true"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import HeaderMessage from "../shared/HeaderMessage.vue";
import InputForm from "../shared/InputForm.vue";
import ButtonForm from "../shared/ButtonForm.vue";
import InputFormMobile from "../shared/InputFormMobile.vue";

export default defineComponent({
  components: { HeaderMessage, InputForm, InputFormMobile, ButtonForm },
  setup() {
    const message = computed(() => {
      return "Por favor, preencha o formulário para criar seu novo evento...";
    });

    const configButtonModality = computed(() => {
      const base = [
        {
          labelInput: "Modalidade :",
          placeholderButton: "Escolha a Modalidade...",
          typeButton: "text",
          idButton: "modalidade",
          nameButton: "modalidade",
        },
      ];
      return base;
    });

    const configButtonDate = computed(() => {
      const base = [
        {
          labelInput: "Data :",
          placeholderButton: "Escolha a data...",
          typeButton: "text",
          idButton: "data",
          nameButton: "data",
        },
      ];
      return base;
    });

    const configButtonInitHour = computed(() => {
      const base = [
        {
          labelInput: "Hora início :",
          placeholderButton: "Escolha a hora que irá iniciar o evento...",
          typeButton: "text",
          idButton: "init",
          nameButton: "init",
        },
      ];
      return base;
    });

    const configButtonEndHour = computed(() => {
      const base = [
        {
          labelInput: "Hora Fim :",
          placeholderButton: "Escolha até que horas irá o evento...",
          typeButton: "text",
          idButton: "end",
          nameButton: "end",
        },
      ];
      return base;
    });

    const configButtonParticipants = computed(() => {
      const base = [
        {
          labelInput: "Participantes :",
          placeholderButton: "Preencha o número de participantes...",
          typeButton: "text",
          idButton: "participantes",
          nameButton: "participantes",
        },
      ];
      return base;
    });

    const configButtonAward = computed(() => {
      const base = [
        {
          labelInput: "Premiação :",
          placeholderButton: "Preencha a premiação do evento...",
          typeButton: "text",
          idButton: "premiacao",
          nameButton: "premiacao",
        },
      ];
      return base;
    });

    const configButtonOpen = computed(() => {
      const base = [
        {
          labelInput: "Público :",
          placeholderButton: "Selecione se irá ser aberto para participantes",
          typeButton: "text",
          idButton: "open",
          nameButton: "open",
        },
      ];
      return base;
    });

    const configButtonResponsible = computed(() => {
      const base = [
        {
          labelInput: "Responsável :",
          placeholderButton:
            "Preencha quem irá ser o responsável pelo evento...",
          typeButton: "text",
          idButton: "responsavel",
          nameButton: "responsavel",
        },
      ];
      return base;
    });

    const messageButtonCreate = computed(() => {
      return "Criar Evento";
    });

    const messageButtonCancel = computed(() => {
      return "Cancelar";
    });

    const colorButtonCreate = computed(() => {
      return "";
    });

    const colorButtonCancel = computed(() => {
      return "bg-gray-500";
    });

    const formClass = computed(() => {
      const base = [
        "w-full",
        "p-4",
        "grid",
        "grid-cols-auto",
        "gap-4",
        "bg-gray-50",
        "border-b-2",
        "border-gray-200",
      ];
      return base;
    });

    return {
      message,
      formClass,
      configButtonModality,
      configButtonDate,
      configButtonInitHour,
      configButtonEndHour,
      configButtonParticipants,
      configButtonAward,
      configButtonOpen,
      configButtonResponsible,
      messageButtonCreate,
      messageButtonCancel,
      colorButtonCreate,
      colorButtonCancel,
    };
  },
});
</script>
