<template>
  <h1 class="text-white text-lg mb-3">Items</h1>
  <div v-for="item in items">
    <Item :item="item"/>
  </div>
</template>

<script setup lang="ts">
  import { defineComponent } from 'vue'
  import Item from './Item.vue'
</script>

<script lang="ts">
	export default defineComponent({
    mounted() {},
    data() {
      return {
        items: [
          { type: 'luck', image: 'jar_of_dirt', name: 'Jar of Dirt',
            variants: [
              { rarity: 'Common', boost: 2.5 },
              { rarity: 'Uncommon', boost: 5 },
              { rarity: 'Rare', boost: 7.5 },
              { rarity: 'Epic', boost: 12.5 },
              { rarity: 'Legendary', boost: 17 }
            ]
          },
          { type: 'luck', image: 'bottle_of_rum', name: 'Empty Bottle of Rum',
            variants: [
              { rarity: 'Common', boost: 6 },
              { rarity: 'Uncommon', boost: 12.5 },
              { rarity: 'Rare', boost: 18.5 },
              { rarity: 'Epic', boost: 31 },
              { rarity: 'Legendary', boost: 41 }
            ]
          },
          { type: 'luck', image: 'pirate_codex', name: 'Pirate Codex',
            variants: [
              { rarity: 'Common', boost: 6 },
              { rarity: 'Uncommon', boost: 12.5 },
              { rarity: 'Rare', boost: 18.5 },
              { rarity: 'Epic', boost: 31 },
              { rarity: 'Legendary', boost: 41 }
            ]
          }
        ]
      }
    },
		methods: {
      _m() {}
		}
	})
</script>
