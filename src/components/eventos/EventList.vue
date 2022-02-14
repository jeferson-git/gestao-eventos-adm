<template>
  <div class="container mx-auto">
    <!-- Header lista Eventos  -->
    <header-message />

    <!-- Tabela de eventos  -->
    <div class="py-12 over overflow-auto rounded-lg hidden md:block">
      <h1 class="text-xl mb-2">Eventos:</h1>
      <table-component></table-component>
    </div>

    <!-- tabela de eventos para mobile -->
    <div class="mt-4 grid grid-cols-1 gap-4 md:hidden">
      <table-mobile-component></table-mobile-component>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import HeaderMessage from "../shared/HeaderMessage.vue";
import TableComponent from "../shared/TableComponent.vue";
import TableMobileComponent from "../shared/TableMobileComponent.vue";

export default defineComponent({
  components: { HeaderMessage, TableComponent, TableMobileComponent },
  setup() {},
});
</script>
