<template>
  <header class="w-full fixed top-0 z-30 flex py-8 px-4 p flex-col">
    <div
      class="flex justify-between items-center w-full !p-[15px_40px_15px_17px] bg-transparent"
    >
      <NuxtLink to="/" class="">
        <img
          src="@/assets/web3school.svg"
          alt="THE BaseBuildathon_Group4 LOGO"
          class="h-[37px] object-cover"
        />
      </NuxtLink>

      <button class="text-white" @click="useNavStore.toogle()">
        <UIIconToggle v-if="!showNavBar" />
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          width="24"
          height="25"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </header>
  <!-- <LayoutNavBarDashboardSidebar /> -->
</template>
<script setup>
import Drawer from "primevue/drawer";
import { useRoute, useRouter } from "vue-router";

import { ref } from "vue";
const route = useRoute();
const visible = ref(false);
const useNavStore = navBarStore();
const { showNavBar } = storeToRefs(useNavStore);

const router = useRouter();

const isMenuOpen = ref(false);
const currentHash = ref("");

const handleClick = (event) => {
  event.preventDefault();
  toggleMenu();
  if (typeof window !== "undefined") {
    window.location.hash = `#${props.targetHash}`;
  }
};

const updateHash = () => {
  if (typeof window !== "undefined") {
    currentHash.value = window.location.hash;
  }
};

onMounted(() => {
  if (typeof window !== "undefined") {
    currentHash.value = window.location.hash;
    window.addEventListener("hashchange", updateHash);
  }
});

onBeforeUnmount(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("hashchange", updateHash);
  }
});

watch(currentHash, (newHash) => {
  console.log(`Hash changed to: ${newHash}`);
});
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
