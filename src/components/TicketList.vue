<template>
  <transition-group
    name="tickets__list"
    enter-active-class="fadeIn"
    leave-active-class="fadeOut"
  >
    <div v-for="(ticket, index) in filteredTickets" :key="`ticket:${index}`">
      <app-ticket-list-item
        :ticket="ticket"
        class="marginBottom-12"
      ></app-ticket-list-item>
    </div>
  </transition-group>
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
