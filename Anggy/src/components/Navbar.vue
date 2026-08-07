<template>
  <header
    class="fixed top-0 w-full shadow z-50 justify-center text-center transition-colors duration-300"
    :class="scrolled ? 'bg-primary-dark' : 'bg-transparent'"
  >
    <nav class="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
      <router-link to="/" class="flex items-center gap-2">
        <img :src="logo" alt="Logo Anggy" class="h-10 w-auto" />
      </router-link>
      <div class="hidden m:flex gap-6 font-arima">
        <router-link to="/" class="hover:text-hover" active-class="text-secondary font-semibold">
          Inicio
        </router-link>
        <router-link to="/nosotros" class="hover:text-hover" active-class="text-secondary font-semibold">
          Nosotros
        </router-link>
        <router-link to="/servicios" class="hover:text-hover" active-class="text-secondary font-semibold">
          Servicios
        </router-link>
        <router-link to="/contacto" class="hover:text-hover" active-class="text-secondary font-semibold">
          Contacto
        </router-link>
      </div>

      <!-- atajo whatsapp -->
      
        <a       href="https://wa.me/940118168"
  target="_blank"
  rel="noopener noreferrer"
  class="btn-whatsapp hidden justify-center m:flex m:flex-row m:items-center bg-transparent hover:bg-hover hover:text-amber-950 text-amber-50 border-2 border-hover gap-3 px-4 py-1.5 rounded-full  transition no-underline"
  style="position: static;"
>

  <span>Escríbenos</span>
  <img src="https://api.iconify.design/selfhst:whatsapp.svg" alt="Icono de WhatsApp" class="h-5 w-5" />
</a>

      <!-- Botón hamburguesa (solo mobile) -->
      <button
        @click="menuAbierto = !menuAbierto"
        class="m:hidden p-2 rounded-md hover:bg-hover focus:outline-none"
      >
        <svg class="h-6 w-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path v-if="!menuAbierto" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Menú móvil -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="menuAbierto" class="m:hidden bg-primary-hover shadow-lg rounded-b-xl mx-4">
        <div class="px-4 py-3 space-y-2">
          <router-link to="/" @click="menuAbierto = false" class="block px-4 py-3 rounded-lg bg-amber-50 hover:bg-hover hover:text-amber-50 text-base font-medium transition">
            Inicio
          </router-link>
          <router-link to="/nosotros" @click="menuAbierto = false" class="block px-4 py-3 rounded-lg bg-amber-50 hover:bg-hover hover:text-amber-50 text-base font-medium transition">
            Nosotros
          </router-link>
          <router-link to="/servicios" @click="menuAbierto = false" class="block px-4 py-3 rounded-lg bg-amber-50 hover:bg-hover hover:text-amber-50 text-base font-medium transition">
            Servicios
          </router-link>
          <router-link to="/contacto" @click="menuAbierto = false" class="block px-4 py-3 rounded-lg bg-amber-50 hover:bg-hover hover:text-amber-50 text-base font-medium transition">
            Contacto
          </router-link>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import logo from '../assets/img/anggylogo.png'

const menuAbierto = ref(false)
const scrolled = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>