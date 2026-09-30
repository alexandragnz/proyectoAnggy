<template>
  <title>
    Taller de costuras, modisetería y arreglos de Ropa en Santiago Centro,
    diagonal pasaje Matte por Huérfano. | Anggy
  </title>
  <meta
    name="description"
    content="Taller de servicios de costura y arreglos de ropa en Santiago Centro. Bastas, ajustes, arreglos de cierre, reparación de prendas de cuero y pluma, transformación de prendas..."
  />
  <div class="py-10 w-full max-w-9/10 mx-auto flex flex-col gap-10">
<!-- Mobile  -->
<section class="lg:hidden relative mx-4 h-80 rounded-2xl overflow-hidden shadow-xl">
  
  <!-- Galería de imágenes automática de fondo -->
  <Transition name="fade">
    <img
      :key="currentImageIndex"
      :src="imagenesTienda[currentImageIndex]"
      class="absolute inset-0 w-full h-full object-cover z-0"
      alt="Galería de imágenes del taller ANGGY costuras"
    />
  </Transition>

  <!-- Capa overlay oscura -->
  <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/70 to-black/45 z-10"></div>

  <!-- Contenido frontal -->
  <div class="relative z-20 flex flex-col justify-end h-full p-5">
    <h1 class="text-2xl font-bold text-white text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-snug">
      ANGGY reparaciones y costuras
    </h1>
    <h3 class="mt-2 text-sm text-gray-200 text-center drop-shadow-lg">
      Clínica de ropa, reparaciones en cuero, cambios de cierre, transformación de textiles, bastas y más.
    </h3>
    <a 
      href="./contacto" 
      class="btn-accion text-sm py-3 mt-4 justify-center w-3/4 mx-auto"
    >
      Nuestra ubicación
    </a>
  </div>

</section>

<!-- Desktop -->
<section
  class="hidden lg:flex relative contenedor-bienvenida w-3/4 mx-auto justify-center h-120 rounded-2xl overflow-hidden bg-cover bg-center shadow-2xl"
  :style="{ backgroundImage: `url(${imagenFondoBienvenida})` }"
>
  <!-- Capa overlay -->
  <div class="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>

  <!-- Contenido relativo -->
  <div class="relative z-10 flex w-full h-full items-center justify-between px-8">
    
    <!-- Galería automática -->
    <div class="p-5 flex items-center justify-center shrink-0">
      <div class="relative h-100 w-64 overflow-hidden rounded-full border-2 border-amber-200/50 shadow-2xl">
        <Transition name="fade">
          <img
            :key="currentImageIndex"
            :src="imagenesTienda[currentImageIndex]"
            class="h-full w-full object-cover"
            alt="Galería de imágenes del taller ANGGY costuras"
          />
        </Transition>
      </div>
    </div>

    <!-- Texto de bienvenida -->
    <div class="text-center my-auto px-8 w-full">
      <h1 class="text-4xl lg:text-5xl font-bold text-white tracking-wide">
        ANGGY reparaciones y costuras
      </h1>
      <h3 class="mt-4 text-lg text-gray-200 font-light">
        Clínica de ropa, reparaciones en cuero, cambios de cierre, transformación de textiles, bastas y más.
      </h3>
      <a
        href="./servicios"
        class="btn-accion"
      >
        Conoce nuestros servicios
      </a>
    </div>

  </div>
</section>
    <section>
      <!-- Mobile -->
      <div class="lg:hidden px-4">
        <h2 class="text-white text-center">Trabajamos en cuero y pluma</h2>
        <div class="grid grid-cols-2 gap-3">
          <div class="rounded-xl overflow-hidden min-h-[120px] mt-4 shrink-0">
            <img
              :src="imagenAntes"
              class="w-full h-full object-cover"
              alt="Chaqueta de cuero antes de la reparación en taller de Anggy"
            />
          </div>
          <div class="rounded-xl overflow-hidden min-h-[120px] mt-4 shrink-0">
            <img
              :src="imagenDespues"
              class="w-full h-full object-cover"
              alt="Chaqueta de cuero después de la reparación en taller de Anggy"
            />
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
            class="btn-accion"
          >
            Conoce nuestros servicios
          </a>
        </div>
      </div>
      

      <!-- Desktop -->
      <div class="hidden lg:flex w-3/4 mx-auto gap-10 items-center">
        <div class="flex gap-4">
          <div
            class="relative rounded-xl overflow-hidden h-full min-w-[200px] max-h-280px]"
          >
            <img
              :src="imagenAntes"
              class="w-250 md:min-w-55 h-full object-cover"
              alt="Chaqueta de cuero antes de la reparación en el taller Anggy costuras"
            />
          </div>
          <div
            class="relative rounded-xl overflow-hidden h-full min-w-[200px] max-h-280px]"
          >
            <img
              :src="imagenDespues"
              class="w-250 md:min-w-55 h-full object-cover"
              alt="Chaqueta de cuero antes de la reparación en el taller Anggy costuras"
            />
          </div>
        </div>

        <div class="">
          <h2 class="text-white">
            Somos expertas en reparaciones de todo tipo de artículos de vestir.
          </h2>
          <p class="text-white">
            Realizamos ajustes, bastas, restauraciones en cuero, aumento de
            tallas de pantalones, chaquetas, vestidos, entre otros.
          </p>
        </div>
      </div>
    </section>
    <section class="w-full max-w-9/10 mx-auto py-10 border-t border-gray-600">
      <!-- Mobile -->
      <div class="lg:hidden px-4">
        <h2 class="text-xl font-bold text-white text-center">
          Innovación que nos distingue
        </h2>
        <p class="text-secondary text-sm text-center mt-1">
          Especialistas en Cuero y Pluma
        </p>

        <div class="rounded-xl w-3/4 overflow-hidden mx-auto h-70 mt-4">
          <img
            :src="imagenSitial"
            class="w-full h-full object-cover"
            alt="Sitial y mesa de trabajo del taller de costuras de Anggy"
          />
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
            class="inline-flex items-center gap-3 px-6.5 py-3 mt-6 rounded-full font-medium text-amber-50 bg-primary-dark hover:bg-secondary  active:bg-primary-dark active:text-amber-50 active:border-primary-dark transition-colors duration-400"
          >
            Contáctanos
          </a>
        </div>
      </div>

      <!-- Desktop -->
      <div class="hidden lg:flex w-3/4 mx-auto gap-10 items-center">
        <div class="w-1/2">
          <h2 class="text-3xl font-bold text-white">
            Innovación que nos distingue
          </h2>
          <p class="text-secondary mt-1">Especialistas en Cuero y Pluma</p>
          <p class="mt-4 text-white leading-relaxed">
            Sabemos lo delicados y valiosos que son estos materiales. Ya sea que
            necesites entallar una chaqueta de cuero de alta gama o reparar un
            delicado abrigo de plumas para el invierno, contamos con la técnica,
            las herramientas y la experiencia para manipular estos elementos
            complejos sin perder su forma, volumen ni calidad original.
          </p>
          <a
            href="./contacto"
            class="inline-flex items-center gap-3 px-6.5 py-3 mt-6 rounded-full font-medium text-amber-50 bg-primary-dark hover:bg-secondary  active:bg-primary-dark active:text-amber-50 active:border-primary-dark transition-colors duration-400"
          >
            <span class="px-1.5">Contáctanos</span>
          </a>
        </div>

        <div class="w-1/2 rounded-xl overflow-hidden min-h-[200px]">
          <img
            :src="imagenSitial"
            class="w-full min-h-[200px] h-[480px] object-cover"
            alt="Sitial y mesa de trabajo del taller Anggy costuras"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from "vue";
  import { useHead } from "@unhead/vue";

  // SEO y metadatos
  useHead({
    title: "Anggy Costuras - Taller de costuras y arreglos de ropa",
    meta: [
      {
        name: "description",
        content:
          "Local de costuras en Santiago Centro. Bastas, ajustes de ropa, arreglos en cuero, arreglos en pluma, reposición de botones, cambios de cierre y transformación textil.",
      },
      {
        property: "og:title",
        content: "Anggy Costuras - Costuras y arreglos de ropa",
      },
      {
        property: "og:description",
        content:
          "Local de costuras en Santiago Centro. Arreglos, ajustes y transformación textil.",
      },
    ],
  });

  import imagenFondoBienvenida from "../assets/img/anggyCosturera.webp";
  // Importación de imágenes de la tienda
  import imagenHilos from "../assets/img/hilosdeCoserAnggy.webp";
  import imagenRopa from "../assets/img/ropaColgadaAnggy.webp";
  import imagenProbadores from "../assets/img/probadoresdeRopaAnggy.webp";
  import imagenMaquina from "../assets/img/maquinadeCoserAnggy.webp";
  import imagenFachada from "../assets/img/fachadaTallerdeCosturaAnggy.webp";

  // Otras imágenes del sitio
  import imagenAntes from "../assets/img/antesChaquetaCuero.webp";
  import imagenDespues from "../assets/img/despuesChaquetaCuero.webp";
  import imagenSitial from "../assets/img/sitialTallerdeCosturas.webp";

  // Array de la galería
  const imagenesTienda = ref([
    imagenFachada,
    imagenHilos,
    imagenRopa,
    imagenProbadores,
    imagenMaquina,
  ]);

const currentImageIndex = ref(0)
let timer = null

onMounted(() => {
  // Asegurarse de tener elementos antes de iniciar el intervalo
  if (imagenesTienda.value.length > 0) {
    timer = setInterval(() => {
      currentImageIndex.value = (currentImageIndex.value + 1) % imagenesTienda.value.length
    }, 3500)
  }
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease-in-out;
}

.fade-leave-active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>