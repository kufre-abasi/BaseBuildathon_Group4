<template>
  <div
    class="container h-screen background bg-no-repeat object-center z-50 object-cover overflow-hidden justify-between relative lg:max-w-[575px] w-full !px-0 flex items-center flex-col"
  >
    <div
      class="bg-[#16094A1A] p-[24px] absolute flex justify-between items-center top-0 w-full"
    >
      <div class="flex items-center gap-4">
        <img
          src="@/assets/img/Avater.png"
          alt=""
          class="w-[50px] h-[50px] bg-gray-400 object-contain rounded-full"
        />
        <div>
          <div class="flex flex-row gap-[4px] items-center">
            <h3 class="text-[#FAFAFA] text-[18px] leading-[21.6px] font-normal">
              Hello,
            </h3>
            <span
              class="bg-[#CBFCC3] py-[2.4px] px-[4.8px] h-fit w-fit text-[#16094A] text-[6px] rounded-full"
              >Telegram</span
            >
          </div>

          <h3 class="text-[#FAFAFA] text-[18px] font-bold leading-[21.6px]">
            Bubu Manuel
          </h3>
        </div>
      </div>
      <button><UIIconCloseSquare /></button>
    </div>

    <div class="overflow-y-auto w-full h-full px-[4px]"><slot></slot></div>
    <div
      class="bg-[#16094A] px-[24px] rounded-t-[20px] border-[#CBFCC31A] z-50 flex flex-row justify-between absolute bottom-0 border-t-[1px] w-full"
    >
      <div
        :class="
          route.path.startsWith(`/dashboard`)
            ? ' border-[#CBFCC3] border-t-[2px] !text-[#CBFCC3]'
            : 'text-[#A4ADB6]'
        "
        class="py-[24px]"
      >
        <NuxtLink to="/" class="flex flex-col items-center gap-[8px]">
          <UIIconHomeIcon /><span class="text-[12px] leading-[14.4px] font-semibold"
            >Home</span
          ></NuxtLink
        >
      </div>
      <div
        :class="
          route.path.startsWith(`/ `)
            ? ' border-[#CBFCC3] border-t-[2px] text-[#CBFCC3]'
            : 'text-[#A4ADB6]'
        "
        class="py-[24px]"
      >
        <NuxtLink to="/" class="flex flex-col items-center gap-[8px]">
          <UIIconRankingIcon /><span class="text-[12px] leading-[14.4px] font-semibold"
            >Track progress</span
          ></NuxtLink
        >
      </div>
      <div
        :class="
          route.path.startsWith(`/ `)
            ? ' border-[#CBFCC3] border-t-[2px] text-[#CBFCC3]'
            : 'text-[#A4ADB6]'
        "
        class="py-[24px]"
      >
        <NuxtLink to="/" class="flex flex-col items-center gap-[8px]">
          <UIIconNoteIcon /><span class="text-[12px] leading-[14.4px] font-semibold"
            >Module</span
          ></NuxtLink
        >
      </div>
      <div
        :class="
          route.path.startsWith(`/ `)
            ? ' border-[#CBFCC3] border-t-[2px] text-[#CBFCC3]'
            : 'text-[#A4ADB6]'
        "
        class="py-[24px]"
      >
        <NuxtLink to="/" class="flex flex-col items-center gap-[8px]">
          <UIIconProfileIcon /><span class="text-[12px] leading-[14.4px] font-semibold"
            >Profile</span
          ></NuxtLink
        >
      </div>
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
</script>
<style>
.background {
  background-blend-mode: overlay;
  background-image: url("@/assets/img/Onboardingscreen.png");
}
.c-blur {
  backdrop-filter: blur(20px);
}
</style>
