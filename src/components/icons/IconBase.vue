<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :class="iconClass"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <slot />
  </svg>
</template>

<script>
export default {
  props: {
   iconClass: {
     type: String,
     default: 'h-6 w-5 mr-2 text-blue-600'
   }
  },
};
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px; /* yes, I'm that particular about formatting */
}
</style>
  