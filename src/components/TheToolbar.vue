<template>
    <header class="header space-between">
        <img class="header__img" src="https://aviata.kz/static/images/logo.png" alt="aviata logo">
        <h1 class="header__title">Поиск и бронирование авиaбилетов</h1>
    </header>
</template>

<script>
export default {
    name: "TheToolbar"
}
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
    }

    &__title {
        margin: 0;
        line-height: 64px;
    }
}
</style>
