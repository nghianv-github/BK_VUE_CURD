import { defineStore } from 'pinia';
import productGetters from '@/stores/modules/productStoreConfig/productGetters.js'
import productActions from '@/stores/modules/productStoreConfig/productActions.js'

export const productStoreConfig = defineStore(
    'productStoreConfig', {
    state: () => ({
        products: [],
        productItem: {}
    }),
    getters: productGetters,
    actions: productActions
})
