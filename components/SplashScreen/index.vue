<template>
  <div class="h-full w-full">
    <component :is="currentTab.component" @next="next" />
  </div>
</template>
<script lang="ts" setup>
import StepOne from "~/components/SplashScreen/Step/StepOne.vue";
import StepTwo from "~/components/SplashScreen/Step/StepTwo.vue";
const tabs = ref([
  {
    name: "StepOne",
    component: StepOne,
    slug: "step-one",
  },
  {
    name: "StepTwo",
    component: StepTwo,
    slug: "step-two",
  },
  {
    name: "StepThree",
    component: StepTwo,
    slug: "step-three",
  },
]);

const currentTab = ref({
  name: "StepOne",
  component: StepOne,
  slug: "step-one",
});
const changeCurrentTab = (value: any) => (currentTab.value = value);
const next = (data?: any) => {
  if (currentTab.value.slug == "step-one") {
    changeCurrentTab({
      name: "StepTwo",
      component: StepTwo,
      slug: "step-two",
    });
  } else if (currentTab.value.slug == "step-two") {
    changeCurrentTab({
      name: "StepOne",
      component: StepOne,
      slug: "step-one",
    });
  }
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
