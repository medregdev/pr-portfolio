<template>
  <section class="lg:p-16">
    <header class="text-center">
      <h3 class="text-4xl font-bold text-primary dark:text-white">Education</h3>
    </header>
    <ul class="mt-10 space-y-8">
      <li
        class="w-full rounded-xl shadow-lg border bg-gradient-to-t to-[#acac39] from-[#1f1e1c99]"
        v-for="(item, index) in Education"
        :key="index"
      >
        <article
          class="flex flex-col lg:flex-row items-center lg:items-start rounded-[12px] bg-primary mt-[3px] mx-[3px] p-6 md:p-8 lg:p-10"
        >
          <figure class="w-full lg:w-1/4 flex justify-center lg:justify-start mb-4 lg:mb-0">
            <Icon
              icon="hugeicons:university"
              class="text-4xl md:text-6xl lg:text-7xl text-secondary"
            />
          </figure>
          <section class="w-full lg:w-3/4 lg:pl-4 text-center lg:text-left">
            <header>
              <h3 class="text-xl md:text-2xl font-semibold uppercase text-secondary">
                {{ item.school }}
              </h3>
            </header>
            <p class="text-sm md:text-base text-white">{{ item.degree }}</p>
            <p class="text-sm md:text-base text-white">{{ item.duration }}</p>
          </section>
        </article>
      </li>
    </ul>
  </section>
</template>
<script setup>
import { ref } from 'vue'
const Education = ref([
  {
    duration: '04/2025-10/2025',
    school: 'CADT',
    degree: 'Software Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    duration: '08/2011-05/2014',
    school: 'University of Technology',
    degree: 'Bachelor of Science in Computer Science',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  // {
  //   duration: '06/2014-12/2016',
  //   school: 'Institute of Advanced Studies',
  //   degree: 'Master of Information Technology',
  //   description:
  //     'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  // },
  // {
  //   duration: '01/2017-12/2019',
  //   school: 'Global Tech University',
  //   degree: 'PhD in Computer Science',
  //   description:
  //     'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  // },
  // {
  //   duration: '01/2020-Present',
  //   school: 'Online Learning Platform',
  //   degree: 'Full Stack Web Development',
  //   description:
  //     'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
  // },
])
</script>