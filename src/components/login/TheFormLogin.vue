<template>
  <div :class="componentClass">
    <div>
      <div class="mb-4">
        <label :class="labelClass" for="username"> Username </label>
        <input :class="formClass" id="username" placeholder="Username" type="text" />
      </div>
      <div class="mb-6">
        <label :class="labelClass" for="password"> Password </label>
        <input :class="formClass" id="password" placeholder="Password" type="password" />
      </div>
      <div class="flex items-center justify-between">
        <div :class="buttonClass">Sing in</div>
        <a :class="forgotClass"> Forgot Password?</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  setup() {
    const componentClass = computed(() => {
      const base = ["w-full", "max-w-sx"];

      return base;
    });
   
    const formClass = computed(() => {
      const base = [
        "shadow",
        "appearance-none",
        "border-none",
        "rounded",
        "w-full",
        "py-2",
        "px-3",
        "text-gray-700",
        "leading-tight",
        "focus:outline-none",
        "focus:shadow-outline",
      ];

      return base;
    });

    const labelClass = computed(() => {
      const base = ["block", "text-gray-700", "text-sm", "font-bold", "mb-2"];

      return base;
    });

    const buttonClass = computed(() => {
      const base = [
        "bg-blue-500",
        "hover:bg-blue-700",
        "text-white",
        "font-bold",
        "py-2",
        "px-4",
        "rounded",
        "focus:outline-none",
        "focus:shadown-outline",
      ];

      return base;
    });

    const forgotClass = computed(() => {
      const base = [
        "inline-block",
        "align-baseline",
        "font-bold",
        "text-sm",
        "text-blue-500",
        "hover:text-blue-800"
      ]
      return base;

    })

    return { componentClass, formClass, labelClass, buttonClass, forgotClass };
  },
});
</script>
