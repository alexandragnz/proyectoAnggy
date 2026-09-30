<template>
  <section class="seccion-contacto mx-auto max-w-6xl px-4 py-8 m:py-12">
    <div class="contenedor-contacto w-3/4 mx-auto">
      <h1 class="titulo-h1 text-white text-center">Contáctanos</h1>
      <p class="texto-parrafo text-amber-50 text-center max-w-2xl mx-auto mb-8 m:mb-12">
        Estamos para ayudarte. Escríbenos o visítanos en nuestro taller.
      </p>

      <!-- Contenedor -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-stretch">

  <!-- Columna izquierda imagen -->
  <div class="relative w-full h-[350px] md:h-full min-h-[350px]">
    <img :src="imagenTienda" alt="Fachada del taller de Anggy Costuras"
      class="w-full h-full object-cover border-0 rounded-2xl shadow-lg" loading="lazy" />
  </div>

  <!-- Columna derecha mapa-información -->
  <div class="flex flex-col gap-4 h-full">

    <!-- Mapa  -->
    <div class="w-full h-48 sm:h-56 bg-primary-dark/40 rounded-xl shadow-lg border border-white/5 overflow-hidden shrink-0">
      <iframe :src="mapaUrl" class="w-full h-full border-0" allowfullscreen loading="lazy"
        referrerpolicy="strict-origin-when-cross-origin" title="Ubicación de Anggy Costuras en el mapa"></iframe>
    </div>

    <!-- Datos de contacto -->
    <div
      class="flex flex-col bg-primary-dark/40 rounded-xl shadow-lg justify-between gap-3 text-amber-50 p-5 sm:p-6 flex-1 border border-white/5 overflow-hidden">
      <div class="flex items-center gap-3">
        <img src="https://api.iconify.design/mdi:map-marker.svg?color=%23ffffff" alt="Ícono dirección"
          class="h-5 w-5 shrink-0 hover:text-hover " />
        <p class="text-sm sm:text-base">Huérfanos 903 Local 965-967, Santiago, Chile</p>
      </div>

      <!-- Teléfono 1 -->
      <div class="flex items-center gap-3">
        <img src="https://api.iconify.design/mdi:phone.svg?color=%23ffffff" alt="Ícono teléfono"
          class="h-5 w-5 shrink-0 text-slate-200" />
        <a href="tel:+56940119168" class="text-sm sm:text-base hover:text-hover transition-colors">
          +56 9 4011 9168
        </a>
      </div>

      <!-- Teléfono 2 (Fijo) -->
      <div class="flex items-center gap-3">
        <img src="https://api.iconify.design/mdi:phone-classic.svg?color=%23ffffff" alt="Ícono teléfono fijo"
          class="h-5 w-5 shrink-0 " />
        <a href="tel:226646211" class="text-sm sm:text-base text-slate-200 hover:text-hover transition-colors">
          2 2664 6211
        </a>
      </div>

      <!-- Correo -->
      <div class="flex items-center gap-3">
        <img src="https://api.iconify.design/mdi:email.svg?color=%23ffffff" alt="Ícono correo"
          class="h-5 w-5 shrink-0 " />
        <a href="mailto:anggyelgueta@gmail.com"
          class="text-sm sm:text-base break-all hover:text-hover transition-colors">
          anggyelgueta@gmail.com
        </a>
      </div>

      <!-- Instagram -->
      <div class="flex items-center gap-3">
        <img src="https://api.iconify.design/mdi:instagram.svg?color=%23ffffff" alt="Ícono Instagram"
          class="h-5 w-5 shrink-0 " />
        <a href="https://www.instagram.com/anggycosturas" target="_blank" rel="noopener noreferrer"
          class="text-sm sm:text-base hover:text-hover  transition-colors">
          @anggycosturas
        </a>
      </div>
    </div>

  </div>
</div>
    </div>
  </section>
</template>
<script setup>
import { useHead } from '@unhead/vue'

useHead({
  title: 'Contacto - Anggy costuras',
  meta: [
    { name: 'description', content: 'Contáctanos para tus arreglos y confección a medida en nuestro taller de costuras en Santiago centro.' },
    { property: 'og:title', content: 'Contacto - Anggy costuras' },
    { property: 'og:description', content: 'Contáctanos para tus arreglos y confección a medida en nuestro taller de costuras en Santiago centro.' },
  ]
})
import imagenTienda from '../assets/img/anggyMesaCostura.webp'
const mapaUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.3900198671095!2d-70.6508582!3d-33.4391439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5ec9bec47c5%3A0xd71f07c0a59695ac!2sAnggy%20costuras!5e0!3m2!1ses-419!2scl!4v1784956924607!5m2!1ses-419!2scl"
</script>