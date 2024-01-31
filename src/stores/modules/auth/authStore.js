import { defineStore } from 'pinia';
import axios from 'axios'

export const authStore = defineStore('authStore', {
    state: () => ({
        refreshToken: localStorage.getItem('rlsf'),
    }),

    getters: {
        getRefreshToken: state => state.refreshToken
    },

    actions: {
        // increment() {
        //     this.counter++
        // },

        async logoutUserAction(){
            try {
                console.log('logout', this.refreshToken)
                const rs = await axios.post('http://localhost:9898/api/logout', {
                    refreshToken: this.refreshToken
                });
                return rs.data.code;
            } catch (error) {
                console.error('Error calling API:', error);
                return 0;
            }
        },
    }
})
