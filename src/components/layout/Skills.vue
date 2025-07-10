<template>
  <section class="mt-32" id="skills">
    <SectionHeader title="My Skills" />
    <div class="mt-20 flex justify-center">
      <ul class="flex flex-wrap justify-center items-center">
        <li
          ref="skillRefs"
          v-for="(skill, index) in skills"
          :key="index"
          :class="`mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t ${skill.bgGradient}`"
        >
          <div class="rounded-[12px] bg-primary mt-[3px] p-10 sm:p-12 md:p-5 text-center">
            <h3 class="font-bold text-[35px] text-white flex items-center justify-center">
              <Countup
                v-if="visibleItems[index]"
                :endVal="skill.percentage"
                :startVal="0"
                :duration="2"
              />
              %
            </h3>
            <p
              class="font-normal text-[12px] sm:text-[16px] w-[72px] sm:w-auto"
              :style="{ color: skill.textColor }"
            >
              {{ skill.title }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import SectionHeader from '@/components/UI/SectionHeader.vue'

const skills = ref([
  {
    id: 1,
    percentage: 98,
    title: 'Figma',
    bgGradient: 'to-[#acac39] from-[#1f1e1c99]',
    textColor: '#FFE600',
  },
  {
    id: 2,
    percentage: 95,
    title: 'Vue.js',
    bgGradient: 'to-[#4FC08D] from-[#1f1e1c99]',
    textColor: '#4FC08D',
  },
  {
    id: 3,
    percentage: 90,
    title: 'Tailwind CSS',
    bgGradient: 'to-[#06B6D4] from-[#1f1e1c99]',
    textColor: '#06B6D4',
  },
  {
    id: 4,
    percentage: 85,
    title: 'JavaScript',
    bgGradient: 'to-[#F7DF1E] from-[#1f1e1c99]',
    textColor: '#F7DF1E',
  },
  {
    id: 5,
    percentage: 80,
    title: 'HTML & CSS',
    bgGradient: 'to-[#E34F26] from-[#1f1e1c99]',
    textColor: '#E34F26',
  },
  {
    id: 6,
    percentage: 75,
    title: 'Git & GitHub',
    bgGradient: 'to-[#F05032] from-[#1f1e1c99]',
    textColor: '#F05032',
  },
  {
    id: 7,
    percentage: 70,
    title: 'Node.js',
    bgGradient: 'to-[#8CC84B] from-[#1f1e1c99]',
    textColor: '#8CC84B',
  },
  {
    id: 8,
    percentage: 95,
    title: 'PHP',
    bgGradient: 'to-[#306998] from-[#1f1e1c99]',
    textColor: '#306998',
  },
])

// Track visibility of items
const visibleItems = ref(skills.value.map(() => false))
const skillRefs = ref([])

// IntersectionObserver logic
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = skillRefs.value.indexOf(entry.target)
          if (index !== -1) {
            visibleItems.value[index] = true //Mark item as visible
          }
        }
      })
    },
    { threshold: 0.3 } //Trigger when 30% of the item is visible
  )

  // Observe each skill element
  skillRefs.value.forEach((el) => observer.observe(el))
})
</script>