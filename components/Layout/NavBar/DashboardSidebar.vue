<template>
  <div
    :class="{
      '-translate-x-[100%] ': !showNavBar,
      'translate-x-0': showNavBar
    }"
    class="w-[273px] h-screen fixed z-50 transition-transform ease-in-out duration-500 shrink-0 bg-white rounded-tr-2xl dark:bg-brand"
  >
    <div class="py-12 px-5 text-gray-100 rounded-tr-2xl">
      <img
        src="@/assets/web3school.svg"
        alt="THE BaseBuildathon_Group4 LOGO"
        class="h-[37px] w-[106px] object-cover"
      />
    </div>
    <div class="flex flex-col pr-3 gap-8 mt-4">
      <LayoutNavBarSidebarItem :routes="links" />
    </div>
  </div>
  <div v-if="showNavBar" class="z-20 fixed glass h-screen w-full p-4">
    <div class="flex text-gray-50 justify-end"></div>
  </div>
</template>

<script setup>
const useNavStore = navBarStore();

const { showNavBar } = storeToRefs(useNavStore);

onMounted(() => {
  showNavBar.value = false;
});

const links = shallowRef([
  {
    name: 'About Us',
    linkName: ''
  },
  {
    name: 'Contact Us',
    linkName: ''
  },
  {
    name: 'Offline Campaign Gallery',
    linkName: ''
  },
  // {
  //   name: "Sponsorship",
  //   linkName: "sponsor",
  // },
  {
    name: 'Privacy Policy',
    linkName: ''
  },
  {
    name: 'Terms of Use',
    linkName: ''
  },
  {
    name: 'FAQs',
    linkName: ''
  }
]);
</script>

<style lang="scss" scoped></style>
