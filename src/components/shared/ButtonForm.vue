<template>
  <div>
    <button type="button" :class="classButton">
      {{ message }}
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    messageButton: {
      type: String,
      default: "Clique Aqui",
    },
    colorButton: {
      type: String,
    },
    mobileButton: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const message = computed(() => {
      return props.messageButton;
    });

    const classButton = computed(() => {
      const base = [
        "m-3",
        "p-2",
        props.mobileButton ? "w-full m-auto" : "w-40",
        props.colorButton ? props.colorButton : "bg-green-500",
        "rounded-lg",
        "text-white",
      ];
      return base;
    });
    return { message, classButton };
  },
});
</script>
