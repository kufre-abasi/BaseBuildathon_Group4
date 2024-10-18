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
       class="bg-[#16094A] rounded-[16px] relative   object-cover bg-no-repeat bg-right-bottom p-8 h-[40vh]"
    ><UIIconHeroBannerImage class='absolute bottom-0  -right-8'/>
      <div
        class="border-[#FAFAFA80] border-[0.5px] h-full bg-[#CBFCC31A] card-blur rounded-[8px] p-[12px]"
      ></div>
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
