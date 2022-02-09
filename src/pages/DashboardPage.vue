<template>
    <div>
        <nav-bar></nav-bar>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import NavBar from '../components/navbar/NavBar.vue'

export default defineComponent({
    name: 'dashboard-page',
  components: { NavBar },
    setup() {
        
    },
})
</script>
