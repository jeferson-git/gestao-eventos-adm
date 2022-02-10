<template>
  <div class="w-full static md:fixed bg-gray-200">
    <nav-bar></nav-bar>
    <div class="w-full h-screen items-center p-4 bg-gray-100">
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
