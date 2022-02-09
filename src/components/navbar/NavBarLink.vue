<template>
  <a
    type="button"
    :class="classBaseMenu"
  >
    <icon-base :class="iconClass"> <slot /> </icon-base
    ><span>{{ description }}</span></a
  >
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import IconBase from "../icons/IconBase.vue";
import IconCalendar from "../icons/IconCalendar.vue";

export default defineComponent({
  components: { IconBase, IconCalendar },
  props: {
    description: String,

    classBaseIcon: {
      type: Array,
      default: ["h-6", "w-5", "mr-2", "text-blue-600"],
    },

    classBaseMenu: {
      type: Array,
      default: ["flex", "py-3", "px-2","text-gray-700", "border-0","hover:border-b-blue-900", "hover:border-b-2"]
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
