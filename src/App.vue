<template>
    <div class="container">
        <app-the-toolbar></app-the-toolbar>
        <main class="main">
            <aside>
                <app-filter-ticket
                    filter-title="Авиакомпании"
                    :filter-options="filterAirlinesOptions"
                    @selected-filter="setFilterOptions($event)"
                ></app-filter-ticket>
            </aside>
            <section>
                <template  v-if="filteredTickets.length > 0">
                    <app-ticket-list :filtered-tickets="filteredTickets"></app-ticket-list>
                </template>
                <template v-if="filteredTickets.length === 0"><div class="text-center"><strong class="main__not-found">Нет Результатов</strong></div></template>
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

import {ref, computed} from 'vue'

export default {
    name: "App",
    components: {
        appTicketList: TicketList,
        appTheToolbar: TheToolbar,
        appFilterTicket: TicketFilter
    },
    setup() {
        const filterAirlinesOptions = FILTERAIRLINES;

        const filterOptions = ref([]);
        const setFilterOptions = (options) => {
            filterOptions.value = options;
        }

        const tickets = TICKETS;
        const filteredTickets = computed({
            get: () => {
                return tickets.filter(ticket => {
                    let filteredResult = undefined;

                    ticket.flights.segments.forEach(segment => {
                        filteredResult = filterOptions.value.includes(segment.airline);
                    });

                    return filteredResult;
                });
            }
        })

        return {
            tickets,
            filterOptions,
            filterAirlinesOptions,
            filteredTickets,
            setFilterOptions
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

.main__not-found {
    font-size: 24px;
}
</style>
