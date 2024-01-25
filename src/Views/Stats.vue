<template>
  <h1 class="text-white text-lg mb-3">Reavers Stats / <span class="font-semibold">23.01.2024 - 25.01.2024</span></h1>
  <div>
    <StatsPanel :avatar="9949" :reavers="ReaversNewJSON.oneone" :name="'1/1'"/>
    <StatsPanel :avatar="13" :reavers="ReaversNewJSON.fm" :name="'First Mate'"/>
    <StatsDetails :oldData="ReaversJSON.fm" :newData="ReaversNewJSON.fm"/>
    <StatsPanel :avatar="1" :reavers="ReaversNewJSON.qm" :name="'Quarter Master'"/>
    <StatsDetails :oldData="ReaversJSON.qm" :newData="ReaversNewJSON.qm"/>
  </div>
</template>

<script setup lang="ts">
  import ReaversJSON from '../oldData.json'
  import ReaversNewJSON from '../newData.json'
  import StatsPanel from './StatsPanel.vue'
  import StatsDetails from './StatsDetails.vue'
</script>
