import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export default function(subMenu) {
  const store = useStore()
  
  const device = computed(() => {
    return store.state.app.device
  })

  const fixBugIniOS = () => {
    const $subMenu = subMenu
    if ($subMenu) {
      const handleMouseleave = $subMenu.handleMouseleave
      $subMenu.handleMouseleave = (e) => {
        if (device.value === 'mobile') {
          return
        }
        handleMouseleave(e)
      }
    }
  }

  onMounted(() => {
    fixBugIniOS()
  })
}
