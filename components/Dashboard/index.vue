<template>
  <div
    class="text-white py-28 pb-40 container flex flex-col w-full overflow-hidden gap-10"
  >
    <div class="w-full flex justify-start text-left">
      <h3 class="text-[38px] leading-[43.6px] text-[#FAFAFA] !font-bold">
        Let’s learn <br />
        Something new about <br />
        <b class="text-[#CBFCC3]">Web3</b>
      </h3>
    </div>
    <div
      class="bg-[#16094A] rounded-[16px] relative object-cover bg-no-repeat -z-10 bg-right-bottom p-8 h-fit"
    >
      <UIIconHeroBannerImage class="absolute bottom-0 -right-8" />
      <div
        class="border-[#FAFAFA80] border-[0.5px] h-[26vh] bg-[#CBFCC31A] flex flex-col justify-between card-blur rounded-[8px] p-[22px]"
      >
        <div>
          <div
            class="bg-[#E4626F] rounded-full px-[8px] py-[4px] text-[#16094A] w-fit text-[10px] font-normal"
          >
            Ongoing Module
          </div>
        </div>
        <h4 class="text-[#FAFAFA] text-[18px] font-semibold">No active module yet</h4>
        <button
          class="btn-brand Gradient-button !text-[#16094A] w-fit !rounded-[8px] !py-[10px] !px-[12px] !text-[21px] font-bold"
        >
          Start a module
        </button>
      </div>
    </div>
    <div class="flex flex-col gap-4 overflow-hidden">
      <h2 class="text-[#FAFAFA] text-[23px] leading-[21.6px] font-semibold">
        Choose a module
      </h2>
      <div class="flex flex-row gap-[8px]">
        <button
          v-for="(tab, index) in tabs"
          :key="tab.slug"
          @click="changeCurrentTab(tab)"
          :class="
            tab.slug == currentTab?.slug
              ? 'bg-[#CBFCC3] border-[0.5px] text-[#16094A]'
              : 'border-[#CBFCC3] border-[0.5px] text-[#CBFCC3] '
          "
          class="px-[16px] w-fit rounded-full relative leading-[16.8px] py-[8px] text-[18px] font-normal"
        >
          {{ tab.name }}
          <UIIconTag v-if="index == 2" class="absolute -top-1 right-0" />
        </button>
      </div>
      <component :is="currentTab.component" />
    </div>
  </div>
</template>
<script setup lang="ts">
import All from "./module/All.vue";
import Beginner from "./module/Beginner.vue";
import Advance from "./module/Advance.vue";
const tabs = ref([
  {
    icon: null,
    name: "All",
    component: All,
    slug: "all",
  },
  {
    icon: null,
    name: "Beginner",
    component: Beginner,
    slug: "beginner",
  },
  {
    icon: null,
    name: "Advance",
    component: Advance,
    slug: "advance",
    digits: 40,
  },
]);

const currentTab = ref({
  icon: null,
  name: "All",
  component: All,
  slug: "all",
});
const changeCurrentTab = (value: any) => (currentTab.value = value);
</script>
<style>
/* .banner-img {
  background-blend-mode: overlay;
  background-image: url("@/components/UI/Icon/HeroBannerImage.svg");
} */
</style>
