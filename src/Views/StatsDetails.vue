<template>
  <div class="font-medium text-gray-600 bg-white bg-opacity-95 rounded-b p-4 grid grid-cols-2 md:grid-cols-4 last:mb-20">
    <div v-for="level in KEY_LEVELS" :class="[ level == 15 ? 'text-gray-700' : '', 'text-center rounded m-1 px-3 py-2']">
      <span class="font-light text-xs">Level {{ level }}</span>
      <p class="text-2xl md:text-3xl">{{ countForLevel(level).toLocaleString() }}
        <!-- <sup class="text-xs bg-opacity-20 px-1.5 py-1 rounded" v-if="(level == 15) || (level == 20) && incrementForLevel(level) != 0" :class="incrementClass(incrementForLevel(level))">{{ incrementForLevel(level) > 0 ? '+' : null }}{{ incrementForLevel(level) }}</sup> -->
      </p>
      <span class="font-medium text-sm">{{ percentOfLevel(level) }}%</span>
    </div>
  </div>
</template>

<script setup lang="ts">
	import { defineComponent } from 'vue'
	import { KEY_LEVELS } from '@/components/Constants'
</script>

<script lang="ts">
	export default defineComponent({
		props: ['oldData', 'newData'],
		methods: {
			countForLevel(level:number) {
        return this.newData[`level_${level}`]
      },
			countForLevelOld(level:number) {
        return this.oldData[`level_${level}`]
      },
      percentOfLevel(level:number) {
        return ((this.countForLevel(level) / this.count) * 100).toFixed(0)
      },
      incrementForLevel(level:number) {
        return this.countForLevel(level) - this.countForLevelOld(level)
      },
      incrementClass(increment:number) {
        return increment > 0 ? 'text-green-700 bg-green-500' : 'text-red-600 bg-red-500'
      },
		},
    computed: {
      count() {
        return this.newData.count
      }
    }
  })
</script>
