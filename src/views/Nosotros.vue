<template>
  <section class="max-w-6xl px-4 py-6 lg:py-10 s:py-8 mx-auto text-center">
    <h1 class="text-white px-5">
      Nuestra Historia: Pasión, Detalle y Confección en el Corazón de Santiago
    </h1>
    <p class="text-white">
      Tras una valiosa trayectoria en el emprendimiento, Anggy redescubrió en el
      arte de la costura su auténtica pasión. Anggy Costuras nace como un taller
      de costurería con una visión integral, concebido como un espacio donde la
      atención al detalle y la vocación de servicio son la prioridad.
    </p>
    <!-- Slider automático-->
    <div class="overflow-hidden w-full relative bg-transparent py-4">
      <!-- Slider -->
      <div class="animate-section flex gap-3 md:gap-4 items-center">
        <!-- Primer bloque de imágenes -->
        <div class="flex gap-3 md:gap-4 shrink-0">
          <img
            :src="img1"
            alt="Anggy trabajando en el taller de costura"
            class="w-50 h-45 md:w-65 md:h-65 object-cover rounded-xl shadow-md"
          />
          <img
            :src="img2"
            alt="Interior del taller Anggy Costuras"
            class="w-50 h-45 md:w-65 md:h-65 object-cover rounded-xl shadow-md"
          />
          <img
            :src="img3"
            alt="Detalle de confección de ropa en taller de Anggy costuras"
            class="w-50 h-45 md:w-65 md:h-65 object-cover rounded-xl shadow-md"
          />
          <img
            :src="img4"
            alt="Modista costurera en el taller de costuras de Anggy"
            class="w-50 h-45 md:w-65 md:h-65 object-cover rounded-xl shadow-md"
          />
          <img
            :src="img5"
            alt="Modista costurera preparando las basta de pantalón en taller de Anggy costuras"
            class="w-50 h-45 md:w-65 md:h-65 object-cover rounded-xl shadow-md"
          />
          <img
            :src="img6"
            alt="Maquina de coser del taller de costuras de Anggy"
            class="w-50 h-45 md:w-65 md:h-65 object-cover rounded-xl shadow-md"
          />
          <img
            :src="img7"
            alt="Modista costurera cosiendo en la maquina en el taller de Anggy costuras"
            class="w-50 h-45 md:w-65 md:h-65 object-cover rounded-xl shadow-md"
          />
          <img
            :src="img8"
            alt="Modista costurera cosiendo un botón de una chaqueta en el taller de Anggy costuras"
            class="w-50 h-45 md:w-65 md:h-65 object-cover rounded-xl shadow-md"
          />
          <img
            :src="img9"
            alt="Fachada del taller de costuras de Anggy en Santiago centro"
            class="w-50 h-45 md:w-65 md:h-65 object-cover rounded-xl shadow-md"
          />
        </div>

        <!-- Segundo bloque idéntico para el bucle infinito -->
        <div class="flex gap-3 md:gap-4 shrink-0" aria-hidden="true">
          <img
            :src="img1"
            alt="Anggy trabajando en el taller de costuras"
            class="w-40 h-32 md:w-64 md:h-65 object-cover rounded-xl shadow-md"
          />
          <img
            :src="img2"
            alt="Interior del taller Anggy Costuras"
            class="w-40 h-32 md:w-64 md:h-65 object-cover rounded-xl shadow-md"
          />
          <img
            :src="img3"
            alt="Detalle de confección de ropa en taller de Anggy costuras"
            class="w-40 h-32 md:w-64 md:h-65 object-cover rounded-xl shadow-md"
          />
          <img
            :src="img4"
            alt="Modista costurera en el taller de costuras de Anggy"
            class="w-50 h-45 md:w-65 md:h-65 object-cover rounded-xl shadow-md"
          />
          <img
            :src="img5"
            alt="Costurera modista preparando las basta de pantalón en taller de Anggy costuras"
            class="w-50 h-45 md:w-65 md:h-65 object-cover rounded-xl shadow-md"
          />
          <img
            :src="img6"
            alt="Maquina de coser del taller de costuras de Anggy"
            class="w-50 h-45 md:w-65 md:h-65 object-cover rounded-xl shadow-md"
          />
          <img
            :src="img7"
            alt="Modista costurera cosiendo en la maquina en el taller de Anggy costuras"
            class="w-50 h-45 md:w-65 md:h-65 object-cover rounded-xl shadow-md"
          />
          <img
            :src="img8"
            alt="Modista costurera cosiendo un botón de una chaqueta en el taller de Anggy costuras"
            class="w-50 h-45 md:w-65 md:h-65 object-cover rounded-xl shadow-md"
          />
          <img
            :src="img9"
            alt="Fachada del taller de costuras de Anggy en Santiago centro"
            class="w-50 h-45 md:w-65 md:h-65 object-cover rounded-xl shadow-md"
          />
        </div>
      </div>
    </div>
    <p class="hidden md:block text-white">
      Cada ajuste, basta y confección se ejecuta con la máxima dedicación, con
      el propósito de otorgar una nueva vida a cada prenda y devolver a nuestros
      clientes el confort, la elegancia y la confianza a través de su vestuario.
    </p>
  </section>
  <section class="pb-15 px-3 md:px-0 max-w-6xl mx-auto text-center">
    <h2 class="text-amber-50 pb-2">Misión</h2>
    <p class="text-white">
      Brindar un servicio integral de modistería en el corazón de Santiago,
      distinguido por la rigurosidad en los detalles, la excelencia técnica y
      una cálida atención personalizada. Nos dedicamos a transformar cada
      requerimiento textil mediante soluciones especializadas y creativas,
      devolviendo la armonía, el calce perfecto y la distinción a cada prenda,
      para convertir la experiencia del vestir en un auténtico estado de confort
      y bienestar.
    </p>
    <h2 class="text-amber-50 px-5">Visión</h2>
    <p class="text-white">
      Consolidarnos en Santiago como un taller de referencia en modistería,
      reconocido por su excelencia, innovación y maestría técnica en la
      confección e intervención de textiles nobles y materiales complejos, como
      el cuero y la pluma. Aspiramos a liderar un modelo de emprendimiento con
      sentido humano y sostenible, donde cada puntada sea reflejo de precisión,
      durabilidad y un compromiso genuino con el valor del vestir impecable y el
      bienestar de nuestra comunidad.
    </p>
  </section>
  <section class="bg-primary-dark p-15 w-full mx-auto text-center">
    <h3 class="text-amber-50 pb-4">
      Estamos a pasos del metro plaza de Armas.
    </h3>
    <div class="flex flex-col text-white mx-auto">
      <p>
        Encuéntranos en Huérfanos #903<br />
        Diagonal pasaje Matte local 965-967 comuna de Santiago.<br />
        Teléfono: 9 89014744.
      </p>
      <a
        href="./servicios"
        class="max-w-70 mx-auto  bg-hover hover:text-primary-dark text-white px-6 py-2.5 rounded-2xl  font-medium transition-colors duration-400 no-underline"
      >
        Conoce nuestros servicios aquí</a
      >
    </div>
  </section>
</template>

<script setup>
  import { useHead } from "@unhead/vue";

  useHead({
    title: "Nosotros - Anggy Costuras",
    meta: [
      {
        name: "description",
        content: "Sobre la historia de Anggy costuras en Santiago centro.",
      },
      { property: "og:title", content: "Nosotros - Anggy costuras" },
      {
        property: "og:description",
        content:
          "Conoce la historia y experiencia de Anggy costuras en Santiago.",
      },
    ],
  });

  import { ref, onMounted, onUnmounted } from "vue";
  import img1 from "../assets/img/modistamaquina.webp";
  import img2 from "../assets/img/anggyAtencionTaller.webp";
  import img3 from "../assets/img/anggyMedidadeRopa.webp";
  import img4 from "../assets/img/maquinadeCosturas.webp";
  import img5 from "../assets/img/modistacontraluz.webp";
  import img6 from "../assets/img/anggyBasta.webp";
  import img7 from "../assets/img/modistamaquina.webp";
  import img8 from "../assets/img/cosiendo.webp";
  import img9 from "../assets/img/fachadaTallerdeCosturaAnggy.webp";

  const imagenes = [
    { src: img5, alt: "Anggy trabajando en el taller" },
    { src: img2, alt: "Interior de la tienda Anggy Costuras" },
    { src: img4, alt: "Maquina de coser" },
  ];

  const imagenActual = ref(0);
  let intervalo = null;

  onMounted(() => {
    intervalo = setInterval(() => {
      imagenActual.value = (imagenActual.value + 1) % imagenes.length;
    }, 3000);
  });

  onUnmounted(() => {
    clearInterval(intervalo);
  });
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
