<template>
  <div>
     <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

import Login from './pages/LoginPage.vue'

export default defineComponent({
  components: { Login },
  setup() {
    
  },
})
</script>
