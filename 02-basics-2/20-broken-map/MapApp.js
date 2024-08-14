import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'MapApp',

  setup() {
    // Реактивная переменная для захвата пина
    const pinRef = ref(null);

    // Реактивные переменные для хранения координат метки
    let x = ref(0)
    let y = ref(0)
    

    /**
     * Обработчик клика по карте для установки координат метки
     * @param {MouseEvent} event
     */
    function handleClick(event) {
      x.value = event.offsetX
      y.value  = event.offsetY
    }

    // Следим за X и Y для установки нового положения
    watch([x, y], ([newX, newY]) => {
      // Находим метку и изменяем её положение
      pinRef.value.style.left = `${newX}px`
      pinRef.value.style.top = `${newY}px`
    })

    return {
      handleClick,
      pinRef,
    }
  },

  template: `
    <div class="map" @click="handleClick">
      <img class="map-image" src="./map.png" alt="Map" draggable="false" />
      <span ref="pinRef" class="pin">📍</span>
    </div>
  `,
})
