<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <main class="flex-1 mx-auto pt-15 pb-10 w-full">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>