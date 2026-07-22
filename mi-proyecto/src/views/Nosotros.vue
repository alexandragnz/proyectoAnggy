<template>
    <section class="py-10  w-full max-w-9/10 mx-auto text-center">
        <h1 class=" text-amber-100 px-5 ">Nuestra Historia: Pasión, Detalle y Confección en el Corazón de Santiago</h1>
        <p class=" text-amber-50">Tras recorrer distintos caminos como emprendedora, Anggy redescubrió en la costura su verdadera y más profunda pasión. Este taller es un espacio con enfoque integral y una profunda vocación de servicio. Cada ajuste, basta o confección se realiza con el firme propósito de ayudar al prójimo, devolviéndole la confianza y la comodidad a cada cliente a través de su ropa.</p>
    <!-- Galería grid: solo desktop -->
  <div class="hidden m:grid galeria-grid">
    <img :src="img1" alt="Anggy trabajando en el taller" class="galeria-img" />
    <img :src="img2" alt="Interior de la tienda Anggy Costuras" class="galeria-img" />
    <img :src="img3" alt="Detalle de confección artesanal" class="galeria-img" />
  </div>

  <!-- Slider automático: solo mobile -->
  <div class="m:hidden relative w-full h-64 overflow-hidden rounded-lg">
    <Transition name="fade" mode="out-in">
      <img
        :key="imagenActual"
        :src="imagenes[imagenActual].src"
        :alt="imagenes[imagenActual].alt"
        class="w-full h-50 w-30 object-cover rounded-lg"
      />
    </Transition>

  </div>
    </section>

</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import img1 from '../assets/img/nosotros1.png'
import img2 from '../assets/img/nosotros2.jpg'
import img3 from '../assets/img/nosotros3.png'
import img4 from '../assets/img/nosotrosmobile.png'
import img5 from '../assets/img/nosotrosmobile1.png'

const imagenes = [
  { src: img5, alt: 'Anggy trabajando en el taller' },
  { src: img2, alt: 'Interior de la tienda Anggy Costuras' },
  { src: img4, alt: 'Maquina de coser' },
]

const imagenActual = ref(0)
let intervalo = null

onMounted(() => {
  intervalo = setInterval(() => {
    imagenActual.value = (imagenActual.value + 1) % imagenes.length
  }, 3000)
})

onUnmounted(() => {
  clearInterval(intervalo)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
