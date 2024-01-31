<script setup>
import { useRouter } from 'vue-router'
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted, ref } from 'vue'
import axios from 'axios'

const router = useRouter();
/**
 * Trong ví dụ này, counter là một tham chiếu tới một object.
 * AE có thể sử dụng form.value để truy cập và thay đổi giá trị của tham chiếu.
 * Khi giá trị thay đổi, component sẽ tự động được render lại
 */
let form = ref({
    name: '',
    type: '',
    description: '',
    photo: '',
    quantity: '',
    price: '',
    status: 1
});
onBeforeMount(() => {
    console.log('onBeforeMount 2');
})
onMounted(async () => {
    console.log('onMounted 2');
})
onBeforeUnmount(() => {
    console.log('onBeforeUnmount 2');
})
onUnmounted(() => {
    console.log('onUnmounted 2');
})

const getPhoto = () => {
    let photo = ''
    if(form.value.photo && form.value.photo.indexOf('base64') != -1){
        photo = form.value.photo
    }
    return photo
}

const updatePhoto = e => {
    let file = e.target.files[0];
    let render = new FileReader();
    let limit = 1024 * 1024 * 2;
    if(file['size'] > limit){
        return false;
    }
    render.onloadend = () => {
        form.value.photo = render.result
    }
    render.readAsDataURL(file)
}

const saveProduct = async () => {
    const formData = new FormData()
    formData.append('name', form.value.name)
    formData.append('description', form.value.description)
    formData.append('photo', form.value.photo)
    formData.append('type', form.value.type)
    formData.append('quantity', form.value.quantity)
    formData.append('price', form.value.price)
    formData.append('status', form.value.status)

    axios.post('http://localhost:9898/api/addProduct', formData)
        .then(rs => {
            console.log('rs', rs)
            form.value.name = ''
            form.value.description = ''
            form.value.photo = ''
            form.value.type = ''
            form.value.quantity = ''
            form.value.status = 1
            router.push('/admin/product')

            // eslint-disable-next-line no-undef
            toast.fire({
                icon: "success",
                title: "Product add success"
            })
        })
        .catch(error => {
            console.log('error', error)
        })
}
</script>
<template>
    <div class="card">
        <div class="card-header">
            <h5 class="mb-0">Thông tin</h5>
        </div>

        <div class="card-body border-top">
            <form action="#">
                <div class="row mb-3">
                    <label class="col-lg-3 col-form-label">Tên</label>
                    <div class="col-lg-9">
                        <input type="text" class="form-control" v-model="form.name">
                    </div>
                </div>

                <div class="row mb-3">
                    <label class="col-lg-3 col-form-label">Loại</label>
                    <div class="col-lg-9">
                        <input type="text" class="form-control" v-model="form.type">
                    </div>
                </div>

                <div class="row mb-3">
                    <label class="col-lg-3 col-form-label">Số lượng</label>
                    <div class="col-lg-9">
                        <input type="text" class="form-control" v-model="form.quantity">
                    </div>
                </div>

                <div class="row mb-3">
                    <label class="col-lg-3 col-form-label">Giá</label>
                    <div class="col-lg-9">
                        <input type="text" class="form-control" v-model="form.price">
                    </div>
                </div>

                <div class="row mb-3">
                    <label class="col-lg-3 col-form-label">Trạng thái</label>
                    <div class="col-lg-9">
                        <div class="form-check-horizontal">
                            <label class="form-check form-check-inline">
                                <input type="radio" class="form-check-input" value="1" name="status" checked="" v-model="form.status">
                                <span class="form-check-label">Hoạt động</span>
                            </label>

                            <label class="form-check form-check-inline">
                                <input type="radio" class="form-check-input" value="2" name="status" v-model="form.status">
                                <span class="form-check-label">Không hoạt động</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="row mb-3">
                    <label class="col-lg-3 col-form-label">Ảnh:</label>
                    <div class="col-lg-9">
                        <div class="mb-2">
                            <img :src="getPhoto()" height="50" alt="image">
                        </div>
                        <input type="file" class="form-control" @change="updatePhoto">
                        <div class="form-text text-muted">Accepted formats: gif, png, jpg. Max file size 2Mb</div>
                    </div>
                </div>

                <div class="row mb-3">
                    <label class="col-lg-3 col-form-label">Mô tả</label>
                    <div class="col-lg-9">
                        <textarea rows="3" cols="3" class="form-control" placeholder="Enter your message here"
                                  v-model="form.description"
                        >
                        </textarea>
                    </div>
                </div>

                <div class="text-end">
                    <button type="button" class="btn btn-primary"
                            @click="saveProduct()"
                    >
                        <i class="ph-paper-plane-tilt ms-2"></i>
                        Submit form
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>