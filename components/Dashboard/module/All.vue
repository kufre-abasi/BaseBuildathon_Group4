<template>
  <div class="flex flex-col w-full overflow-hidden gap-[16px]">
    <div class="grid grid-cols-2 h-full gap-[16px] w-full">
      <button
        @click="goto()"
        v-for="i in modules.slice(0, 1)"
        :key="i.name"
        class="flex flex-col gap-[16px] h-full bg-brand p-6 object-cover bg-no-repeat overflow-hidden bg-cover rounded-[16px] w-full"
        :style="{ backgroundImage: `url(${i.image})` }"
      >
        <div class="flex flex-col justify-end gap-2 h-full">
          <h3 class="text-[#CBFCC3] !font-bold text-[22px] leading-[16.8px]">
            {{ i.name }}
          </h3>
          <div
            class="text-[#FAFAFA80] py-[4px] px-[8px] rounded-full bg-[#FAFAFA66] !text-[#CBFCC3] text-[10px] w-fit border-[0.4px]"
          >
            5 topics
          </div>
        </div>
      </button>
      <div class="flex flex-col gap-[16px] w-full">
        <button
          @click="goto()"
          v-for="i in modules.slice(3, 5)"
          :key="i.name"
          class="flex flex-col gap-[16px] h-[20vh] bg-brand p-4 object-cover bg-no-repeat bg-cover overflow-hidden rounded-[16px] w-full"
          :style="{ backgroundImage: `url(${i.image})` }"
        >
          <div class="flex flex-col justify-end gap-2 h-full">
            <h3 class="text-[#CBFCC3] !font-bold text-[22px] leading-[16.8px]">
              {{ i.name }}
            </h3>
            <div
              class="text-[#FAFAFA80] py-[4px] px-[8px] rounded-full bg-[#FAFAFA66] !text-[#CBFCC3] text-[10px] w-fit border-[0.4px]"
            >
              5 topics
            </div>
          </div>
        </button>
      </div>
    </div>
    <div class="flex flex-row gap-[16px] w-full">
      <div class="flex flex-col gap-[16px] w-full">
        <button
          @click="goto()"
          v-for="i in modules.slice(1, 3)"
          :key="i.name"
          class="flex flex-col gap-[16px] h-[20vh] bg-brand p-4 relative object-cover bg-no-repeat bg-cover overflow-hidden rounded-[16px] w-full"
          :style="{ backgroundImage: `url(${i.image})` }"
        >
          <UIIconTag v-if="pro" class="absolute -top-1 right-0" />

          <div class="flex flex-col justify-end gap-2 h-full">
            <h3 class="text-[#CBFCC3] !font-bold text-[22px] leading-[16.8px]">
              {{ i.name }}
            </h3>
            <div
              class="text-[#FAFAFA80] py-[4px] px-[8px] rounded-full bg-[#FAFAFA66] !text-[#CBFCC3] text-[10px] w-fit border-[0.4px]"
            >
              5 topics
            </div>
          </div>
        </button>
      </div>
      <div class="flex flex-col gap-[16px] w-full">
        <button
          @click="goto()"
          v-for="i in modules.slice(5, 7)"
          :key="i.name"
          class="flex flex-col gap-[16px] h-[20vh] bg-brand p-4 object-cover bg-no-repeat bg-cover overflow-hidden rounded-[16px] w-full"
          :style="{ backgroundImage: `url(${i.image})` }"
        >
          <div class="flex flex-col justify-end gap-2 h-full">
            <h3 class="text-[#CBFCC3] !font-bold text-[22px] leading-[16.8px]">
              {{ i.name }}
            </h3>
            <div
              class="text-[#FAFAFA80] py-[4px] px-[8px] rounded-full bg-[#FAFAFA66] !text-[#CBFCC3] text-[10px] w-fit border-[0.4px]"
            >
              5 topics
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import module1 from "~/assets/module/module1.png";
import module2 from "~/assets/module/module2.png";
import module3 from "~/assets/module/module3.png";
import module4 from "~/assets/module/module4.png";
import module5 from "~/assets/module/module5.png";
import module6 from "~/assets/module/module6.png";
import module7 from "~/assets/module/module7.png";
const router = useRouter();

const modules = ref([
  {
    image: module1,
    name: "Web3 Foundation",
    pro: true,
    topics: 5,
  },
  {
    image: module2,
    name: "Blockchain Basics",
    pro: true,
    topics: 5,
  },
  {
    image: module3,
    name: "Ethereum Developer Program",
    pro: true,
    topics: 5,
  },
  {
    image: module4,
    name: "Blockchain and Cryptocurrency Explained",
    pro: true,
    topics: 5,
  },
  {
    image: module5,
    name: "Mastering DeFi and Web3",
    pro: true,
    topics: 5,
  },
  {
    image: module6,
    name: "Introduction to Web3",
    pro: true,
    topics: 5,
  },
  {
    image: module7,
    name: "Certified Blockchain Developer",
    pro: true,
    topics: 5,
  },
]);
const goto = () => {
  router.push({
    name: "course-details",
  });
};
</script>
