<template>
  <div class="Navigation">
    <div
      class="Navigation__items"
      v-for="(item, i) in categories"
      :key="`categorie-${i}`"
      :style="
        `${item.active ? 'background-color: #fe7000; border-radius: 5px' : ''}`
      "
      @click="changeActiveItem(item.type)"
    >
      <icon
        :icon="`${item.icon}`"
        :class="
          `${item.active ? 'Navigation__icon--active' : 'Navigation__icon'}`
        "
      />
      <div
        class="Navigation__title"
        :style="`${item.active ? 'color: #ffffff' : ''}`"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>
<script>
  import data from '../data/categories.json'
  export default {
    data() {
      return {
        categories: data
      }
    },
    methods: {
      changeActiveItem(item) {
        this.categories.map((i) => {
          if (i.type === item) i.active = true
          else i.active = false
        })
        this.$emit('onChange', item)
      }
    }
  }
</script>
<style lang="scss">
  .Navigation {
    display: grid;
    width: 92%;
    height: 80px;
    grid-template-columns: repeat(10, 1fr);
    grid-auto-flow: column;
    align-items: center;
    justify-items: center;
    margin: 0 auto;
    cursor: pointer;
    margin-top: 20px;

    .Navigation__items {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100%;
      justify-content: center;
      background: $secondary-detail-color;
      border: 2px solid $border-primary-color;
      border-radius: 4px;
    }

    .Navigation__icon {
      color: $secondary-color;
      font-size: 23px;
      margin-bottom: 10px;
    }

    .Navigation__icon--active {
      color: white;
      font-size: 23px;
      margin-bottom: 10px;
    }

    .Navigation__title {
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      font-size: 15px;
      color: $text-primary-color;
    }
  }

  @media screen and (max-width: 480px) {
    .Navigation {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-flow: row;
      height: 430px;
    }
  }

  @media screen and (min-width: 480px) and (max-width: 1200px) {
    .Navigation__title {
      font-size: 13px !important;
    }
  }
</style>
