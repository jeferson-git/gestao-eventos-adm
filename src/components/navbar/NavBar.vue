<template>
  <div class="bg-gray-100">
    <div class="px-8 max-w-7xl mx-auto">
      <div class="flex justify-between">
        <div>
          <a href="#" class="flex items-center py-7 text-gray-700">GdE || </a>
        </div>
        <div class="flex space-x-1">
          <div class="flex items-center space-x-5">
            <a
              href="#"
              class="
                flex
                sm:py-6
                py-3
                px-2
                text-gray-700
                border-0
                hover:border-b-blue-900 hover:border-b-2
              "
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-5 mr-2 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                /></svg
              ><span>Eventos</span></a
            >
            <a
              href="#"
              class="
                flex
                sm:py-6
                py-3
                px-2
                text-gray-700
                hover:border-b-blue-900 hover:border-b-2
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-5 mr-2 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                /></svg
              >Criar Evento</a
            >
            <a
              href="#"
              class="
                flex
                sm:py-6
                py-3
                px-2
                text-gray-700
                hover:border-b-blue-900 hover:border-b-2
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-5 mr-2 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                /></svg
              ><span>Editar Evento</span></a
            >
            <a
              href="#"
              class="
                flex
                sm:py-6
                py-3
                px-2
                text-gray-700
                hover:border-b-blue-900 hover:border-b-2
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-5 mr-2 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                /></svg
              >Estatística</a
            >
          </div>
          <div></div>
          <div></div>
        </div>
        <div class="py-3 flex items-center">
          <img
            src=""
            alt=""
            class="w-11 h-11 border rounded-full border-red-700 mr-4"
          />
          <button
            type="button"
            class="
              border
              outline-8
              hover:ring-2 hover:ring-yellow-500
              bg-yellow-400
              rounded-md
              h-8
              w-24
            "
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>
