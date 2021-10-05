<template>
  <swiper
    :slides-per-view="1"
    :space-between="10"
    :loop="true"
    :autoplay="{ delay: 5000 }"
  >
    <swiper-slide
      v-for="(items, idx) in billboard"
      :key="idx"
      class="swiper-slide"
    >
      <div
        class="Billboard"
        :style="`background-image: url(${items.background});`"
      >
        <div class="Billboard__content">
          <div class="Billboard__head">
            <img :src="items.logo" class="Billboard__logo" />
            <span
              class="Billboard__separator"
              :style="`background: ${items.separatorColor}`"
            />
            <div class="Billboard__title" :style="`color: ${items.titleColor}`">
              {{ items.title }}
            </div>
          </div>
          <div class="Billboard__text" :style="`color: ${items.textColor}`">
            {{ items.description }}
          </div>
          <div class="Billboard__footer">
            <div class="Billboard__price" :style="`color: ${items.titleColor}`">
              R${{ items.price }}
            </div>
            <a href="/details">
              <button class="Billboard__button">Saiba mais</button>
            </a>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import SwiperCore, { Autoplay } from 'swiper'
  import 'swiper/swiper.scss'
  SwiperCore.use([Autoplay])

  import data from '../data/billboard.json'

  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        billboard: data
      }
    }
  }
</script>
<style lang="scss">
  .swiper-slide {
    padding-top: 0px !important;
  }

  .Billboard {
    width: 100%;
    height: 300px;
    border-bottom: 6px solid $primary-color;
    background-size: cover;

    .Billboard__content {
      width: 45%;
      height: 100%;
      padding-left: 80px;

      .Billboard__head {
        display: flex;
        align-items: center;
        padding-top: 40px;
      }

      .Billboard__logo {
        height: 60px;
        width: 190px;
      }

      .Billboard__separator {
        height: 50px;
        width: 2px;
        margin-right: 20px;
        margin-left: 20px;
      }

      .Billboard__title {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 41px;
      }

      .Billboard__text {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        margin-top: 20px;
        line-height: 30px;
        font-size: 20px;
        text-align: justify;
      }

      .Billboard__price {
        font-family: 'Roboto', sans-serif;
        margin-top: 25px;
        font-size: 33px;
        margin-right: 25px;
      }

      .Billboard__footer {
        display: flex;
        align-items: center;
      }

      .Billboard__button {
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        font-weight: 700;
        color: $text-default-color;
        padding: 7px 30px;
        border-radius: 4px;
        outline: none;
        border: none;
        background: linear-gradient(to right, #ff9141 30%, #ff6a00 70%);
        margin-top: 25px;
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: 480px) {
    .Billboard {
      height: auto;

      .Billboard__content {
        width: 100%;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 0px;
      }

      .Billboard__head {
        padding-top: 0px !important;
        flex-direction: column;
      }

      .Billboard__logo {
        height: 60px;
        width: 180px;
        margin-top: 10px;
      }

      .Billboard__separator {
        display: none;
      }

      .Billboard__title {
        font-size: 33px;
        margin-top: 10px;
      }

      .Billboard__text {
        font-size: 22px;
        text-align: center !important;
      }

      .Billboard__footer {
        flex-direction: column;
        align-content: center;
      }

      .Billboard__price {
        font-size: 29px;
        margin-right: 0px !important;
      }

      .Billboard__button {
        padding: 10px 50px !important;
        font-size: 18px !important;
      }
    }
  }

  @media screen and (min-width: 480px) and (max-width: 1200px) {
    .Billboard {
      background-repeat: no-repeat;

      .Billboard__content {
        width: 55%;
      }

      .Billboard__head {
        padding-top: 10px !important;
      }
    }
  }
</style>
