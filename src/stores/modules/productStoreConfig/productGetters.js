import { toRaw } from 'vue'

export default {
    getProducts: state => state.products,
    getProductItem: state => toRaw(state.productItem)
}