<template>
  <a class="Breadcrumb" href="/">
    <icon icon="angle-left" class="Breadcrumb__icon"></icon>
    <label class="Breadcrumb__label">Histórico Empresarial</label>
  </a>
</template>
<script>
  export default {}
</script>
<style lang="scss">
  .Breadcrumb {
    text-decoration: none;
    color: $primary-color;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    display: flex;
    align-items: center;
    margin-top: 30px;
    cursor: pointer;
    padding-left: 120px;
    width: 263px;

    .Breadcrumb__label {
      font-size: 25px;
      margin-left: 8px;
      cursor: pointer;
    }

    .Breadcrumb__icon {
      font-size: 30px;
    }
  }

  @media screen and (max-width: 480px) {
    .Breadcrumb {
      padding-left: 10px;
    }
  }
</style>
