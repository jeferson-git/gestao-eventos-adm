<template>
  <button
    type="button"
    :class="classBaseMenu"
  >
    <icon-base :class="iconClass"> <slot /> </icon-base
    ><span> {{ message }}</span></button
  >
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import IconBase from "../../icons/IconBase.vue";
import IconCalendar from "../../icons/IconCalendar.vue";

export default defineComponent({
  components: { IconBase, IconCalendar },
  props: {
    description: String,

    classBaseIcon: {
      type: Array,
      default: ["h-6", "w-5", "mr-2", "text-white"],
    },

    classBaseMenu: {
      type: Array,
      default: ["w-10", "m-auto", "bg-gray-300", "text-white", "rounded", "rounded-lg", "hover:ring-2", "hover:ring-blue-200"]
    },

    message: {
      type: String,
      default: ''
    }

  },

  setup(props) {
    const iconClass = computed(() => {
      const base = [props.classBaseIcon];
      return base;
    });

    return { iconClass };
  },
});
</script>