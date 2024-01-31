<template>
  <h1 class="text-white text-lg mb-3">Reavers Stats</h1>
  <h1 class="text-white text-lg mb-3">
      <a target="_blank" href="https://t.me/solana_unibot?start=r-cyberwolf_ru-G8GWGhhfZmAFW8VtvB3mtULwiWC4noTaHp82si3QvcPv">LESGOH</a>


  </h1>
  <div class="font-bold text-gray-700 bg-white bg-opacity rounded p-3 mb-6 border-b first:rounded first:mt-0">
    <div class="flex justify-evenly items-center text-center rounded font-normal">
      <div class="flex flex-col w-1/2">
        <span class="font-light text-xs text-gray-600">Prev. Update</span>
        <p class="text-xl md:text-2xl">{{ new Date(ReaversJSON.date).toLocaleDateString() }}</p>
      </div>
      <div class="h-[50px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div>
      <div class="flex flex-col w-1/2">
        <span class="font-light text-xs text-gray-600">Last Update</span>
        <p class="text-xl md:text-2xl">{{ timeAgo(ReaversNewJSON.date) }}</p>
      </div>
    </div>
  </div>

  <div>
    <StatsPanel :avatar="9949" :reavers="ReaversNewJSON.oneone" :name="'1/1'"/>
    <StatsPanel :avatar="13" :reavers="ReaversNewJSON.fm" :name="'First Mate'"/>
    <StatsDetails :oldData="ReaversJSON.fm" :newData="ReaversNewJSON.fm"/>
    <StatsPanel :avatar="1" :reavers="ReaversNewJSON.qm" :name="'Quarter Master'"/>
    <StatsDetails :oldData="ReaversJSON.qm" :newData="ReaversNewJSON.qm"/>
  </div>
</template>

<script setup lang="ts">
  import { timeAgo } from '../components/Support'
  import ReaversJSON from '../oldData.json'
  import ReaversNewJSON from '../newData.json'
  import StatsPanel from './StatsPanel.vue'
  import StatsDetails from './StatsDetails.vue'
</script>
