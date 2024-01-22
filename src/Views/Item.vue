<template>
  <div class="p-3 rounded mb-3 bg-white bg-opacity-90">
    <div class="flex gap-x-2">
      <div class="flex flex-none w-16 h-16 justify-center items-center">
        <img class="w-14 h-14 rounded bg-gray-200" :src="`../src/assets/items/${item.image}.png`">
      </div>
      <div class="flex flex-grow items-center gap-5">
        <h2>{{ item.name }}</h2>
      </div>
    </div>
    <div class="" v-for="variant in item.variants">
      <div class="">
        <h2>{{ variant.rarity }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
	import { defineComponent } from 'vue'
</script>

<script lang="ts">
	export default defineComponent({
		props: ['item'],
		methods: {
			_xc() {}
		}
})
</script>
