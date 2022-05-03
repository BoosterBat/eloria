<template>
  <carousel :items-to-show="3.95" :wrapAround="true">
    <slide v-for="session in sessions" :key="session.episode">
      <div class="carousel__item">{{ session.title }}</div>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>
// https://vuejsexamples.com/modern-lightweight-vue-3-carousel-component/

import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

import sessions from '../sessions.json'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      sessions: sessions
    }
  }
};
</script>