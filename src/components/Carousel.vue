<template>
  <div class="Carousel">
    <swiper
      :slides-per-view="2"
      :autoplay="{ delay: 4500 }"
      :loop="true"
      :space-between="10"
    >
      <swiper-slide
        v-for="(items, idx) in carousel"
        :key="idx"
        class="swiper-slide"
      >
        <div class="Carousel__Card">
          <img class="Carousel__img" :src="items.image" />
          <div class="Carousel__text">{{ items.text }}</div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import SwiperCore, { Autoplay } from 'swiper'
  import 'swiper/swiper.scss'
  SwiperCore.use([Autoplay])

  import data from '../data/carousel.json'

  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        carousel: data
      }
    }
  }
</script>
<style lang="scss">
  .swiper-slide {
    width: 50%;
    display: flex;
    justify-content: center;
    margin-right: 0px;
    padding-top: 10px;
    padding-bottom: 10px;

    @media screen and (max-width: 480px) {
      width: 46%;
    }
  }

  .Carousel {
    margin-top: 22px;

    .Carousel__Card {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 90%;
      height: 335px;
      height: auto;
      box-shadow: 0px 3px 6px #a5a5a5;
    }

    .Carousel__img {
      width: 95%;
      margin-top: 10px;
    }

    .Carousel__text {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      color: $primary-color;
      width: 95%;
      margin-top: 20px;
      padding-left: 30px;
      margin-bottom: 20px;
      padding-right: 15px;
    }
  }

  @media screen and (max-width: 480px) {
    .Carousel__text {
      padding-left: 13px !important;
      text-align: center;
      font-size: 10px;
    }
  }
</style>
