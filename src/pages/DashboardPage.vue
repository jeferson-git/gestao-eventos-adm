<template>
  <div class="fixed w-full bg-gray-200">
    <nav-bar></nav-bar>
    <div class="h-screen p-4 bg-gray-100">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import NavBar from "../components/navbar/NavBar.vue";

export default defineComponent({
  name: "dashboard-page",
  components: { NavBar },
  setup() {},
});
</script>
