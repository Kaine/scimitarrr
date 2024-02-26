<template>
  <h1 class="text-white text-lg">Stats</h1>
  <div class="flex">
    <div class="flex-none font-bold bg-white rounded px-4 py-2 mb-6 first:rounded first:mt-0">
      <span class="font-light text-sm text-gray-600 mr-1">Last update</span>
      <span class="font-medium text-gray-900">{{ timeAgo(ReaversNewJSON.date) }}</span>
    </div>
  </div>

  <div>
    <StatsPanel :avatar="13" :reavers="ReaversNewJSON.fm" :name="'First Mate'"/>
    <StatsDetails :oldData="ReaversJSON.fm" :newData="ReaversNewJSON.fm"/>
    <StatsPanel :avatar="1" :reavers="ReaversNewJSON.qm" :name="'Quarter Master'"/>
    <StatsDetails :oldData="ReaversJSON.qm" :newData="ReaversNewJSON.qm"/>
    <!-- <StatsPanel :avatar="9949" :reavers="ReaversNewJSON.oneone" :name="'1/1'"/> -->
  </div>
</template>

<script setup lang="ts">
  import { timeAgo } from '../components/Support'
  import ReaversJSON from '../oldData.json'
  import ReaversNewJSON from '../newData.json'
  import StatsPanel from './StatsPanel.vue'
  import StatsDetails from './StatsDetails.vue'
</script>
