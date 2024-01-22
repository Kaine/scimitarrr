<template>
  <div class="rounded-md bg-white p-3">
    <div>
      <div class="flex justify-evenly relative">
        <img :src="`reavers/${reaver.image}.png`" class="rounded-md border-2" @click="remove()">
      </div>
      <div class="mt-2 text-gray-800 text-center flex justify-evenly space-x-2">
        <div class="flex-grow">
          <span class="font-light text-xs">FROM</span>
          <select class="w-full outline-none border bg-gray-50 text-gray-900 rounded block p-1 text-center" v-model="reaver.levelFrom" @change="calculateBootyCost()">
            <option v-for="level in LEVELS">{{ level }}</option>
          </select>
        </div>
        <div class="flex-grow">
          <span class="font-light text-xs">TO</span>
          <select class="w-full outline-none border bg-gray-50 text-gray-900 rounded block p-1 text-center" v-model="reaver.levelTo" @change="calculateBootyCost()">
            <option v-for="level in LEVELS">{{ level }}</option>
          </select>
        </div>
      </div>

      <div class="p-1 bg-black bg-opacity-5 rounded mt-3">
        <small class="text-center block text-xs">booty</small>
        <div class="text-center text-md">{{ lvlupBootyCost.toLocaleString() }}</div>
      </div>
      <!-- <div class="flex flex-none w-10 justify-end items-center">
        <button @click="remove()" type="button" class="w-8 h-8 text-gray-400 text-sm text-center bg-black bg-opacity-5 rounded hover:text-white hover:bg-red-700 focus:outline-none">X</button>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
  import { defineComponent } from 'vue'
  import { LEVELS, LVLUP_COST_RISK, LVLUP_COST_GUARANTEED } from './Constants'
  import { reaversCollection } from './ReaversCollection'
</script>

<script lang="ts">
	export default defineComponent({
    mounted() {
      this.calculateBootyCost()
    },
    props: ['reaver'],
		methods: {
      calculateBootyCost() {
        let costTable = reaversCollection.levelType == 'risk' ? LVLUP_COST_RISK : LVLUP_COST_GUARANTEED

        let cost = 0
        for (let i = Number(this.reaver.levelFrom); i < Number(this.reaver.levelTo); i++) {
          cost += costTable[i]
        }
        this.reaver.totalBootyCost = cost
      },
      remove() {
        reaversCollection.remove(this.reaver.id)
      }
		},
    computed: {
      lvlupBootyCost() {
        return this.reaver.totalBootyCost
      }
    }
	})
</script>
