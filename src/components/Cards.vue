<template>
  <div class="Cards">
    <div
      class="Cards__content"
      v-for="(item, index) in filteredCards"
      :key="`Cards-${index}`"
    >
      <icon :icon="`${item.icon}`" class="Cards__icon" />
      <div class="Cards__title">{{ item.title }}</div>
      <div class="Cards__text">{{ item.text }}</div>
      <div class="Cards__footer">
        <div class="Cards__price">R$ {{ item.price }}</div>
        <a href="" class="Cards__link" @click="sendToDetailView(item)"
          >Saiba mais</a
        >
      </div>
    </div>
  </div>
</template>
<script>
  import data from '../data/cards.json'
  export default {
    props: {
      filterByCategory: {
        type: String,
        default: ''
      },
      orderByFilter: {
        type: String,
        default: 'newest'
      }
    },
    data() {
      return {
        cards: data,
        filteredCards: []
      }
    },
    methods: {
      filterCards() {
        if (this.filterByCategory && this.filterByCategory !== 'all') {
          this.filteredCards = this.cards.filter((card) => {
            if (card.type === this.filterByCategory) return card
          })
        } else {
          this.filteredCards = this.cards
        }
      },
      reorderCards() {
        switch (this.orderByFilter) {
          case 'newest':
            this.filteredCards = this.filteredCards.sort((a, b) => {
              b.created_at = new Date(b.created_at)
              a.created_at = new Date(a.created_at)
              return b.created_at - a.created_at
            })
            break
          case 'price':
            this.filteredCards = this.filteredCards.sort((a, b) => {
              a.price = parseFloat(a.price, 4)
              b.price = parseFloat(b.price, 4)
              return a.price - b.price
            })
            break
          default:
            return ''
        }
      },
      sendToDetailView(item) {
        this.$router.push(`/details/${item.id}`)
      }
    },
    created() {
      this.filteredCards = this.cards
    },
    watch: {
      orderByFilter() {
        this.reorderCards()
      },
      filterByCategory() {
        this.filterCards()
      }
    }
  }
</script>
<style lang="scss">
  .Cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    grid-gap: 40px;
    margin-top: 30px;

    .Cards__content {
      display: flex;
      flex-direction: column;
      width: 285px;
      height: auto;
      align-items: center;
      justify-content: center;
      border: 2px solid $border-primary-color;
      border-radius: 5px;
    }

    .Cards__icon {
      font-size: 25px;
      color: $primary-color;
      margin-bottom: 15px;
      margin-top: 30px;
    }

    .Cards__title {
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      font-size: 18px;
      color: $secondary-color;
      margin-bottom: 15px;
    }

    .Cards__text {
      font-family: 'Roboto', sans-serif;
      font-size: 13px;
      font-weight: 400;
      color: $text-primary-color;
      text-align: center;
      padding-left: 15px;
      padding-right: 15px;
      line-height: 20px;
    }

    .Cards__footer {
      display: flex;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      color: $text-default-color;
      background: linear-gradient(to right, #ff9141 30%, #ff6a00 70%);
      margin-top: 40px;
      width: 100%;
      justify-content: space-between;
      padding: 13px 0;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      align-items: center;
    }

    .Cards__price {
      font-size: 20px;
      padding-left: 10px;
    }

    .Cards__link {
      text-decoration: none;
      color: $text-default-color;
      padding-right: 10px;
    }
  }

  @media screen and (max-width: 480px) {
    .Cards {
      grid-template-columns: repeat(1, 1fr);

      .Cards__content {
        width: 90%;
      }

      .Cards__icon {
        font-size: 35px;
      }

      .Cards__title {
        font-size: 25px;
      }

      .Cards__text {
        font-size: 17px;
      }
    }
  }

  @media screen and (min-width: 480px) and (max-width: 1200px) {
    .Cards {
      grid-template-columns: repeat(3, 1fr);
      margin-right: 10px;
      margin-left: 10px;
    }
  }
</style>
