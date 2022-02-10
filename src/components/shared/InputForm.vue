<template>
  <div class="flex items-center">
    <label class="text-sm font-semibold mr-4 w-28" :for="idButtonComponent">{{
      labelComponent
    }}</label>
    <input
      :class="classButtonComponent"
      :placeholder="placeholderComponent"
      :type="typeButtonComponent"
      :name="nameButtonComponent"
      :id="idButtonComponent"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    configButton: {
      type: Object,
      default: {
        labelInput: "Selecione",
        placeholderButton: "Preencha este campo...",
        typeButton: "text",
        idButton: "",
        nameButton: "",
      },
    },
    classButton: {
      type: String,
      default:
        "w-4/6 lg:w-full h-8 bg-gray-50 border border-blue-200 rounded px-2 py-2 text-md text-gray-800 focus:ring-2 focus:opacity-100 placeholder-gray-300 focus:border-blue-500 focus:outline-none",
    },
  },
  setup(props) {
    const labelComponent = computed(() => {
      return props.configButton[0].labelInput;
    });

    const placeholderComponent = computed(() => {
      return props.configButton[0].placeholderButton;
    });

    const typeButtonComponent = computed(() => {
      return props.configButton[0].typeButton;
    });

    const idButtonComponent = computed(() => {
      return props.configButton[0].idButton;
    });

    const nameButtonComponent = computed(() => {
      return props.configButton[0].nameButton;
    });

    const classButtonComponent = computed(() => {
      return props.classButton;
    });
    console.log(props.configButton);
    return {
      labelComponent,
      placeholderComponent,
      typeButtonComponent,
      idButtonComponent,
      nameButtonComponent,
      classButtonComponent,
    };
  },
});
</script>
