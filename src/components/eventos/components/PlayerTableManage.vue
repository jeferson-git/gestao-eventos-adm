<template>
  <div>
    <table class="w-full shadow-lg shadow-slate-700">
      <thead class="bg-gray-50 border-b-2 border-gray-200">
        <tr class="text-center">
          <th class="p-3 text-sm font-semibold tracking-wide">#</th>
          <th class="p-3 text-sm font-semibold tracking-wide">Nome</th>
          <th class="p-3 text-sm font-semibold tracking-wide">Posição</th>
          <th class="p-3 text-sm font-semibold tracking-wide">Número</th>
          <th class="p-3 text-sm font-semibold tracking-wide">Time</th>
        </tr>
      </thead>
      <tbody v-for="player in players" :key="player.id">
        <tr class="text-center">
          <td class="p-3 text-sm whitespace-nowrap border-b-2 text-gray-700">
            {{ player.id }}
          </td>
          <td class="p-3 text-sm whitespace-nowrap border-b-2 text-gray-700">
            {{ player.name }}
          </td>
          <td class="p-3 text-sm whitespace-nowrap border-b-2 text-gray-700">
            {{ player.position }}
          </td>
          <td class="p-3 text-sm whitespace-nowrap border-b-2 text-gray-700">
            {{ player.number }}
          </td>
          <td class="p-3 text-sm whitespace-nowrap border-b-2 text-gray-700">
            {{ player.team }}
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
    playerList: {
      type: Object,
      default: [
        {
          id: 1,
          name: "Jeferson Pereira",
          position: "Atacante",
          number: "09",
          team: "A",
        },
        {
          id: 2,
          name: "Cabeça de rolon",
          position: "Meio Campo",
          number: "07",
          team: "A",
        },
        {
          id: 3,
          name: "Gotenks na Tranformação errada",
          position: "Zagueiro",
          number: "02",
          team: "B",
        },
      ],
    },
  },
  setup(props) {
    const players = computed(() => {
      return props.playerList;
    });

    return { players };
  },
});
</script>
