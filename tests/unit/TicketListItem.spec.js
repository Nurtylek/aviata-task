import {mount} from "@vue/test-utils";
import TicketListItem from "@/components/TicketListItem";

describe("TicketListItem.vue", () => {
    const wrapper = mount(TicketListItem, {
        props: {
            ticket: {
                flights: []
            }
        }
    });

    test('should settled props correctly', () => {
        expect(wrapper.vm.ticket).toMatchObject({});
        expect(wrapper.vm.ticket.flights).toStrictEqual([]);
    })

    test('should emit options', async () => {
        wrapper.vm.$emit('selected-filter', []);
        await wrapper.vm.$nextTick();

        expect(wrapper.emitted()['selected-filter']).toBeTruthy();
    });
});
