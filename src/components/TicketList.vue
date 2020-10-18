<template>
  <app-ticket-list-item
    :ticket="ticket"
    v-for="ticket in filteredTickets"
    :key="ticket.id"
    class="marginBottom-12"
  ></app-ticket-list-item>
</template>

<script>
import TicketListItem from "./TicketListItem.vue";

export default {
  name: "TicketList",
  props: ["filteredTickets"],
  components: {
    appTicketListItem: TicketListItem
  }
};
</script>
