<template>
  <div class=" max-w-6xl px-4 py-8  mx-auto ">
  <section class="seccion-contenido mx-auto p-3 rounded-lg bg-primary/90 rounded-2xl w-3/4">
  <h1 class="text-center text-primary-dark pt-1 ">Nuestros servicios</h1>
<div class="grid grid-cols-1 m:grid-cols-2 gap-6 m:gap-10 ">

  <div class="mx-auto order-1 m:order-2">
    <img
      :src="imagenNuestrosServicios"
      alt="Taller de costura Anggy"
      class="max-w-sm m:max-w-md h-56 s:h-72 m:h-96 m:w-5/6 object-cover rounded-t-full shadow-lg"
    />
  </div>

  <div class="max-w-xl rounded-2xl p-6 s:p-8 m:p-10 order-2 m:order-1 ">
    <p class=" text-sm s:text-base m:text-lg text-primary-dark">
      Dedicadas a dar vida a tus prendas favoritas o arreglar ese traje que tienes sin poder usar. Con años de experiencia en costura y confección, en Anggy Costuras trabajamos con dedicación y precisión en cada proyecto. Ya sea un ajuste sencillo o una transformación completa, ponemos nuestro oficio al servicio de tus prendas, garantizando resultados de calidad y un trato cercano en cada etapa.
    </p>
  </div>

</div>
  </section>
  <section class="py-16  w-3/4 mx-auto">
    <div class="contenedor">
      <h2 class=" text-white text-center mb-10">Lo que hacemos por ti</h2>

      <div class="grid grid-cols-1 m:grid-cols-2 gap-8">

        <!-- Columna izquierda - cards con scroll -->
        <div class="flex flex-col mx-auto gap-4 max-h-[650px] overflow-y-auto pr-2 servicios-scroll">
          <div
            v-for="servicio in servicios"
            :key="servicio.id"
            class="bg-primary rounded-2xl p-3 shadow-md text-center"
          >
            <img :src="servicio.icono" :alt="servicio.nombre" class=" mx-auto h-10 w-10 mb-3" />
            <h3 class="text-secondary font-semibold text-lg mb-1">{{ servicio.nombre }}</h3>
            <p class="text-primary-dark text-sm">{{ servicio.descripcion }}</p>
          </div>
        </div>

        <!-- Columna derecha - slider de imágenes -->
        <div class="relative w-full h-[600px] hidden md:block  overflow-hidden">
          <Transition name="fade" mode="out-in">
            <img
              :key="imagenActual"
              :src="imagenesSlider[imagenActual]"
              alt="Trabajo realizado en el taller"
              class=" h-full object-cover rounded-2xl"
            />
          </Transition>
        </div>

      </div>
    </div>
  </section></div>
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Servicios - Anggy costuras',
  meta: [
    { name: 'description', content: 'Arreglos de ropa, bastas, arreglos prendas de cuero y pluma y más en Santiago centro.' },
    { property: 'og:title', content: 'Servicios - Anggy costuras' },
    { property: 'og:description', content: 'Arreglos de ropa, ajustes y basta de ropa, arreglos prendas de cuero y pluma y más en Santiago centro.' },
  ]
})
import { ref, onMounted, onUnmounted } from 'vue'

// Imagen sección 1
import imagenNuestrosServicios from '../assets/img/anggymaquina.jpeg'

// Imágenes slider sección 2
import slider1 from '../assets/img/anggyservicios.png'
import slider2 from '../assets/img/anggyservicios2.png'
import slider3 from '../assets/img/anggyservicios3.png'

// Íconos servicios
import iconoTransformacion from '../assets/icons/reparar.png'
import iconoCuero from '../assets/icons/cuero.png'
import iconoPluma from '../assets/icons/pluma.png'
import iconoCremallera from '../assets/icons/cremallera.png'
import iconoBoton from '../assets/icons/boton.png'
import iconoClinica from '../assets/icons/costura.png'

const imagenesSlider = [slider1, slider2, slider3]
const imagenActual = ref(0)
let intervalo = null

onMounted(() => {
  intervalo = setInterval(() => {
    imagenActual.value = (imagenActual.value + 1) % imagenesSlider.length
  }, 3000)
})

onUnmounted(() => {
  clearInterval(intervalo)
})

const servicios = [
  {
    id: 1,
    nombre: 'Transformación de prendas',
    descripcion: 'Ajustamos, achicamos, agrandamos o rediseñamos según tus necesidades, para que tu prenda favorita vuelva a brillar.',
    icono: iconoTransformacion,
  },
  {
    id: 2,
    nombre: 'Trabajos en cuero',
    descripcion: 'Reparación de prendas y accesorios en cuero. Costuras reforzadas, ajustes de talla y arreglos especializados para un material que requiere manos expertas.',
    icono: iconoCuero,
  },
  {
    id: 3,
    nombre: 'Trabajos en pluma',
    descripcion: 'Confección y reparación de prendas con plumas y plumón. Un trabajo delicado que exige precisión, cuidando cada detalle para mantener la calidez y el estilo de tu prenda.',
    icono: iconoPluma,
  },
    {
    id: 4,
    nombre: 'Botonería',
    descripcion: 'Cambio, reposición y ajuste de botones de todo tipo. Un detalle pequeño que marca la diferencia en el acabado y la durabilidad de tu ropa.',
    icono: iconoBoton,
  },
    {
    id: 5,
    nombre: 'Cambios de cierre',
    descripcion: 'Reemplazamos cierres dañados o atascados en chaquetas, pantalones, carteras y más, dejando la prenda como nueva y lista para volver a usar.',
    icono: iconoCremallera,
  },
    {
    id: 6,
    nombre: 'Clínica de ropa',
    descripcion: 'Diagnóstico y reparación integral para tu ropa: desde pequeños arreglos hasta intervenciones más complejas. Evaluamos cada prenda y te damos la mejor solución.',
    icono: iconoClinica,
  },
]

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Scrollbar personalizado para la columna de cards */
.servicios-scroll::-webkit-scrollbar {
  width: 6px;
}
.servicios-scroll::-webkit-scrollbar-thumb {
  background-color: white;
  border-radius: 999px;
}
.servicios-scroll::-webkit-scrollbar-track {
  background: rgb(99, 99, 99) ;
}
</style>

