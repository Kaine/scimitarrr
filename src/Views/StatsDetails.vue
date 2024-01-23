<template>
  <div class="font-medium text-gray-600 bg-white bg-opacity-95 rounded-b p-4 grid grid-cols-2 md:grid-cols-4 last:mb-20">
    <div v-for="level in LEVELS" :class="[ level == 15 ? 'text-sky-700' : '', 'text-center rounded m-1 px-3 py-2']">
      <span class="font-light text-xs">L{{ level }} / {{ percentOfLevel(level) }}%</span>
      <p class="text-2xl md:text-3xl">{{ countForLevel(level).toLocaleString() }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
	import { defineComponent } from 'vue'
	import { LEVELS } from '@/components/Constants'
</script>

<script lang="ts">
	export default defineComponent({
		props: ['reavers'],
		methods: {
			countForLevel(level:number) {
        return this.reavers[`level_${level}`]
      },
      percentOfLevel(level:number) {
        return ((this.countForLevel(level) / this.count) * 100).toFixed(0)
      }
		},
    computed: {
      count() {
        return this.reavers.count
      }
    }
  })
</script>
