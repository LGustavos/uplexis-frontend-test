<template>
  <div class="Home">
    <Billboard />
    <Navigation @onChange="changeCategory" />
    <Ordering @onChange="changeOrdering" />
    <Cards
      :filterByCategory="selectedCategory"
      :orderByFilter="orderingFilter"
    />
  </div>
</template>
<script>
  import Billboard from '../components/Billboard.vue'
  import Cards from '../components/Cards.vue'
  import Navigation from '../components/Navigation.vue'
  import Ordering from '../components/Ordering.vue'

  export default {
    components: {
      Billboard,
      Cards,
      Navigation,
      Ordering
    },
    data() {
      return {
        selectedCategory: null,
        orderingFilter: null
      }
    },
    methods: {
      changeCategory(category) {
        this.selectedCategory = category
      },
      changeOrdering(filter) {
        this.orderingFilter = filter
      }
    }
  }
</script>
<style lang="scss">
  .Home {
    padding-bottom: 50px;
  }
</style>
