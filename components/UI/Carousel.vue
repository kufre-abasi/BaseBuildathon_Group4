<template>
  <div>
    <div
      class="overflow-hidden hide-scrollbar flex flex-row w-full items-center justify-center gap-4 lg:!gap-10 mt-4 container overflow-x-auto"
    >
      <NuxtMarquee :speed="90" pauseOnClick pauseOnHover class="!w-screen">
        <div
          v-for="slide in team"
          :key="slide"
          class="bg-[#092144] rounded-[10px] w-[250px] mx-3 flex flex-col items-center border-[#FFFFFF21] border-[2px]"
        >
          <img
            class="lg:h-[300px] h-[280px] w-full object-cover object-top rounded-[10px]"
            :src="slide.image"
            alt=""
          />
          <div
            class="lg:p-[19px_17.45px_29.83px_30.56px] gap-[2px] p-[10px] h-[10vh] rounded-[10px] bg-[#092144] text-center flex flex-col justify-center items-center"
          >
            <span
              class="text-[#FFFFFF] lg:text-[18px] uppercase leading-[22.4px] font-Inter font-bold"
            >
              {{ slide.name }}
            </span>
            <h4
              class="text-[14px] leading-[21px] capitalize font-Inter font-normal text-[#FFFFFF]"
            >
              {{ slide.position }}
            </h4>
            <!-- <p class="text-[14px] lg:leading-[21px] font-normal text-[#FFFFFF]">
                Lorem ipsum dolor sit amet, consetetur sadipscingoslitr, sed diam nonumy
                clita
              </p> -->
          </div>
        </div>
      </NuxtMarquee>
    </div>
    <!-- <Carousel
      class="lg:block hidden"
      :itemsToShow="3.95"
      :wrapAround="true"
      :transition="500"
      :touchDrag="true"
      :mouseDrag="true"
      autoplay="3000"
    >
      <Slide v-for="slide in team" :key="slide">
        <div class="carousel__item !w-fit">
          <div
            class="bg-[#092144] rounded-[10px] w-[250px] flex flex-col items-center border-[#FFFFFF21] border-[2px]"
          >
            <img
              class="lg:h-[300px] h-[280px] w-full object-cover object-top rounded-[10px]"
              :src="slide.image"
              alt=""
            />
            <div
              class="lg:p-[19px_17.45px_29.83px_30.56px] gap-[2px] p-[10px] h-[10vh] rounded-[10px] bg-[#092144] text-center flex flex-col justify-center items-center"
            >
              <span
                class="text-[#FFFFFF] lg:text-[18px] leading-[22.4px] font-Inter font-bold"
              >
                {{ slide.name }}
              </span>
              <h4
                class="text-[14px] leading-[21px] capitalize font-Inter font-normal text-[#FFFFFF]"
              >
                {{ slide.position }}
              </h4>
]            </div>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel> -->
  </div>
</template>
<script setup>
import clinton from "@/assets/img/team/clinton.png";
import esty from "@/assets/img/team/esty.png";
import mag from "@/assets/img/team/mag.png";
import stella from "@/assets/img/team/stella.png";
import Manager from "@/assets/img/team/Manager.jpg";
import Raphina from "@/assets/img/team/Raphina.png";
import obo from "@/assets/img/team/obo.png";
import emem from "@/assets/img/team/emem.png";
import raph from "@/assets/img/team/raph.png";
import kufre2 from "@/assets/img/team/kufre2.jpg";
import sinach from "@/assets/img/team/sinach.jpeg";
import dola from "@/assets/img/team/dola.jpeg";
const team = [
  {
    image: esty,
    name: "⁠Akpan Esther Eddy",
    position: "Manager",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy clita",
  },

  {
    image: stella,
    name: "Stella James Iwot",
    position: "Chief Operations Officer",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy clita",
  },
  {
    image: mag,
    name: "Magdalene Anthony ",
    position: "public relations officer",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy clita",
  },

  {
    image: dola,
    name: "Dolapo Victor",
    position: "Head MOD I",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy clita",
  },
  {
    image: clinton,
    name: "Asam Clinton",
    position: "Head MOD II",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy clita",
  },
  {
    image: sinach,
    name: "Osinachi Gabriel",
    position: "Head of Operations/ Business Development ",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy clita",
  },
  {
    image: Raphina,
    name: "Rahimat  Usman Suave",
    position: "Chief Community Manager",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy clita",
  },
  {
    image: emem,
    name: "EMEM MOSES",
    position: "Social Network Service Manager",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy clita",
  },
  {
    image: kufre2,
    name: "Kufre-abasi Bassey",
    position: "Software Developer(Web)",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy clita",
  },

  {
    image: obo,
    name: "Obo ogban Okata",
    position: "Product/Graphics Designer",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy clita",
  },
  {
    image: raph,
    name: "Edeh Ralph Sunny",
    position: "Head of media",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy clita",
  },
  // {
  //   image: null,
  //   name: "Bamidele Anthony",
  //   position: "",
  //   description: "",
  // },
  // {
  //   image: null,
  //   name: "Ndifreke Ini Edet",
  //   position: "",
  //   description: "",
  // },
];
</script>
<style>
.carousel__slide,
.carousel__slide--clone {
  @apply !w-fit;
}
.carousel__item {
  color: black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel__icon {
  @apply text-white;
}
.carousel__slide {
  padding: 5px;
  @apply !w-fit;
}
.carousel__pagination-button,
.carousel__pagination-item {
  @apply after:bg-[#0099C9]/50 text-white;
}
.carousel__pagination-button--active {
  @apply after:bg-[#0099C9];
}
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 4px solid white;
  @apply rounded-full hover:bg-[#0099C9] text-brand hover:border-none;
}
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}
.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
