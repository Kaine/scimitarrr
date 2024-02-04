import { computed, reactive, ref } from 'vue'
import { FM_AVATARS, LVLUP_COST_GUARANTEED, LVLUP_COST_RISK } from './Constants'

export const teamTotalBootyCost = computed(() => {
  return reaversCollection.reavers.reduce((sum, reaver) => {
    return sum += reaver.totalBootyCost
  }, 0)
})

interface Reaver {
  id: number
  levelFrom: number
  levelTo: number
  totalBootyCost: number
  image: string
}

const _reavers: Reaver[] = []
const _avatars: number[] = []

export const reaversCollection = reactive({
  avatars: _avatars,
  reavers: _reavers,
  id: 0,
  maxReavers: 200,
  levelType: 'risk',
  total: 0,

  add(count: number = 1) {
    const from = 1, to = 8

    for (let i = 0; i < count; i++) {
      if (this.reavers.length < this.maxReavers) {
        let reaver: Reaver = {
          id: this.id++,
          levelFrom: from,
          levelTo: to,
          totalBootyCost: this.calcBootyCost(from, to),
          image: this._pickAvatar()
        }
        this.reavers.push(reaver)
      } else {
        // error too much reavers
      }
    }

  },
  _pickAvatar() {
    if (this.avatars.length == 0) {
      this.avatars = Array.from(FM_AVATARS).sort(() => Math.random() - 0.5)
    }

    const idx = Math.floor(Math.random()*this.avatars.length)
    const ava = this.avatars.splice(idx, 1).toString()

    return ava
  },

  remove(id: number) {
    const index = this.reavers.findIndex(r => r.id === id)
    this.reavers.splice(index, 1)
  },

  calcBootyCost(from: number, to: number) {
    let costTable = reaversCollection.levelType == 'risk' ? LVLUP_COST_RISK : LVLUP_COST_GUARANTEED

    let cost = 0
    for (let i = from; i < to; i++) {
      cost += costTable[i]
    }
    return cost
  },

  setLevelToForAll(level: number) {
    this.reavers.forEach(reaver => {
      reaver.levelTo = level
      reaver.totalBootyCost = this.calcBootyCost(reaver.levelFrom, level)
    })
  },
  setLevelFromTo(levelFrom: number, levelTo: number) {
    this.reavers.forEach(reaver => {
      reaver.levelFrom = levelFrom
      reaver.levelTo = levelTo
      reaver.totalBootyCost = this.calcBootyCost(levelFrom, levelTo)
    })
  }
})
