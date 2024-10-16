<template>
  <div
    class="h-full w-full background flex py-10 pb-20 bg-no-repeat object-center object-cover flex-col"
  >
    <div class="container w-full flex flex-col justify-between h-full">
      <div class="flex justify-start w-full">
        <img
          class="h-[28px]"
          src="@/assets/web3school.svg"
          alt=" BaseBuildathon_Group4 LOGO"
        />
      </div>
      <div class="flex justify-center my-10 w-full">
        <img
          class="h-[250px]"
          src="@/assets/img/Roundelipse.png"
          alt=" BaseBuildathon_Group4 LOGO"
        />
      </div>
      <div
        class="mt-10 flex w-full flex-col gap-[14px] items-center relative justify-center"
      >
        <UIIconRoundelipse class="absolute bottom-0 top-[5px]" />
        <div
          class="flex flex-col gap-[14px] mt-10 p-4 z-10 w-full backdrop-blur-[20px] bg-white/10 rounded-[8px] border-[#FAFAFA1A] border-[1px]"
        >
          <p class="text-[#FAFAFA] text-[14px] leading-[16.8px]">
            Welcome to Web3 School
          </p>
          <div class="flex flex-col gap-[4px]">
            <h3 class="text-[24px] leading-[31.25px] text-[#FAFAFA] !font-bold">
              <b class="text-[#CBFCC3]">Learn</b> about
              <b class="text-[#CBFCC3]">Web3</b> in one place
            </h3>
            <p class="text-[#FAFAFA] leading-[18.23px] font-normal text-[14px]">
              Hey newbie! It’s time to learn Web 3 from the list of our curated video and
              guides from global experts.
            </p>
          </div>
        </div>
        <div class="flex justify-center flex-row z-10 gap-[7px]">
          <div
            class="h-[4px] p-[4px] w-[10vh] rounded-[16px]"
            :class="active === 'step-one' ? 'bg-[#FAFAFA]' : 'bg-[#64707D]'"
          ></div>
          <div
            class="h-[4px] p-[4px] w-[10vh] rounded-[16px]"
            :class="active === 'step-two' ? 'bg-[#FAFAFA]' : 'bg-[#64707D]'"
          ></div>
        </div>
        <button
          @click="next"
          class="w-full btn-brand Gradient-button z-10 !text-[#16094A] !rounded-[8px] !py-[16px] text-[14px] font-bold"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const emit = defineEmits(["next"]);
defineProps({ active: null });

const next = (_id: any) => {
  emit("next", _id);
};
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
