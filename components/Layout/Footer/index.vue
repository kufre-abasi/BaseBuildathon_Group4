<template>
  <footer class="bg-brand text-white lg:pt-12">
    <div class="flex flex-col lg:flex-row justify-between bg-[#092144]">
      <div
        class="container py-14 flex lg:flex-row flex-col !px-4 gap-10 items-center justify-between"
      >
        <div class="lg:w-auto w-full flex justify-start">
          <img
            src="@/assets/web3school.svg"
            alt="THE BaseBuildathon_Group4 LOGO"
            class="h-[73px] object-cover"
          />
        </div>
        <div class="flex flex-wrap lg:flex-row !font-Poppins gap-[54px]">
          <div>
            <h5
              class="text-xl font-semibold lg:text-[18px] text-[14px] !mb-[14px] lg:!mb-[23px]"
            >
              Company
            </h5>
            <ul class="flex flex-col gap-[14px] lg:gap-[23px]">
              <li>
                <NuxtLink to="/">
                  <span
                    class="lg:text-[16px] text-[14px] leading-[16px] font-normal"
                    >About</span
                  >
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">
                  <span
                    class="lg:text-[16px] text-[14px] leading-[16px] font-normal"
                    >Contact</span
                  ></NuxtLink
                >
              </li>
            </ul>
          </div>
          <div>
            <h5
              class="text-xl font-semibold lg:text-[18px] !mb-[14px] lg:!mb-[23px]"
            >
              Legal
            </h5>
            <ul class="flex flex-col gap-[14px] lg:gap-[23px]">
              <li>
                <NuxtLink to="/">
                  <span
                    class="lg:text-[16px] text-[14px] leading-[16px] font-normal"
                    >Privacy Policy</span
                  ></NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/">
                  <span
                    class="lg:text-[16px] text-[14px] leading-[16px] font-normal"
                    >Terms of Use</span
                  ></NuxtLink
                >
              </li>
            </ul>
          </div>
          <div>
            <h5
              class="text-xl font-semibold lg:text-[18px] !mb-[14px] lg:!mb-[23px]"
            >
              Quick Links
            </h5>
            <ul class="flex flex-col gap-[14px] lg:gap-[23px]">
              <li>
                <NuxtLink to="/">
                  <span
                    class="lg:text-[16px] text-[14px] leading-[16px] font-normal"
                    >FAQs</span
                  ></NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/">
                  <span
                    class="lg:text-[16px] text-[14px] leading-[16px] font-normal"
                    >More Enquiries</span
                  ></NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="flex lg:w-[30%] w-full">
          <div
            class="rounded-[10px] bg-[#FFFFFF] w-full flex flex-col gap-[17px] p-[23px]"
          >
            <UIInputLabel
              class="text-[16px] !font-bold font-Inter text-[#222222]"
              >Join Our Newsletter</UIInputLabel
            >
            <div class="flex lg:flex-row flex-col relative">
              <input
                v=""
                type="text"
                class="lg:bg-[#E4E4E4] bg-[#FFFFFF] text-black !outline-none p-4 lg:py-2 lg:px-4 lg:border-[0px] border-[1px] lg:border-gray-0 border-gray-400 lg:mb-0 mb-4 text-sm rounded-md w-full lg:rounded-r-none"
                placeholder="Your email address"
              /><button
                class="bg-[#0099C9] px-8 md:px-4 py-4 font-semibold text-gray-100 rounded-md lg:rounded-l-none"
              >
                Subscribe
              </button>
            </div>
            <p class="text-[#2F2F2F] text-[14px] leading-[19.6px] font-Inter">
              Sign up for our newsletter and be the first to know about our
              offers, campaigns and many more.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-brand px-4">
      <div
        class="font-Mulish flex flex-col justify-center items-center text-center py-8"
      >
        <span class="text-[14px] flex items-center leading-[19.6px] gap-2">
          © 2024 BaseBuildathon_Group4 Investment Nigeria Limited. All rights
          reserved.
        </span>
      </div>
    </div>
  </footer>
</template>
