<template>
  <div class="container mx-auto">
    <!-- Mensagem do Header  -->
    <div>
      <header-message :message="messageHeader" />
    </div>
    <!-- Tabela da sumula  -->
    <div class="mt-4">
      <SummaryTable />
    </div>

    <!-- Botao de Salvar  -->
    <SummaryButton />

  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import HeaderMessage from "../../shared/HeaderMessage.vue";

import SummaryButton from "../components/SummaryButton.vue"
import SummaryTable from '../components/SummaryTable.vue'


export default defineComponent({
  components: { HeaderMessage, SummaryButton, SummaryTable },
  props: {
    message: String
  },
  setup(props) {
    const messageHeader = computed(() => {
      if (props.message) {
        return `Olá ${props.message}, aqui voçê pode configurar as estatísticas dos jogos que finalizaram...`;
      }

      return `Olá, aqui voçê pode configurar as estatísticas dos jogos que finalizaram...`;
    });

    return { messageHeader }
  },
});
</script>

<style scoped>
  .div1 {
    border: solid green 1px;
  }
</style>
