<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

// opciones para el carrusel
const swiperOptions = ref({
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
</script>
<template>
    <swiper :options="swiperOptions">
        <swiper-slide>
            <figure class="home__banner-image">
                <img src="../../assets/images/Carrusel2.jpg" alt="Slide 1" loading="lazy" decoding="async" />
            </figure>
        </swiper-slide>
        <swiper-slide>
            <figure class="home__banner-image">
                <img src="../../assets/images/img22.jpg" alt="Slide 2" loading="lazy" decoding="async" />
            </figure>
        </swiper-slide>
        <swiper-slide>
            <figure class="home__banner-image">
                <img src="../../assets/images/img3.jpg" alt="Slide 3" loading="lazy" decoding="async" />
            </figure>
        </swiper-slide>
    </swiper>
</template>
<style scoped>
/* Importando archivo CSS - Estilos*/
/* @import "@../assets/images/styles/feature-card.css"; */
@import "@/assets/styles/components/home.css";
</style>
