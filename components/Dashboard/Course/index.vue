<template>
  <div class="w-full container mt-28 flex flex-col gap-[21px]">
    <div class="flex flex-col gap-[16px]">
      <!-- <img src="@/assets/img/Videoplayer.png" alt="" class="w-full rounded-[12px]" /> -->
      <div
        class="bg-primary-100 lg:h-[260px] rounded-[4px] overflow-hidden flex lg:flex-row flex-col gap-10 justify-between items-center"
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
    <div>
      <div
        class="bg-[#CBFCC3] border-[0.5px] text-[#16094A] border-[#CBFCC3] px-[16px] w-fit rounded-full relative leading-[16.8px] py-[8px] text-[18px] font-normal"
      >
        Module topics
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
