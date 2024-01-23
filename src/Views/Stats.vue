<template>
  <h1 class="text-white text-lg mb-3">Reavers Stats / 23.01.2024</h1>
  <div>
    <StatsPanel :avatar="9949" :reavers="reavers.oneone" :name="'1/1'"/>
    <StatsPanel :avatar="13" :reavers="reavers.fm" :name="'First Mate'"/>
    <StatsDetails :reavers="reavers.fm"/>
    <StatsPanel :avatar="1" :reavers="reavers.qm" :name="'Quarter Master'"/>
    <StatsDetails :reavers="reavers.qm"/>
  </div>
</template>

<script setup lang="ts">
  import { defineComponent } from 'vue'
  import StatsPanel from './StatsPanel.vue'
  import StatsDetails from './StatsDetails.vue'
  import ReaversJSON from '../reavers.json'
</script>

<script lang="ts">
	export default defineComponent({
    mounted() {},
    data() {
      return {
        reavers: ReaversJSON
      }
    }
	})
</script>
