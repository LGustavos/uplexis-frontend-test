<template>
  <div class="Ordering">
    <label class="Ordering__title">Ordenar</label>
    <select
      v-model="orderingValue"
      name="order"
      class="Ordering__select"
      @change="selectedValue"
    >
      <option value="newest" class="Ordering__option">Lançamento</option>
      <option value="price" class="Ordering__option">Preço</option>
    </select>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        orderingValue: 'newest'
      }
    },
    mounted() {
      this.selectedValue()
    },
    methods: {
      selectedValue() {
        this.$emit('onChange', this.orderingValue)
      }
    }
  }
</script>
<style lang="scss">
  .Ordering {
    display: flex;
    align-items: center;
    margin-top: 30px;
    padding-left: 30px;

    .Ordering__title {
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      font-size: 15px;
      color: black;
      text-transform: uppercase;
      margin-right: 20px;
    }

    .Ordering__select {
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      height: 35px;
      width: 220px;
      padding-left: 10px;
      border: 2px solid $text-primary-color;
      border-radius: 3px;
      font-size: 15px;
      color: $text-secondary-color;
      outline: none;
    }

    .Ordering__option {
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      color: $text-secondary-color;
      border: 2px solid $text-primary-color;
      border-radius: 3px;
    }
  }

  @media screen and (max-width: 480px) {
    .Ordering {
      padding-left: 0px !important;
      justify-content: center;
    }
  }

  @media screen and (min-width: 480px) and (max-width: 1200px) {
    .Ordering {
      padding-left: 50px;
    }
  }
</style>
