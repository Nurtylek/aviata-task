<template>
  <div class="container">
    <app-the-toolbar></app-the-toolbar>
    <main class="main">
      <aside>
        <app-filter-ticket
          filter-title="Авиакомпании"
          :filter-options="filterAirlines"
          @selected-filter="setOptions($event)"
        ></app-filter-ticket>
      </aside>
      <section>
        <app-ticket-list :filtered-tickets="filteredTickets"></app-ticket-list>
      </section>
    </main>
  </div>
</template>

<script>
import TICKETS from "./dummy.data.js";
import FILTERAIRLINES from "./filter-options";

import TicketList from "@/components/TicketList";
import TheToolbar from "@/components/TheToolbar";
import TicketFilter from "@/components/TicketFilter";

export default {
  name: "App",
  components: {
    appTicketList: TicketList,
    appTheToolbar: TheToolbar,
    appFilterTicket: TicketFilter
  },
  data: () => ({
    tickets: TICKETS,
    options: [],
    filterAirlines: FILTERAIRLINES
  }),
  computed: {
    filteredTickets() {
      if (this.options.length === 0) {
        return;
      }
      return this.tickets.filter(ticket => {
        let temp = undefined;

        ticket.flights.segments.forEach(segment => {
          temp = this.options.includes(segment.airline);
        });

        return temp;
      });
    }
  },
  methods: {
    setOptions(options) {
      this.options = options;
    }
  }
};
</script>

<style lang="scss">
@import "./assets/styles/common";

.main {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 20px;
}
</style>
