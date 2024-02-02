<template>
  <div class="font-semibold text-gray-800 text-center flex justify-evenly bg-white py-4 space-x-5 rounded-t rounded-bl">
    <div>
      <span class="font-light text-xs">NFTs</span>
      <p class="text-2xl md:text-3xl">{{ reaversCollection.reavers.length }}</p>
    </div>
    <div @click="copyToClipboard(teamTotalBootyCost)" class="hover:cursor-pointer" title="Click to copy!">
      <span class="font-light text-xs">BOOTY</span>
      <p class="text-2xl md:text-3xl">{{ teamTotalBootyCost.toLocaleString() }}</p>
      <div class="font-light text-xs">{{ currency.booty.toFixed(7) }}</div>
    </div>
    <div @click="copyToClipboard(((teamTotalBootyCost * currency.booty) / currency.sol).toFixed(2))" class="hover:cursor-pointer" title="Click to copy!">
      <span class="font-light text-xs">SOL</span>
      <p class="text-2xl md:text-3xl">{{ ((teamTotalBootyCost * currency.booty) / currency.sol).toFixed(2) }}</p>
      <div class="font-light text-xs">{{ currency.sol.toFixed(2) }}</div>
    </div>
    <div class="hidden md:block">
      <span class="font-light text-xs">USDC</span>
      <p class="text-2xl md:text-3xl">{{ Math.round(teamTotalBootyCost * currency.booty).toLocaleString() }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { reaversCollection, teamTotalBootyCost } from './ReaversCollection'
  import { setWithExpiry, getWithExpiry } from './LS'

  let currency = getWithExpiry("currency")

  if (currency == null) {
    currency = await getCurrencyPrices()
    // 5 minutes 1000 * 60 * 5
    setWithExpiry("currency", currency, 1000 * 60 * 5)
  }

  async function copyToClipboard(text: any) {
    try {
      await navigator.clipboard.writeText(text)
    } catch (error) {
      console.log(error)
    }
  }

  async function getCurrencyPrices() {
    try {
      const options = {
        method: 'GET',
        headers: {'x-chain': 'solana', 'X-API-KEY': '053214dc13d148d9bffeed4f367221f6'}
      }

      const response = await fetch('https://public-api.birdeye.so/public/multi_price?list_address=So11111111111111111111111111111111111111112%2CbootyAfCh1eSQeKhFaDjN9Pu6zwPmAoQPoJWVuPasjJ', options)

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = (await response.json())

      return ({
        sol: result.data.So11111111111111111111111111111111111111112.value,
        booty: result.data.bootyAfCh1eSQeKhFaDjN9Pu6zwPmAoQPoJWVuPasjJ.value
      })
    } catch {

    }
  }
</script>
