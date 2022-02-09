<template>
  <div :class="componentClass">
    <div :class="cardClass">
      <TheFormLogin />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import TheFormLogin from "../components/login/TheFormLogin.vue";

export default defineComponent({
  components: { TheFormLogin },
  name: "login-page",
  props: {
    userName: String,
    password: String,
  },
  setup() {
    const componentClass = computed(() => {
      const base = ["flex", "h-screen", "justify-center", "items-center","bg-gray-100"];

      return base;
    });

    const cardClass = computed(() => {
      const base = [
        "sm:w-4/12",
        "w-10/12",
        "bg-white",
        "shadow-md",
        "rounded",
        "px-8",
        "pt-6",
        "pb-8",
        "mb-4",
      ];

      return base;
    });
    return { componentClass, cardClass };
  },
});
</script>
