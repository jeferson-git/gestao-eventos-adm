<template>
  <div class="bg-gray-100">
    <!-- Nav Bar menu -->
    <div class="px-8 max-w-7xl mx-auto">
      <div class="flex justify-between">
        <!-- logo -->
        <div>
          <a href="#" class="flex items-center py-7 text-gray-700">GdE || </a>
        </div>
        <!-- Primary Nav -->
        <div class="hidden md:flex items-center lg:space-x-10 space-x-0">
          <nav-bar-button :description="descriptionEventos">
            <icon-calendar />
          </nav-bar-button>
          <nav-bar-button :description="descriptionCriarEvento">
            <icon-document-add />
          </nav-bar-button>
          <nav-bar-button :description="descriptionGerenciarEvento">
            <icon-pencil-alt />
          </nav-bar-button>
          <nav-bar-button :description="descriptionEstatísticas">
            <icon-presentation-chart-line />
          </nav-bar-button>
        </div>
        <!-- Second Nav  -->
        <div class="hidden md:flex py-3 items-center">
          <img
            src=""
            alt=""
            class="w-11 h-11 border rounded-full border-red-700 mr-4"
          />
          <NavBarButtonLogout />
        </div>
        <!--Nav Bar Mobile button menu -->
        <div class="md:hidden flex items-center" @click="toggleMenuButton">
          <nav-bar-button :classBaseIcon="iconClass" :classBaseMenu="menuClassMobile">
            <icon-menu />
          </nav-bar-button>
        </div>
      </div>
    </div>
    <!-- mobile menu  -->
    <div v-if="toggleMenu">
      <nav-bar-link
        :description="descriptionEventos"
        :classBaseMenu="menuClassMobile"
      >
        <icon-calendar />
      </nav-bar-link>
      <nav-bar-link
        :description="descriptionCriarEvento"
        :classBaseMenu="menuClassMobile"
      >
        <icon-document-add />
      </nav-bar-link>
      <nav-bar-link
        :description="descriptionGerenciarEvento"
        :classBaseMenu="menuClassMobile"
      >
        <icon-pencil-alt />
      </nav-bar-link>
      <nav-bar-link
        :description="descriptionEstatísticas"
        :classBaseMenu="menuClassMobile"
      >
        <icon-presentation-chart-line />
      </nav-bar-link>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from "vue";

import NavBarButton from "./NavBarButton.vue";
import NavBarLink from "./NavBarLink.vue";
import IconCalendar from "../icons/IconCalendar.vue";
import IconPencilAlt from "../icons/IconPencilAlt.vue";
import IconDocumentAdd from "../icons/IconDocumentAdd.vue";
import IconMenu from "../icons/IconMenu.vue";
import IconPresentationChartLine from "../icons/IconPresentationChartLine.vue";
import NavBarButtonLogout from "./NavBarButtonLogout.vue";

export default defineComponent({
  components: {
    NavBarButton,
    NavBarLink,
    IconCalendar,
    IconPencilAlt,
    IconDocumentAdd,
    IconPresentationChartLine,
    NavBarButtonLogout,
    IconMenu,
  },

  props: {
    toggleMenu : {
      type: Boolean,
      default: false
    }
  },

  setup(props) {

    const descriptionEventos = computed(() => {
      return "Eventos";
    });
    const descriptionCriarEvento = computed(() => {
      return "Criar Evento";
    });
    const descriptionGerenciarEvento = computed(() => {
      return "Gerenciar Evento";
    });
    const descriptionEstatísticas = computed(() => {
      return "Estatísticas";
    });

    const iconClass = computed(() => {
      const base = ["h-6", "w-6", "text-blue-600"];
      return base;
    });

    const menuClassMobile = computed(() => {
      const base = [
        "block",
        "py-2",
        "px-4",
        "text-sm",
        "hover:bg-gray-200",
        "cursor-pointer",
      ];
      return base;
    });

    function toggleMenuButton() {
      props.toggleMenu = !props.toggleMenu
      console.log(props.toggleMenu)
    }

    return {
      descriptionEventos,
      descriptionCriarEvento,
      descriptionGerenciarEvento,
      descriptionEstatísticas,
      iconClass,
      menuClassMobile,
      toggleMenuButton
    };
  },
});
</script>
