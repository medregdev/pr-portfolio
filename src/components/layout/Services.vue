<template>
  <section id="services" class="relative text-white mt-32">
    <SectionHeader title="My Services" />
    <div
      class="mt-20 py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
    >
      <article class="px-[12px] mb-[24px]" v-for="element in services" :key="element.id">
        <div
          class="mt-[30px] relative flex flex-col justify-center text-center rounded-[30px] border border-secondary dark:bg-[#ffffff29] bg-primary"
          data-aos="fade-up"
          :data-aos-delay="element.id * 100"
        >
          <div class="mt-[-30px] flex justify-center relative">
            <div class="mt-[-7px] p-[20px] relative bg-secondary rounded-[50%]">
              <span
                class="h-[60px] w-[60px] m-auto border-[1px] border-solid border-primary absolute top-[8px] left-[8px] rounded-[50%] inline-block z-[5]"
              ></span>
              <img :src="element.icon" alt="services" class="h-[35px] w-[35px] relative z-[1]" />
            </div>
          </div>

          <div class="p-[30px]">
            <h3 class="uppercase font-semibold text-secondary text-base">{{ element.title }}</h3>
            <p class="text-[14px] leading-[20px] text-white tracking-[0.03rem]">
              {{ element.description }}
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'
import SectionHeader from '@/components/UI/SectionHeader.vue'

const services = ref([
  {
    id: 1,
    title: 'Web Development',
    description: 'Building responsive and modern websites using the latest technologies.',
    icon: 'https://img.icons8.com/ios-filled/100/daedla/google-code.png',
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Creating user-friendly mobile applications for both Android and iOS.',
    icon: 'https://img.icons8.com/?size=160&id=vd5lbbAWV0Bq&format=png',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Designing intuitive user interfaces and enhancing user experience.',
    icon: 'https://img.icons8.com/?size=160&id=Jp8LLR99ne1m&format=png',
  },
  {
    id: 4,
    title: 'Database Administrator',
    description: 'Managing and optimizing databases for performance and security.',
    icon: 'https://img.icons8.com/?size=160&id=B0vuqxJA1C0b&format=png',
  },
  {
    id: 5,
    title: 'Content Creation',
    description: 'Crafting engaging content for blogs, websites, and social media.',
    icon: 'https://img.icons8.com/ios-filled/100/daedla/content.png',
  },
  {
    id: 6,
    title: 'DevOps',
    description: 'Implementing CI/CD pipelines and automating deployment processes.',
    icon: 'https://img.icons8.com/?size=100&id=2zyvaojJtgOA&format=png',
  },
])
</script>