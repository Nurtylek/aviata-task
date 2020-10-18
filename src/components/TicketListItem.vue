<template>
    <article
        class="ticket"
        v-for="(tct, index) in ticket.flights.segments"
        :key="index"
    >
        <div class="ticket__description flex flex-column space-between">
            <div class="flex space-between">
                <div>
                    <img :src="airlineImg(tct.airline)" alt="ticket photo"/>
                    <span class="ticket__carrier-name marginLeft-12">{{ ticket.carrier_name }}
            </span>
                </div>
                <div class="flex flex-column">
                    <span class="ticket__day"> {{ formatDate(tct.dep.at) }} </span>
                    <span class="ticket__hour"> {{ formatHours(tct.dep.at) }} </span>
                </div>
                <div>
                    <div class="ticket__diff text-center">{{ diffTime(ticket.flights.duration) }}</div>
                    <!--                        <div>-->
                    <!--                            <div class="ticket__div&#45;&#45;left"></div>-->
                    <!--                            <div class="ticket__div&#45;&#45;right"></div>-->
                    <!--                        </div>-->
                    <div class="ticket__direction--title">прямой рейс</div>
                </div>
                <div class="flex flex-column">
                    <span class="ticket__day"> {{ formatDate(tct.arr.at) }} </span>
                    <span class="ticket__hour"> {{ formatHours(tct.arr.at) }} </span>
                </div>
            </div>
            <div class="flex align-center space-between">
                <div class="ticket__condition">
                    <a class="ticket__condition--name" @click="isOpen = !isOpen">Детали перелета</a>
                    <a class="ticket__condition--name">Условия тарифа</a>
                </div>
                <div
                    class="ticket__type"
                    :class="{ 'ticket__type--red': ticket.refundable }"
                >
                    {{ ticket.refundable ? "невозвратный" : "возвратный" }}
                </div>
            </div>
        </div>
        <div class="ticket__cta flex flex-column space-between">
            <span class="ticket__price marginBottom-12">{{ ticket.price.amount }} ₸</span>
            <button class="ticket__buy-btn marginBottom-12 text-center">
                Выбрать
            </button>
            <span class="ticket__info">Цена за всех пассажиров</span>
            <div class="flex align-center">
                <span class="ticket__laggage-title">Нет багажа</span>
                <button class="ticket__laggage-add">+ Добавить багаж</button>
            </div>
        </div>
        <teleport to="#portals">
            <div v-if="isOpen">
                <div class="backdrop" @click="isOpen = false"></div>
                <div class="modal">
                    <p>Just to demonstrate new feature of vue 3 (teleporting elements as a direct child of body element (in this case)</p>
                </div>
            </div>
        </teleport>
    </article>
</template>

<script>
export default {
    name: "TicketListItem",
    data: () => ({
        isOpen: false
    }),
    props: {
        ticket: {
            type: Object,
            required: true
        }
    },
    methods: {
        airlineImg(code) {
            return `https://aviata.kz/static/airline-logos/80x80/${code}.png`;
        },
        formatDate(time) {
            const options = {year: "numeric", month: "long", day: "numeric"};
            return new Date(time).toLocaleDateString(navigator.language, options);
        },
        formatHours(time) {
            return (
                new Date(time).getHours() +
                ":" +
                (new Date(time).getMinutes() === 0
                    ? `${new Date(time).getMinutes() + "0"}`
                    : new Date(time).getMinutes())
            );
        },
        diffTime(duration) {
            return `${Math.trunc(duration / 60)}ч ${duration % 60}м`;
        }
    }
};
</script>

<style scoped lang="scss">
.ticket {
    height: 168px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    display: grid;
    grid-template-columns: 5fr 2fr;

    &__description {
        padding: 16px;
    }

    &__carrier-name {
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        color: var(--text-color);
    }

    &__day {
        font-size: 12px;
        line-height: 16px;
        color: var(--text-color);
    }

    &__hour {
        font-weight: 600;
        font-size: 24px;
        line-height: 33px;
        color: var(--text-color);
    }

    &__diff {
        color: rgba(185, 185, 185, 1);
        font-size: 12px;
        line-height: 18px;
    }

    &__cta {
        padding: 16px;
        align-items: center;
        background: #f5f5f5;
    }

    &__condition {
        &--name {
            color: var(--primary-blue);
            border-bottom: 1px dashed;
            padding-bottom: 6px;
            cursor: pointer;

            &:last-of-type {
                margin-left: 16px;
            }
        }
    }

    &__type {
        color: var(--primary-gray);
        font-size: 12px;
        line-height: 14px;

        &--red {
            color: var(--primary-red);
        }
    }

    &__price {
        font-size: 24px;
        line-height: 28px;
        color: var(--text-color);
    }

    &__buy-btn {
        background: var(--primary-green);
        height: 40px;
        font-size: 18px;
        line-height: 25px;
        color: var(--primary-white);
        padding: 8px 12px;
        border: none;
        width: 100%;
        border-radius: 4px;

        &:focus {
            outline: none;
        }
    }

    &__info {
        font-size: 12px;
        line-height: 16px;
        color: var(--primary-gray);
    }

    &__laggage {
        &-title {
            font-size: 12px;
            line-height: 16px;
            color: var(--text-color);
        }

        &-add {
            background: var(--primary-bluish);
            padding: 4px 8px;
            border-radius: 2px;
            border: none;
            margin-left: 6px;

            &:focus {
                outline: none;
            }
        }
    }
}
</style>
