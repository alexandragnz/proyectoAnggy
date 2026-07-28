<template>
    <section class="max-w-6xl px-4 py-15 m:py-12 mx-auto text-center">
        <h1 class=" text-amber-100 px-5 ">Nuestra Historia: Pasión, Detalle y Confección en el Corazón de Santiago</h1>
        <p class=" text-amber-50">Tras una valiosa trayectoria en el emprendimiento, Anggy redescubrió en el arte de la costura su auténtica pasión.

Anggy Costuras nace como un taller de confección y alta sastrería con una visión integral, concebido como un espacio donde la atención al detalle y la vocación de servicio son la prioridad.

Cada ajuste, basta y confección se ejecuta con la máxima dedicación, con el propósito de otorgar una nueva vida a cada prenda y devolver a nuestros clientes el confort, la elegancia y la confianza a través de su vestuario.</p>
    <!-- Galería grid: solo desktop -->
  <div class="hidden m:grid galeria-grid">
    <img :src="img1" alt="Anggy trabajando en el taller" class="galeria-img" />
    <img :src="img2" alt="Interior de la tienda Anggy Costuras" class="galeria-img" />
    <img :src="img3" alt="Detalle de confección artesanal" class="galeria-img" />
  </div>

  <!-- Slider automático: solo mobile -->
  <div class="m:hidden relative w-full h-50 overflow-hidden rounded-lg">
    <Transition name="fade" mode="out-in">
      <img
        :key="imagenActual"
        :src="imagenes[imagenActual].src"
        :alt="imagenes[imagenActual].alt"
        class="w-full  h-50 w-30 object-cover object-center rounded-lg"
      />
    </Transition>

  </div>
    </section>
    <section class="pb-15 max-w-6xl  mx-auto text-center">
      <h2 class="text-amber-100 pb-5 ">Misión</h2>
      <p class=" text-amber-50">Brindar un servicio integral de modistería y sastrería de alta calidad en el corazón de Santiago, distinguido por la rigurosidad en los detalles, la excelencia técnica y una cálida atención personalizada.
Nos dedicamos a transformar cada requerimiento textil mediante soluciones especializadas y creativas, devolviendo la armonía, el calce perfecto y la distinción a cada prenda, para convertir la experiencia del vestir en un auténtico estado de confort y bienestar.</p>
      <h2 class="text-amber-100 px-5 ">Visión</h2>
      <p class=" text-amber-50">Consolidarnos en Santiago como el taller de referencia en modistería y alta sastrería, reconocido por su excelencia artesanal, innovación y maestría técnica en la confección e intervención de textiles nobles y materiales complejos, como el cuero y la pluma.
Aspiramos a liderar un modelo de emprendimiento con sentido humano y sostenible, donde cada puntada sea reflejo de precisión, durabilidad y un compromiso genuino con el valor del vestir impecable y el bienestar de nuestra comunidad.</p>
    </section>
    <section class="bg-primary-dark p-15 w-full  mx-auto text-center">
      <h3 class="text-amber-100 pb-5">Estamos a pasos del metro plaza de Armas.</h3>
      <h4 class=" text-amber-50">Encuéntranos en Huérfanos #903 <br>
Diagonal pasaje Matte local 965-967 comuna de Santiago.<br>
Teléfono: 9 89014744.</h4>
<a href="./servicios" class="items-center bg-transparent hover:bg-hover hover:text-amber-950 text-amber-50 border-2 border-hover gap-3 px-5 py-1.5 rounded-2xl text-sm font-medium transition no-underline"> Conoce nuestros servicios aquí</a>

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
