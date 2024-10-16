<template>
  <div
    class="h-full w-full background flex py-10 pb-20 bg-no-repeat object-center object-cover flex-col"
  >
    <div class="container w-full flex flex-col justify-between relative h-full">
      <div class="flex justify-center my-[170px] items-center w-full">
        <img
          class="h-[48px]"
          src="@/assets/web3school.svg"
          alt=" BaseBuildathon_Group4 LOGO"
        />
      </div>
      <UIIconRoundelipse class="absolute -bottom-20" />

      <div
        class="mt-10 flex w-full flex-col gap-[14px] items-center relative justify-center"
      >
        <button
          @click="next"
          class="w-full btn-brand Gradient-button z-10 !text-[#16094A] !rounded-[8px] !py-[16px] text-[14px] font-bold"
        >
          Go to dashboard
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
