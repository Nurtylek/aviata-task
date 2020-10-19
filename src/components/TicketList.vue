<template>
  <transition-group
    name="tickets__list"
    enter-active-class="fadeIn"
    leave-active-class="fadeOut"
  >
    <div
        v-for="(ticket, index) in filteredTickets"
        :key="`ticket:${index}`"
        class="marginBottom-12"
    >
      <app-ticket-list-item
        :ticket="ticket"
      ></app-ticket-list-item>
    </div>
  </transition-group>
</template>

<script>
import TicketListItem from "./TicketListItem.vue";

export default {
  name: "TicketList",
  props: {
      filteredTickets: {
          type: Array,
          required: true
      }
  },
  components: {
    appTicketListItem: TicketListItem
  }
};
</script>
