<template>
  <div class="font-bold text-gray-700 bg-white bg-opacity rounded-t p-5 mt-6 border-b first:rounded first:mt-0">
    <div class="flex justify-evenly items-center text-center rounded">

      <div class="flex gap-5 w-1/2 items-center">
        <img :src="`reavers/${avatar}.png`" class="rounded-md max-h-20">
        <div class="flex flex-col text-left">
          <p class="font-light text-lg">{{ name }}</p>
          <p class="font-semibold text-xl md:text-2xl">{{ reaversCount.toLocaleString() }}</p>
        </div>
      </div>
      <div class="flex flex-col w-1/4">
        <span class="font-light text-xs text-gray-600">island 2</span>
        <p class="text-2xl md:text-3xl">{{ islandTwoPercentage }}<sup class="ml-1 text-sm text-gray-500">%</sup></p>
        <p class="text-sm font-light text-gray-500">{{ islandTwoCount.toLocaleString() }}</p>
      </div>
      <div class="flex flex-col w-1/4">
        <div v-if="islandThreeCount == 0">
          <span class="font-light text-xs text-gray-600">island 3</span>
          <p class="text-2xl md:text-3xl">-</p>
          <p class="text-sm font-light text-gray-500">&nbsp;</p>
        </div>
        <div v-else>
          <span class="font-light text-xs text-gray-600">island 3</span>
          <p class="text-2xl md:text-3xl">{{ islandThreePercentage }}<sup class="ml-1 text-sm text-gray-500">%</sup></p>
          <p class="text-sm font-light text-gray-500">{{ islandThreeCount.toLocaleString() }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
	import { defineComponent } from 'vue'
</script>

<script lang="ts">
	export default defineComponent({
		props: ['reavers', 'name', 'avatar'],
    computed: {
      reaversCount() {
        return this.reavers.count
      },
      islandTwoCount() {
        return this.reavers.island_2
      },
      islandTwoPercentage() {
        return ((100 / this.reaversCount) * this.reavers.island_2).toFixed(1)
      },
      islandThreeCount() {
        return this.reavers.island_3
      },
      islandThreePercentage() {
        return ((100 / this.reaversCount) * this.reavers.island_3).toFixed(1)
      },
      level_VIII() {
        return this.reavers.level_8
      },
      level_XV() {
        return this.reavers.level_15
      },
      level_XX() {
        return this.reavers.level_20
      },
      level_VIII_percent() {
        return ((this.level_VIII / this.reaversCount) * 100.0).toFixed(2)
      },
      level_XV_percent() {
        return ((this.level_XV / this.reaversCount) * 100.0).toFixed(2)
      },
      level_XX_percent() {
        return ((this.level_XX / this.reaversCount) * 100.0).toFixed(2)
      }
    }
  })
</script>
