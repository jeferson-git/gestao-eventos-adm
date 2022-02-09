<template>
  <div>
    <h3>
      <p class="text-lg font-bold text-center">
        {{ message }}
      </p>
    </h3>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    message: {
      type: String,
      default: "Olá, Aqui voçê pode acompanhar todos os eventos !",
    },
    user: {
        type: String,
        default: null
    }
  },
  setup(props) {
      const message = computed(() => {
          if (props.user) {
              return `Olá ${props.user}, Aqui voçê pode acompanhar todos os eventos !`
          }
          return props.message;
      })

      return { message }
  },
});
</script>
