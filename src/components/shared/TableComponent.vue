<template>
  <div>
    <table class="w-full shadow-lg shadow-slate-700">
      <thead class="bg-gray-50 border-b-2 border-gray-200">
        <tr class="text-center">
          <th class="p-3 text-sm font-semibold tracking-wide">Responsável</th>
          <th class="p-3 text-sm font-semibold tracking-wide">Modalidade</th>
          <th class="p-3 text-sm font-semibold tracking-wide">Data</th>
          <th class="p-3 text-sm font-semibold tracking-wide">Hora Inicio</th>
          <th class="p-3 text-sm font-semibold tracking-wide">Hora Final</th>
          <th class="p-3 text-sm font-semibold tracking-wide">Participantes</th>
          <th class="p-3 text-sm font-semibold tracking-wide">Premiação</th>
          <th class="p-3 text-sm font-semibold tracking-wide">Aberto</th>
        </tr>
      </thead>
      <tbody v-for="evento in eventos" :key="evento.id">
        <tr class="text-center">
          <td
            class="
              p-3
              text-sm
              whitespace-nowrap
              border-r-4 border-b-2
              text-gray-700
            "
          >
            {{ evento.name }}
          </td>
          <td class="p-3 text-sm whitespace-nowrap border-b-2 text-gray-700">
            {{ evento.modality }}
          </td>
          <td class="p-3 text-sm whitespace-nowrap border-b-2 text-gray-700">
            {{ evento.date }}
          </td>
          <td class="p-3 text-sm whitespace-nowrap border-b-2 text-gray-700">
            {{ evento.initHour }}
          </td>
          <td class="p-3 text-sm whitespace-nowrap border-b-2 text-gray-700">
            {{ evento.endHour }}
          </td>
          <td class="p-3 text-sm whitespace-nowrap border-b-2 text-gray-700">
            {{ evento.participants }}
          </td>
          <td class="p-3 text-sm whitespace-nowrap border-b-2 text-gray-700">
            {{ evento.award }}
          </td>
          <td class="p-3 text-sm whitespace-nowrap border-b-2 text-gray-700">
            {{ evento.open }}
          </td>
        </tr>
      </tbody>
    </table>
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
        {
          name: "Jeferson Pereira",
          modality: "Futsal",
          date: "21/12/2022",
          initHour: "14:30",
          endHour: "15:30",
          participants: 14,
          award: "Paga a Quadra",
          open: "Não",
        }
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
