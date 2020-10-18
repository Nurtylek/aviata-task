<template>
  <header class="header space-between">
    <img
      class="header__img"
      src="https://kodobi.promo/media/uploads/2018/07/a32b4c9a62a6c0e0fba4f8abe56dfc09.png"
      alt="aviata logo"
    />
    <h1 class="header__title">Поиск и бронирование авиaбилетов</h1>
  </header>
</template>

<script>
export default {
  name: "TheToolbar"
};
</script>

<style scoped lang="scss">
.header {
  position: sticky;
  padding-bottom: 16px;
  display: flex;
  padding-top: 16px;

  @supports not (position: sticky) {
    .header {
      position: fixed;
    }
  }

  &__img {
    object-fit: cover;
      cursor: pointer;
      width: 290px;

      &:hover {
          animation: color 10s infinite;
      }
  }

  &__title {
    margin: 0;
    line-height: 64px;
  }
}
</style>
