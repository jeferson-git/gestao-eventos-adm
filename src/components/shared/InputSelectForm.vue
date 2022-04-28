<template>
  <div class="w-full">
    <div id="input-container">
      <div id="img" class="">
        <icon-base><icon-search></icon-search></icon-base>
      </div>
      <div
        class="
          sm:flex
          h-8
          bg-gray-100
          border border-slate-900/10
          focus:outline-none
          focus:border
          focus:border-b-none
          focus:rounded-b-none
          focus:border-b-gray-100
          shadow-sm
          focus:shadow-none
          rounded-lg
          focus:rounded-t-lg
          w-full
          p-3
        "
      >
        <div class="w-full teste relative">
          <div class="bottom-2 h-6 px-2 bg-green-200 focus:outline-none mr-3">
            tetse
          </div>

          <div
            class="
              absolute
              bottom-2
              h-6
              px-2
              bg-green-200
              focus:outline-none
              mr-3
            "
          >
            tetse
          </div>

          <div
            class="
              relative
              bottom-2
              h-6
              px-2
              bg-green-200
              focus:outline-none
              mr-3
            "
          >
            tetse
          </div>
          <input
            class="
              relative
              teste
              input-select
              bottom-2
              h-6
              px-2
              bg-gray-100
              focus:outline-none
              mr-3
            "
            @click="isOpen = !isOpen"
            @blur="isOpen = false"
            type="text"
            name="selectOne"
            id="selectOne"
          />
          <div
            class="
              w-full
              h-full
              border
              -mt-2
              bg-gray-100
              border-gray-300
              rounded-b-lg
              border-t-0
            "
            v-if="isOpen"
          >
            <div class="flex-column align-middle py-4 font-medium">
              <div class="hover:bg-gray-300 p-3">teste</div>
              <div class="hover:bg-gray-300 p-3">teste</div>
              <div class="hover:bg-gray-300 p-3">teste</div>
              <div class="hover:bg-gray-300 p-3">teste</div>
              <div class="hover:bg-gray-300 p-3">teste</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import IconBase from "../icons/IconBase.vue";
import IconSearch from "../icons/IconSearch.vue";

export default defineComponent({
  components: { IconBase, IconSearch },
  setup() {
    const isOpen = ref(false);

    return { isOpen };
  },
});
</script>

<style>
#input-container {
  position: relative;
}

#input-container > #img {
  position: absolute;
  top: -1px;
  right: -3px;
}

.input-select {
  width: calc(100%);
}
</style>
