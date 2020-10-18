<template>
    <!--  TODO migrate to vue 3  -->
    <div>
        <div v-for="ticket in filteredTickets" :key="ticket.id">
            <app-ticket-list-item :ticket="ticket" class="marginBottom-12"></app-ticket-list-item>
        </div>
    </div>
</template>

<script>
import TicketListItem from "./TicketListItem.vue";

export default {
    name: "TicketList",
    props: ['filteredTickets'],
    components: {
        appTicketListItem: TicketListItem
    }
}
</script>

