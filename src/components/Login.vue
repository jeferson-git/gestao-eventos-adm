<template>
  <div :class="componentClass">
    <div :class="cardClass">
      <FormLogin />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import FormLogin from "./login-components/FormLogin.vue";

export default defineComponent({
  components: { FormLogin },
  name: "login",
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
        "w-4/12",
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
