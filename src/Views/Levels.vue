<template>
  <h1 class="text-white text-lg">Leveling</h1>
  <Suspense>
    <Costs :key="reaversCollection.total"/>
    <template #fallback>
      <div class="font-normal text-gray-800 text-center uppercase flex justify-evenly bg-white py-4 my-3 space-x-5 rounded">
        <div>
          <p class="text-2xl py-5">getting prices</p>
        </div>
      </div>
    </template>
  </Suspense>

  <div class="mb-10">
    <div class="flex flex-row items-center">
      <div class="basis-1/2">
        <!-- <button @click="reaversCollection.add()" type="button" class="px-6 py-2 bg-sky-700 text-white rounded-b hover:bg-sky-800 focus:outline-none">Add</button> -->
      </div>
      <div class="basis-1/2">
        <div class="bg-white px-8 py-2 rounded-b">
          <div class="flex justify-evenly">
            <div class="flex items-center me-6">
              <input id="inline-radio" type="radio" value="risk" v-model="reaversCollection.levelType" class="w-4 h-4 border-gray-300">
              <label for="inline-radio" class="ms-2 text-sm font-medium text-gray-900 hover:cursor-pointer">Risk</label>
            </div>
            <div class="flex items-center">
              <input id="inline-2-radio" type="radio" value="guaranteed" v-model="reaversCollection.levelType" class="w-4 h-4 border-gray-300">
              <label for="inline-2-radio" class="ms-2 text-sm font-medium text-gray-900 hover:cursor-pointer">Guaranteed</label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex p-2 mt-5 gap-x-2 bg-white text-white text-sm rounded">
      <button @click="reaversCollection.setLevelFromTo(8, 15)" type="button" class="px-5 py-2 bg-gray-700 rounded hover:bg-gray-800 focus:outline-none">8 → 15</button>
      <button @click="reaversCollection.setLevelFromTo(15, 20)" type="button" class="px-5 py-2 bg-gray-700 rounded hover:bg-gray-800 focus:outline-none">15 → 20</button>
      <div class="flex-grow"></div>
      <button @click="reaversCollection.setLevelToForAll(15)" type="button" class="px-5 py-2 bg-gray-700 rounded hover:bg-gray-800 focus:outline-none">→ 15</button>
      <button @click="reaversCollection.setLevelToForAll(20)" type="button" class="px-5 py-2 bg-gray-700 rounded hover:bg-gray-800 focus:outline-none">→ 20</button>
    </div>

    <div v-if="Number(reaversCollection.reavers.length) > 0" class="bg-red-700 p-2 text-gray-100 text-xs rounded mt-1">Click on avatar to remove reaver!</div>
    <button @click="reaversCollection.add()" type="button" class="mt-2 px-6 py-2 bg-sky-700 text-white rounded hover:bg-sky-800 focus:outline-none">Add Reaver</button>
  </div>

  <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-10">
    <div v-for="reaver in reaversCollection.reavers" v-bind:key="reaver.id">
      <ReaversForm :reaver="reaver" :key="reaversCollection.levelType" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { reaversCollection } from '@/components/ReaversCollection'
  import Costs from '@/components/Costs.vue'
  import ReaversForm from '@/components/ReaverForm.vue'
</script>

<script lang="ts">
  reaversCollection.add(1)
</script>
