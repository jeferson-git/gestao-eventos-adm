<template>
  <div
    class="mt-4 grid grid-cols-1 gap-4 md:hidden"
    v-for="evento in eventos"
    :key="evento.id"
  >
    <div class="bg-white p-4 rounded-lg shadow-lg">
      <div class="flex items-center space-x-2 text-sm">
        <div class="font-bold text-blue-700">{{ evento.name }}</div>
        <div class="font-semibold text-yellow-700">{{ evento.modality }}</div>
        <div
          class="flex item space-x-1 border-2 p-1 rounded-lg bg-red-100 mb-2"
        >
          <p class="font-semibold text-red-700">Horário:</p>
          <div class="font-extralight">{{ evento.date }}</div>
          <div class="font-extralight">{{ evento.initHour }}</div>
          <div class="font-extralight">/</div>
          <div class="font-extralight">{{ evento.endHour }}</div>
        </div>
      </div>
      <hr />
      <div class="text-sm items-center">
        <div>
          <span class="font-semibold text-blue-700">Participantes:</span>
          {{ evento.participants }}
        </div>
        <div>
          <span class="font-semibold text-blue-700">Premiação: </span
          >{{ evento.award }}
        </div>
        <div>
          <span class="font-semibold text-blue-700">Aberto ao Público:</span>
          {{ evento.open }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    eventList: {
      type: Object,
      default: [
        {
          name: "Jeferson Pereira",
          modality: "Futsal",
          date: "21/12/2022",
          initHour: "14:30",
          endHour: "15:30",
          participants: 14,
          award: "Paga a Quadra",
          open: "Não",
        },
      ],
    },
  },
  setup(props) {
    const eventos = computed(() => {
      return props.eventList;
    });

    return { eventos };
  },
});
</script>
