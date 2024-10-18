<template>
  <div
    class="container h-screen background bg-no-repeat object-center object-cover overflow-hidden justify-between relative lg:max-w-[575px] w-full !px-0 flex items-center flex-col"
  >
    <div class="bg-[#16094A1A] p-[24px] absolute top-0 w-full">
      <div class="flex items-center gap-4">
        <img src="" alt="" class="w-[50px] h-[50px] bg-gray-400 rounded-full" />
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
    </div>

    <div class="overflow-y-auto h-full"><slot></slot></div>
    <div
      class="bg-[#16094A] p-[24px] rounded-t-[20px] border-[#CBFCC31A] absolute bottom-0 border-t-[1px] w-full"
    >
      gg
    </div>
  </div>
</template>
<style>
.background {
  background-blend-mode: overlay;
  background-image: url("@/assets/img/Onboardingscreen.png");
}
.c-blur {
  backdrop-filter: blur(20px);
}
</style>
