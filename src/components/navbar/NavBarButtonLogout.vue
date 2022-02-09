<template>
  <button type="button" :class="componentClass">
    <span class="font-bold">Logout</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-7 w-5 ml-1"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fill-rule="evenodd"
        d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  setup() {
    const componentClass = computed(() => {
      const base = [
        "justify-betwwen",
        "items-center",
        "flex",
        "px-2",
        "py-5",
        "border",
        "outline-8",
        "hover:ring-2",
        "hover:ring-yellow-500",
        "bg-yellow-400",
        "rounded-lg",
        "h-8",
        "w-24",
      ];
      return base;
    });

    return { componentClass };
  },
});
</script>
