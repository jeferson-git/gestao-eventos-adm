<template>
  <div>
    <table class="w-full shadow-lg shadow-slate-700">
      <thead class="bg-gray-50 border-b-2 border-gray-200">
        <tr class="text-center">
          <th class=" text-sm font-semibold tracking-wide">Jogador</th>
          <th class=" text-sm font-semibold tracking-wide">Gols</th>
          <th class=" text-sm font-semibold tracking-wide">Assitência</th>
          <th class=" text-sm font-semibold tracking-wide">Faltas</th>
          <th class=" text-sm font-semibold tracking-wide">
            Cartão amarelo
          </th>
          <th class="p-3 text-sm font-semibold tracking-wide">
            Cartão vermelho
          </th>
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
          <td class="p-3 border-l-4 text-sm whitespace-nowrap border-b-2 text-gray-700">
            <input class="w-10 px-2 ring-2 focus:outline-none focus:ring-purple-400 ring-slate-900/20 rounded-sm" type="text" />
          </td>
          <td class="p-3 border-l-4 text-sm whitespace-nowrap border-b-2 text-gray-700">
            <input class="w-10 px-2 ring-2 focus:outline-none focus:ring-purple-400 ring-slate-900/20 rounded-sm" type="text" />
          </td>
          <td class="p-3 border-l-4 text-sm whitespace-nowrap border-b-2 text-gray-700">
            <input class="w-10 px-2 ring-2 focus:outline-none focus:ring-purple-400 ring-slate-900/20 rounded-sm" type="text">
          </td>
          <td class="p-3 border-l-4 text-sm whitespace-nowrap border-b-2 text-gray-700">
           <input class="w-10 px-2 ring-2 focus:outline-none focus:ring-purple-400 ring-slate-900/20 rounded-sm" type="text">
          </td>
          <td class="p-3 border-l-4 text-sm whitespace-nowrap border-b-2 text-gray-700">
           <input class="w-10 px-2 ring-2 focus:outline-none focus:ring-purple-400 ring-slate-900/20 rounded-sm" type="text">
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
          goals: "Futsal",
          assist: "21/12/2022",
          fault: "14:30",
          yellowCard: "15:30",
          redCard: 14,
        },
        {
          name: "Jeferson Pereira",
          goals: "Futsal",
          assist: "21/12/2022",
          fault: "14:30",
          yellowCard: "15:30",
          redCard: 14,
        },
        {
          name: "Jeferson Pereira",
          goals: "Futsal",
          assist: "21/12/2022",
          fault: "14:30",
          yellowCard: "15:30",
          redCard: 14,
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
