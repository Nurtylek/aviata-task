<template>
  <article class="filter flex flex-column">
    <span class="filter__title">{{ filterTitle }}</span>
    <label for="all" class="filter__option flex align-center">
      <input
        type="checkbox"
        id="all"
        v-model="isAllSelected"
        @change="$emit('selected-filter', options)"
      />
      <span class="filter__option--title">Все</span>
    </label>
    <label
      class="filter__option flex align-center"
      :key="filterOption.code"
      :for="filterOption.code"
      v-for="filterOption in filterOptions"
      @change="$emit('selected-filter', options)"
    >
      <input
        type="checkbox"
        :id="filterOption.code"
        v-model="options"
        :value="filterOption.code"
      />
      <span class="filter__option--title">{{ filterOption.name }}</span>
    </label>
  </article>
</template>

<script>
import {ref, computed, onMounted} from 'vue';
export default {
  name: "TicketFilter",
  props: {
    filterTitle: {
      type: String,
      required: true
    },
    filterOptions: {
      type: Array,
      required: true
    }
  },
    setup(props, context) {
      const options = ref([]);

      const isAllSelected = computed({
          get: () => props.filterOptions ? options.value.length === props.filterOptions.length : false,
          set: option => {
              let selectedFilters = [];
              if (option) {
                  props.filterOptions.forEach(opt => {
                      selectedFilters.push(opt.code);
                  });
              }
              options.value = selectedFilters;
          }
      });

      onMounted(() => {
          isAllSelected.value = true;
          context.emit("selected-filter", options.value)
      })

      //  expose to template
      return {
          isAllSelected,
          options
      }
    }
};
</script>

<style scoped lang="scss">
.filter {
  border-radius: 4px;
  border: 1px solid var(--border);
  padding-top: 16px;
  padding-bottom: 16px;

  &__title {
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    color: var(--text-color);
    text-align: left;
    padding-bottom: 16px;
    padding-left: 16px;
  }

  &__option {
    cursor: pointer;
    height: 32px;

    & + & {
      margin-top: 10px;
    }

    input {
      margin-left: 16px;
    }

    &--title {
      margin-left: 12px;
      font-size: 12px;
      line-height: 16px;
      color: var(--text-color);
    }

    &:hover {
      background: #ebebeb;
    }
  }
}
</style>
