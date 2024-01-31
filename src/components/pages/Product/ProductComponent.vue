<script setup>
// load dữ liệu mới không dùng pinia, dự liệu cần lưu save state store để gọi ca cho khac nưa
import { productStoreConfig } from '@/stores/modules/productStoreConfig/index.js'
import { useRouter } from 'vue-router'
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted, ref, toRaw } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'

const productStore = productStoreConfig();
const router = useRouter();


console.log('productStore.getProduct', toRaw(productStore.getProducts));


let products = ref([]);


onBeforeMount( async () => {
    console.log('onBeforeMount 1');

    // productStore.productItem = {
    //     1: 'nghianv',
    //     2: 'ok'
    // }
    // await productStore.getAllProductsAction()
    await getProducts();
})
onMounted(async () => {
    // console.log(' productStore.getProducts();',  toRaw(productStore.getProducts));
    // console.log(' productStore.getProductItem;',  productStore.getAllProductsAction());
    console.log('onMounted 1');
})
onBeforeUnmount(() => {
    console.log('onBeforeUnmount 1');
})
onUnmounted(() => {
    console.log('onUnmounted 1');
})
const ourImage = img => `http://localhost:9898/upload/${img}`
const redirectProductAdd = () => router.push('/admin/product/add')
const getProducts = async () => {
    let rs = await axios.post('http://localhost:9898/api/getAllProduct')
    products.value = rs.data.products
}

const handleEdit = id => {
    router.push(`/admin/product/edit/${+id}`)
}

const handleDelete = id => {
    Swal.fire({
        title: 'Bạn có chắc muốn xóa?',
        text: 'Bạn muốn quay lại',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonText: 'Hủy',
        confirmButtonText: 'Đồng ý'
    })
    .then(rs => {
        if(!rs.value) return false
        axios.post(`http://localhost:9898/api/deleteProduct`, {id})
        .then(() => {
            Swal.fire( 'Xóa',
                'Sản phẩm xóa thành công',
                'success',
            )
            getProducts()
        })
        .catch(() => {
            Swal.fire("thất bại", 'Xóa thất bại vui lòng kiểm tra lại', 'Warning')
        })
    })
}
</script>
<template>
    <div class="mb-2">
        <button type="button" class="btn btn-outline-success btn-sm"
            @click="redirectProductAdd"
        >
            <i class="ph-plus-circle ph-sm me-2"></i>
            Thêm sản phẩm
        </button>
    </div>
    <div class="card">
        <div>
            <table class="table table-sm">
                <thead>
                    <tr class="text-center">
                        <th>#</th>
                        <th>Ảnh</th>
                        <th>Tên</th>
                        <th>Loại</th>
                        <th>Số lượng</th>
                        <th>Trạng thái</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-center" v-for="item in products" :key="item.id" v-if="(products.length > 0)">
                        <td>{{ item.id }}</td>
                        <td>
                            <span>
                                <img :src="ourImage(item.photo)" height="40" alt="image"
                                 v-if="item.photo"
                                >
                            </span>
                        </td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.type }}</td>
                        <td>{{ item.quantity }}</td>
                        <td class="text-center">
                            <span class="badge bg-danger bg-opacity-10 text-danger">{{ item.status }}</span>
                        </td>
                        <td class="text-center">
                            <div class="dropdown">
                                <a href="#" class="text-body" data-bs-toggle="dropdown">
                                    <i class="ph-list"></i>
                                </a>

                                <div class="dropdown-menu dropdown-menu-end">
<!--                                    <router-link :to="`/admin/product/${item.id}/edit`" class="dropdown-item">-->
<!--                                        <i class="ph-file-pdf me-2"></i>-->
<!--                                        Sửa-->
<!--                                    </router-link>-->
                                    <a href="javascript:" class="dropdown-item" @click="handleEdit(item.id)">
                                        <i class="ph-file-xls me-2"></i>
                                        Sửa
                                    </a>
                                    <a href="javascript:" class="dropdown-item" @click="handleDelete(item.id)">
                                        <i class="ph-file-xls me-2"></i>
                                        Xóa
                                    </a>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="mt-3 text-center" v-if="!products.length">
                <h5>Loading...</h5>
            </div>
        </div>
    </div>
</template>
