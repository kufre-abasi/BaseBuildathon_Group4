<template>
  <div class="text-white py-28 container flex flex-col gap-10">
    <div class="w-full flex justify-start text-left">
      <h3 class="text-[38px] leading-[43.6px] text-[#FAFAFA] !font-bold">
        Let’s learn <br />
        Something new about <br />
        <b class="text-[#CBFCC3]">Web3</b>
      </h3>
    </div>
    <div
      class="bg-[#16094A] rounded-[16px] relative object-cover bg-no-repeat bg-right-bottom p-8 h-[26vh]"
    >
      <UIIconHeroBannerImage class="absolute bottom-0 -right-8" />
      <div
        class="border-[#FAFAFA80] border-[0.5px] h-full bg-[#CBFCC31A] flex flex-col justify-between card-blur rounded-[8px] p-[22px]"
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
          class="btn-brand Gradient-button z-10 !text-[#16094A] w-fit !rounded-[8px] !py-[10px] !px-[12px] !text-[21px] font-bold"
        >
          Start a module
        </button>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <h2 class="text-[#FAFAFA] text-[23px] leading-[21.6px] font-semibold">
        Choose a module
      </h2>
      <div class="flex flex-row gap-[8px]">
        <div
          class="bg-[#CBFCC3] border-[0.5px] text-[#16094A] px-[16px] w-fit rounded-full py-[4px] text-[18px] font-normal"
        >
          All
        </div>
        <div
          class="border-[#CBFCC3] border-[0.5px] text-[#CBFCC3] px-[16px] w-fit rounded-full py-[4px] text-[18px] font-normal"
        >
          Beginner
        </div>
        <div
          class="border-[#CBFCC3] border-[0.5px] text-[#CBFCC3] px-[16px] w-fit rounded-full py-[4px] text-[18px] font-normal"
        >
          Advance
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style>
.card-blur {
  backdrop-filter: blur(20px);
}
/* .banner-img {
  background-blend-mode: overlay;
  background-image: url("@/components/UI/Icon/HeroBannerImage.svg");
} */
</style>
