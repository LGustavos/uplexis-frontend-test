<template>
  <div class="Details">
    <Billboard />
    <Breadcrumb />
    <div class="Details__carousel">
      <Carousel />
      <div class="Details__text">{{ card.text }}</div>
      <div class="Details__footer">
        <div class="Details__price">R${{ card.price }}</div>
        <button class="Details__button">Habilitar</button>
      </div>
    </div>
  </div>
</template>
<script>
  import Billboard from '../components/Billboard.vue'
  import Breadcrumb from '../components/Breadcrumb.vue'
  import Carousel from '../components/Carousel.vue'
  import cardsData from '../data/cards.json'

  export default {
    components: {
      Billboard,
      Breadcrumb,
      Carousel
    },
    data() {
      return {
        card: {}
      }
    },
    mounted() {
      cardsData.filter((item) => {
        if (this.$route.params.id === item.id) this.card = item
      })
    }
  }
</script>
<style lang="scss">
  .Details {
    padding-bottom: 50px;

    .Details__carousel {
      max-width: 80%;
      margin: 0 auto;
    }

    .Details__text {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 20px;
      color: $text-primary-color;
      text-align: justify;
      margin-top: 30px;
    }

    .Details__footer {
      display: flex;
      align-items: center;
      margin-top: 40px;
    }

    .Details__price {
      font-family: 'Roboto', sans-serif;
      font-size: 33px;
    }

    .Details__button {
      font-family: 'Roboto', sans-serif;
      font-size: 15px;
      font-weight: 700;
      color: $text-default-color;
      padding: 7px 30px;
      border-radius: 4px;
      outline: none;
      border: none;
      background: linear-gradient(to right, #ff9141 30%, #ff6a00 70%);
      margin-left: 25px;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 480px) {
    .Details {
      .Details__carousel {
        max-width: 90%;
      }

      .Details__text {
        text-align: center;
      }

      .Details__footer {
        flex-direction: column;
      }

      .Details__button {
        margin-left: 0px !important;
        margin-top: 25px;
        padding: 10px 40px;
      }
    }
  }
</style>
