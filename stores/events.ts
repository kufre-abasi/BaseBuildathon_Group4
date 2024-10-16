import { defineStore } from 'pinia';
import Blockchain_Summit2024 from '@/assets/img/events/IBS.jpg';
import Moov_tech_Showcase from '@/assets/img/events/moovbootcamp.jpg';
import TeamBuildingRetreat from '@/assets/img/events/bitgetMoov.jpg';

export const eventStore = defineStore('eventStore', () => {
  const event_data = ref([
    {
        id: "1",
      image: Blockchain_Summit2024,
      title: `Ibom Blockchain Summit 2024`,
      time: '6 - 7, March 2024',
      memo: ` We staged the biggest Blockchain Summit in the South, exploring the future of blockchain in Africa, where industry leaders discussed adoption, innovation, and regulatory frameworks in Nigeria's blockchain ecosystem.
`
    },
    {
        id: "2",
      image: Moov_tech_Showcase,
      title: `MooV Blockchain BootCamp`,
      time: '19 - 22, August 2024',
      memo: `We hosted the first-ever Blockchain BootCamp in the south, providing hands-on blockchain development training for developers, entrepreneurs, and enthusiasts to build scalable blockchain solutions.
`
    },
    {
        id: "3",
      image: TeamBuildingRetreat,
      title: `Bitget Crypto and Trading Summit`,
      time: '9, September 2023',
      memo: `We partnered with Bitget Africa, one of the leading cryptocurrency exchange in the world, to host a Crypto and Trading Summit (CATS), featuring expert insights on trading strategies, market trends, and risk management through keynote speeches and panel discussions`
    }
  ]);

  return {
    event_data
  };
});
