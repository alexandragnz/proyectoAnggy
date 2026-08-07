<template>
  <div class="py-10 w-full max-w-9/10 mx-auto flex flex-col gap-10">

    <!-- Mobile -->
    <section class="lg:hidden relative mx-4 h-80 rounded-2xl overflow-hidden ">
      <img
        :src="imagenBienvenida"
        class="absolute inset-0 w-full h-full object-cover"
        alt="Fachada tienda ANGGY"
      />
      <!-- Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/50 to-transparent"></div>

      <div class="absolute bottom-0 left-0 right-0 p-5">
        <h1 class="text-2xl font-bold text-white text-center leading-snug">
          ANGGY reparaciones y costuras
        </h1>
        <h3 class="mt-2 text-sm text-gray-200 text-center">
          Clinica de ropa, bordados, transformación de textiles y más.
        </h3>
        <a
          href="./contacto"
          class="flex items-center mx-auto justify-center gap-2 mt-6  bg-hover  text-amber-50 active:bg-:text-orange-950 font-medium w-3/4 px-6 py-3 rounded-full transition no-underline"
        >
          Nuestra ubicación
        </a>
      </div>
    </section>

    <!--Desktop -->
    <section
      class="hidden lg:flex contenedor-bienvenida w-3/4 mx-auto justify-center h-120 rounded-2xl"
    >
      <!-- Columna izquierda - fachada anggy -->
      <div class="p-5">
        <img
          :src="imagenTienda"
          class="h-100 mx-auto border-orange-200 min-w-[220px] border-1 rounded-full object-cover"
          alt="Fachada tienda ANGGY"
        />
      </div>

      <!-- Columna derecha - texto bienvenida -->
      <div class="text-center my-auto px-8">
        <h1 class="text-4xl font-bold">ANGGY reparaciones y costuras</h1>
        <h3 class="mt-2 text-white">
          Clinica de ropa, bordados, transformación de textiles y más.
        </h3>
                <a
          href="./servicios"
          class="inline-flex items-center transition  gap-2 mt-6  bg-hover  text-amber-50 hover:text-primary-dark active:bg-hover active:text-amber-50 font-medium px-6 py-3 transition-colors duration-200 rounded-full"
        >
          Conoce nuestros servicios
        </a>

      </div>
    </section>

  
  <section>
      <!-- Mobile -->
    <div class="lg:hidden px-4">
      <h2 class="text-white text-center">Trabajamos en cuero y pluma</h2>
      <div class="grid grid-cols-2 gap-3">
        <div class="rounded-xl overflow-hidden min-h-[120px] mt-4 shrink-0">
          <img :src="imagenAntes" class="w-full h-full object-cover" alt="Antes de la reparación" />

        </div>
        <div class="rounded-xl overflow-hidden  min-h-[120px] mt-4 shrink-0">
          <img :src="imagenDespues" class="w-full h-full object-cover" alt="Después de la reparación" />

        </div>
      </div>
 
      <p class="mt-5 text-sm text-gray-200 text-center leading-relaxed">
        Somos expertas en reparaciones de todo tipo de artículos de vestir.
        Realizamos ajustes, bastas, restauraciones en cuero, aumento de tallas
        de pantalones, chaquetas, vestidos, entre otros.
      </p>
 
      <div class="flex justify-center mt-5">
        <a
          href="./servicios"
          class="inline-flex items-center gap-2 mt-6  bg-hover  active:bg-secondary
           transition  text-amber-50 active:bg-text-orange-950 font-medium px-6 py-3 transition-colors duration-200 rounded-full"
        >
          Conoce nuestros servicios
        </a>
      </div>
    </div>
 
    <!-- Desktop -->
    <div class="hidden lg:flex w-3/4 mx-auto gap-10 items-center">
      <div class="flex gap-4 ">
        <div class="relative rounded-xl overflow-hidden h-full  min-w-[200px] max-h-280px]">
  <img :src="imagenAntes" class="w-250 md:min-w-55 h-full object-cover" alt="Antes de la reparación" />
</div>
<div class="relative rounded-xl overflow-hidden h-full  min-w-[200px] max-h-280px]">
  <img :src="imagenDespues" class="w-250  md:min-w-55 h-full object-cover" alt="Después de la reparación" />
</div>
      </div>
 
      <div class="">
        <h2 class="text-white ">Somos expertas en reparaciones de todo tipo de artículos de vestir.</h2>
        <p class="text-white ">
          Realizamos ajustes, bastas, restauraciones en cuero, aumento de tallas
          de pantalones, chaquetas, vestidos, entre otros.
        </p>
      </div>
    </div>
 
  </section>
    <section class="w-full max-w-9/10 mx-auto py-10 border-t border-gray-600">
 
    <!-- Mobile -->
    <div class="lg:hidden px-4">
      <h2 class="text-xl font-bold text-white text-center">Innovación que nos distingue</h2>
      <p class="text-secondary text-sm text-center mt-1">Especialistas en Cuero y Pluma</p>
 
      <div class="rounded-xl w-3/4 overflow-hidden mx-auto h-70 mt-4">
        <img :src="imagenSitial" class="w-full h-full object-cover" alt="Sitial y mesa de trabajo" />
      </div>
 
      <p class="mt-4 text-sm text-gray-200 text-center leading-relaxed">
        Sabemos lo delicados y valiosos que son estos materiales. Ya sea que
        necesites entallar una chaqueta de cuero de alta gama o reparar un
        delicado abrigo de plumas para el invierno, contamos con la técnica,
        las herramientas y la experiencia para manipular estos elementos
        complejos sin perder su forma, volumen ni calidad original.
      </p>
 
      <div class="flex justify-center mt-5">
        <a
          href="./contacto"
          class="inline-flex items-center gap-3 px-3 py-1.5 mt-6 rounded-full border-2 border-hover font-medium text-amber-50 bg-primary-dark
          hover:bg-hover hover:text-primary-dark active:bg-primary-dark active:text-amber-50  active:border-primary-dark transition-colors duration-200"
        >
          Contáctanos
        </a>
      </div>
    </div>
 
    <!-- Desktop -->
    <div class="hidden lg:flex w-3/4 mx-auto gap-10 items-center">
      <div class="w-1/2">
        <h2 class="text-3xl font-bold text-white">Innovación que nos distingue</h2>
        <p class="text-secondary mt-1">Especialistas en Cuero y Pluma</p>
        <p class="mt-4 text-white leading-relaxed">
          Sabemos lo delicados y valiosos que son estos materiales. Ya sea que
          necesites entallar una chaqueta de cuero de alta gama o reparar un
          delicado abrigo de plumas para el invierno, contamos con la técnica,
          las herramientas y la experiencia para manipular estos elementos
          complejos sin perder su forma, volumen ni calidad original.
        </p>
        <a
          href= "./contacto"
          class="inline-flex items-center gap-3 px-3 py-1.5 mt-6 rounded-full border-2 border-hover font-medium text-amber-50 bg-primary-dark
          hover:bg-hover hover:text-primary-dark active:bg-primary-dark active:text-amber-50  active:border-primary-dark transition-colors duration-200"
        >
          <span class="px-1.5">Contáctanos</span>
        </a>
      </div>
 
      <div class="w-1/2 rounded-xl overflow-hidden min-h-[200px]">
        <img :src="imagenSitial" class="w-full min-h-[200px] h-[480px] object-cover" alt="Sitial y mesa de trabajo" />
      </div>
    </div>
 
  </section>

</div>
</template>

<script setup>

import { useHead } from '@vueuse/head'

useHead({
  title: 'Anggy Costuras - Costuras y arreglos de ropa',
  meta: [
    { name: 'description', content: 'Local de costuras en Santiago Centro. Bastas, ajustes de ropa, arreglos en cuero, arreglos en pluma, reposición de botones, cambios de cierre, transformación textil, .' },
    { property: 'og:title', content: 'Anggy Costuras - Costuras y arreglos de ropa' },
    { property: 'og:description', content: 'Local de costuras en Santiago Centro. Arreglos, ajustes y transformación textil.' },
  ]
})
defineProps({
  imagenTienda: {
    type: String,
    required: true
  },
  imagenAntes: {
    type: String,
    required: true
  },
  imagenDespues: {
    type: String,
    required: true
  },
    imagenSitial: {
    type: String,
    required: true
  }
})



import imagenTienda from '../assets/img/fachada.png'
import imagenAntes from '../assets/img/antes.png'
import imagenDespues from '../assets/img/despues.png'
import imagenSitial from '../assets/img/sitialanggy.webp'
import imagenBienvenida from '../assets/img/anggybienvenida.png'
</script>