<template>
  <footer class="bg-amber-50 flex flex-col m:flex-row text-base m:text-sm gap-5 justify-around items-center py-8 px-4">
    
    <div class="">
      <!-- espacio reservado -->
    </div>

    <div class="">
      <img :src="logo" alt="Logo Anggy Costuras" class="max-h-24 object-cover" />
    </div>

    <div class="text-center">
      <span>
        Nuestro horario de atención <br />
        Lunes a viernes de 10:00 a 18:00 horas <br />
        Sábado de 11:00 a 14:00 horas
      </span>
    </div>

    <div class="rrss flex flex-col text-center">
      <span class="flex mb-5 justify-center">Síguenos en nuestras redes sociales</span>
      <div class="flex gap-8 justify-center">
        <a href="https://instagram.com/ryc_anggy" target="_blank" rel="noopener noreferrer">
          <img src="https://api.iconify.design/selfhst:instagram.svg" alt="Icono de Instagram" class="h-6 w-6" />
        </a>
        <a href="https://wa.me/940118168" target="_blank" rel="noopener noreferrer">
          <img src="https://api.iconify.design/selfhst:whatsapp.svg" alt="Icono de WhatsApp" class="h-6 w-6" />
        </a>
        <a href="https://web.facebook.com/anggycosturas/" target="_blank" rel="noopener noreferrer">
          <img src="https://api.iconify.design/devicon:facebook.svg" alt="Icono de Facebook" class="h-6 w-6" />
        </a>
      </div>
    </div>

  </footer>
</template>

<script setup>
import logo from '../assets/img/anggylogo.png'
</script>