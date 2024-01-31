import axios from 'axios'

export default {
    async getAllProductsAction() {
        let rs = await axios.post('http://localhost:9898/api/getAllProduct')
        console.log('rs.data.products', rs.data.products);
        this.products = rs.data.products
    },
}