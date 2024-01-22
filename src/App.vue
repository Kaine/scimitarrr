<template>
  <main>
    <!-- <div class="text-sm flex">
      <ul class="text-white ml-auto">
        <router-link tag="li" class="bg-gray-700 px-5 py-2 rounded-l hover:bg-gray-900" to="/">Leveling</router-link>
        <router-link tag="li" class="bg-gray-700 px-5 py-2 rounded-r hover:bg-gray-900" to="items">Items</router-link>
      </ul>
    </div> -->
    <!-- <div class="columns-1 xl:columns-2"> -->

    <RouterView/>
  </main>
</template>

<script setup lang="ts">
  import { RouterView } from 'vue-router'
</script>


<!-- Pearl EV = 4 * 150 * 0.015 + 2 * 150 * 0.05 + 150 * 0.535 - 52 * 0.075 = 102.35 in 24h on avg -->
<!-- Merchant EV = 5 * 164 * 0.035 + 2.5 * 164 * 0.07 + 164 * 0.35 - 52 * 0.15 = 107 in 24h on avg -->
