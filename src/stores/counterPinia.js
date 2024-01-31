import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
    state: () => ({
        counter: 0,
        userInfo: {
            id: 1,
            data: 'ok'
        }
    }),

    getters: {
        doubleCount: state => state.counter * 2
    },

    actions: {
        // increment() {
        //     this.counter++
        // },
        increment(payload) {
            this.counter++
            this.userInfo = payload
        },
    }
})
