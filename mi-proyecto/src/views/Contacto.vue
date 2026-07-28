<template>
  <section class="seccion-contacto mx-auto max-w-6xl px-4 py-8 m:py-12">
    <div class="contenedor-contacto w-3/4 mx-auto">
      
      <!-- Encabezado -->
      <h1 class="titulo-h1 text-amber-100 text-center">Contáctanos</h1>
      <p class="texto-parrafo text-amber-50 text-center max-w-2xl mx-auto mb-8 m:mb-12">
        Estamos para ayudarte. Escríbenos o visítanos en nuestro taller.
      </p>

      <!-- Contenedor -->
      <div class="grid grid-cols-1 m:grid-cols-2 gap-6 lg:gap-10 items-stretch">

        <!-- Columna izquierda: Imagen -->
        <div class="flex flex-col h-full">
          <img
            :src="imagenTienda"
            alt="Fachada de Anggy Costuras"
            class="w-full h-64 s:h-80 m:h-full min-h-[280px] max-h-[600px] object-cover rounded-lg shadow-lg"
          />
        </div>

        <!-- Columna derecha: Mapa + Información -->
        <div class="w-full max-h-[650px] gap-5 flex flex-col justify-between">
          
          <!-- Mapa interactivo -->
          <div class="w-full h-60 s:h-72 m:h-1/2 shrink-0">
            <iframe
              :src="mapaUrl"
              class="w-full rounded-lg h-full border-0"
              allowfullscreen
              loading="lazy"
              referrerpolicy="strict-origin-when-cross-origin"
              title="Ubicación de Anggy Costuras en el mapa"
            ></iframe>
          </div>

          <!-- Datos de contacto -->
          <div class="flex flex-col bg-primary-dark/40 rounded-lg overflow-hidden shadow-lg justify-center gap-4 text-amber-50 p-6 s:p-8 m:p-6 lg:p-8 flex-1 border border-white/5 overflow-y-auto">
            <div class="flex items-center gap-3">
              <img src="https://api.iconify.design/mdi:map-marker.svg" alt="Ícono dirección" class="h-6 w-6 shrink-0" />
              <p class="text-sm s:text-base flex items-center">Huérfanos 903 Local 965-967, Santiago, Chile</p>
            </div>

            <div class="flex items-center gap-3">
              <img src="https://api.iconify.design/mdi:phone.svg" alt="Ícono teléfono" class="h-6 w-6 shrink-0" />
              <p href="tel:+56940118168" class="text-sm s:text-base">22 6646211</p>
            </div>

            <div class="flex items-center gap-3">
              <img src="https://api.iconify.design/mdi:email.svg" alt="Ícono correo" class="h-6 w-6 shrink-0" />
              <p href="mailto:contacto@anggycosturas.cl" class=" text-sm s:text-base break-all s:break-normal">
                anggyelgueta@gmail.com
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>
<script setup>
import imagenTienda from '../assets/img/anggycontacto.png'
const mapaUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.3900198671095!2d-70.6508582!3d-33.4391439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5ec9bec47c5%3A0xd71f07c0a59695ac!2sAnggy%20costuras!5e0!3m2!1ses-419!2scl!4v1784956924607!5m2!1ses-419!2scl"
</script>