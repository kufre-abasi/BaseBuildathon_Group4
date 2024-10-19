<template>
  <div class="w-full container py-28 flex flex-col gap-[21px]">
    <div class="flex flex-col gap-[16px]">
      <!-- <img src="@/assets/img/Videoplayer.png" alt="" class="w-full rounded-[12px]" /> -->
      <div
        class="bg-primary-100 h-[260px] w-full rounded-[4px] overflow-hidden flex lg:flex-row flex-col gap-10 justify-between items-center"
      >
        <iframe
          class="!w-full !h-full rounded-[12px]"
          src="https://player.vimeo.com/video/561754091?h=bf69de8a40"
          frameborder="0"
          allowfullscreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>

      <div class="flex flex-col gap-[4px]">
        <h3 class="text-[#FAFAFA] text-[21px] font-semibold leading-[21.6px]">
          Introduction
        </h3>
        <p class="text-[#BBC2C9] text-[16px] leading-[16.8px] font-normal">
          This module introduces the basics of blockchain, decentralized applications
          (dApps), smart contracts, and cryptocurrency
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-[24px]">
      <div
        class="bg-[#CBFCC3] border-[0.5px] text-[#16094A] border-[#CBFCC3] px-[16px] w-fit rounded-full relative leading-[16.8px] py-[8px] text-[18px] font-normal"
      >
        Module topics
      </div>
      <div class="flex flex-col gap-[16px]">
        <div
          v-for="i in 5"
          :key="i"
          class="border-[#FAFAFA33] border-[1px] bg-[#FAFAFA0D] gap-[12px] flex p-[8px] rounded-[8px]"
        >
          <button
            class="flex flex-col gap-[16px] h-[100px] items-center justify-center w-[100px] bg-brand p-4 object-cover bg-no-repeat bg-cover overflow-hidden rounded-[16px]"
            :style="{ backgroundImage: `url(${module5})` }"
          >
            <UIIconPlayIcon />
          </button>
          <div class="w-full flex flex-col justify-between">
            <h4>Introduction to Web3 & Blockchain</h4>
            <div>
              <div
                class="text-[#FAFAFA80] py-[4px] px-[8px] rounded-full bg-[#FAFAFA66] !text-[#CBFCC3] text-[10px] w-fit border-[0.4px]"
              >
                8mins
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import module5 from "~/assets/module/module5.png";
</script>
