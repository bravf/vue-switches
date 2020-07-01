const VueSwitchesMap = {
  // switchesKey: {
  //   value: false,
  //   on: () => {},
  //   off: () => {},
  // }
}
export const VueSwitches = {
  name: 'VueSwitches',
  props: {
    switchesKey: String,
    initValue: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
      default: 'div',
    },
  },
  data () {
    return {
      switches: null,
    }
  },
  methods: {
    createSwitches () {
      const switches = {
        value: this.initValue,
        on: () => {
          switches.value = true
        },
        off: () => {
          switches.value = false
        },
        toggle: () => {
          switches.value = !switches.value
        }
      }

      return switches
    },
    getSwitches () {
      if (this.switchesKey) {
        if (this.switchesKey in VueSwitchesMap) {
          this.switches = VueSwitchesMap[this.switchesKey]
        }
        else {
          this.switches = VueSwitchesMap[this.switchesKey] = this.createSwitches()
        }
      }
      else  {
        this.switches = this.createSwitches()
      }
    },
    getVNode (h) {
      const switches = this.switches
      if (this.$scopedSlots.default) {
        const $node = this.$scopedSlots.default({
          ...switches,
        })
        if ($node && ($node.length > 1 || !$node[0].tag)) {
          return h(this.tag, $node)
        }
        return $node
      }
      return null
    }
  },
  render (h) {
    return this.getVNode(h)
  },
  created () {
    this.getSwitches()
  }
}