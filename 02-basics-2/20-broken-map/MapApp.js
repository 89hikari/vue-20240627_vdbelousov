import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MapApp',

  setup() {
    // Реактивная переменная для захвата пина
    const pinRef = ref(null)

    // Реактивные переменные для хранения координат метки
    const x = ref(0)
    const y = ref(0)

    /**
     * Обработчик клика по карте для установки координат метки
     * @param {MouseEvent} event
     */
    function handleClick(event) {
      x.value = `${event.offsetX}px`
      y.value = `${event.offsetY}px`
    }

    const pinStyles = computed(() => ({ left: x.value, top: y.value }));

    return {
      handleClick,
      pinRef,
      pinStyles,
    }
  },

  template: `
    <div class="map" @click="handleClick">
      <img class="map-image" src="./map.png" alt="Map" draggable="false" />
      <span ref="pinRef" :style="pinStyles" class="pin">📍</span>
    </div>
  `,
})
