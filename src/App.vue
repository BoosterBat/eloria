<template>
  <SliderCarousel />
  <CharacterSheets />
</template>

<script>
import SliderCarousel from './components/SliderCarousel.vue'
import CharacterSheets from './components/CharacterSheets.vue'

import './css/normalize.scss'
import './css/carousel.scss'
import './css/characters.sass'

export default {
  name: 'App',
  components: {
    SliderCarousel,
    CharacterSheets
  }
}
</script>
