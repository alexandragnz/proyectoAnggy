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
      <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

      <div class="absolute bottom-0 left-0 right-0 p-5">
        <h1 class="text-2xl font-bold text-white leading-snug">
          ANGGY reparaciones y costuras
        </h1>
        <h3 class="mt-2 text-sm text-gray-200">
          Clinica de ropa, bordados, transformacion de textiles y más.
        </h3>
        <a
          href="./contacto"
          class="inline-flex items-center gap-2 mt-6 hover:bg-secondary bg-primary-dark  text-amber-50 hover:text-orange-950 font-medium px-6 py-3 rounded-full transition no-underline"
        >
          Contáctanos
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
          Clinica de ropa, bordados, transformacion de textiles y más.
        </h3>

      </div>
    </section>

  
  <section>
      <!-- Mobile -->
    <div class="lg:hidden px-4">
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
          class="inline-flex items-center gap-2 mt-6 hover:bg-secondary bg-primary-dark transition  text-amber-50 hover:text-orange-950 font-medium px-6 py-3 rounded-full"
        >
          Conoce nuestros servicios
        </a>
      </div>
    </div>
 
    <!-- Desktop -->
    <div class="hidden lg:flex w-3/4 mx-auto gap-10 items-center">
      <div class="flex gap-4 ">
        <div class="relative rounded-xl overflow-hidden h-full min-w-[220px] max-h-[300px]">
  <img :src="imagenAntes" class="w-250 md:min-w-55 h-full object-cover" alt="Antes de la reparación" />
</div>
<div class="relative rounded-xl overflow-hidden h-full  min-w-[220px] max-h-[300px]">
  <img :src="imagenDespues" class="w-250  md:min-w-55 h-full object-cover" alt="Después de la reparación" />
</div>
      </div>
 
      <div class="text-center">
        <p class="text-white leading-relaxed">
          Somos expertas en reparaciones de todo tipo de artículos de vestir.
          Realizamos ajustes, bastas, restauraciones en cuero, aumento de tallas
          de pantalones, chaquetas, vestidos, entre otros.
        </p>
        <a
          href="./servicios"
          class="inline-flex items-center gap-2 mt-6 hover:bg-secondary bg-primary-dark transition  text-amber-50 hover:text-orange-950 font-medium px-6 py-3 rounded-full"
        >
          Conoce nuestros servicios
        </a>
      </div>
    </div>
 
  </section>
    <section class="w-full max-w-9/10 mx-auto py-10 border-t border-gray-600">
 
    <!-- Mobile -->
    <div class="lg:hidden px-4">
      <h2 class="text-xl font-bold text-white">Innovación que nos distingue</h2>
      <p class="text-secondary text-sm mt-1">Especialistas en Cuero y Pluma</p>
 
      <div class="rounded-xl w-3/4 overflow-hidden mx-auto h-70 mt-4">
        <img :src="imagenSitial" class="w-full h-full object-cover" alt="Sitial y mesa de trabajo" />
      </div>
 
      <p class="mt-4 text-sm text-gray-200 leading-relaxed">
        Sabemos lo delicados y valiosos que son estos materiales. Ya sea que
        necesites entallar una chaqueta de cuero de alta gama o reparar un
        delicado abrigo de plumas para el invierno, contamos con la técnica,
        las herramientas y la experiencia para manipular estos elementos
        complejos sin perder su forma, volumen ni calidad original.
      </p>
 
      <div class="flex justify-center mt-5">
        <a
          href="./contacto"
          class="inline-flex items-center gap-2 mt-6 hover:bg-secondary bg-primary-dark text-amber-50 transition  hover:text-orange-950 font-medium px-6 py-3 rounded-full"
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
          class="inline-flex items-center gap-2 mt-6 hover:bg-secondary bg-primary-dark text-amber-50 hover:text-orange-950 font-medium px-6 py-3 transition  rounded-full"
        >
          Contáctanos
        </a>
      </div>
 
      <div class="w-1/2 rounded-xl overflow-hidden min-h-[200px] border-detail border-2">
        <img :src="imagenSitial" class="w-full min-h-[200px] h-full object-cover" alt="Sitial y mesa de trabajo" />
      </div>
    </div>
 
  </section>

</div>
</template>

<script setup>
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
import imagenSitial from '../assets/img/sitialAnggy.png'
import imagenBienvenida from '../assets/img/anggybienvenida.png'
</script>