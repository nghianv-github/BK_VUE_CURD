
<template>
    <!-- Demo config -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="demo_config">
        <div class="position-absolute top-50 end-100 visible">
            <button type="button" class="btn btn-info translate-middle-y rounded-end-0" data-bs-toggle="offcanvas" data-bs-target="#demo_config">
                <i class="ph-wrench"></i>
            </button>
        </div>

        <div class="offcanvas-header border-bottom py-0">
            <h5 class="offcanvas-title py-3">Cấu hình hiển thị</h5>
            <button type="button" class="btn btn-light btn-sm btn-icon border-transparent rounded-pill" data-bs-dismiss="offcanvas">
                <i class="ph-x"></i>
            </button>
        </div>

        <div class="offcanvas-body">
            <div class="fw-semibold mb-2">Menu</div>
            <div class="list-group mb-3">
                <label class="list-group-item list-group-item-action form-check border-width-1 rounded mb-2">
                    <div class="d-flex flex-fill my-1">
                        <div class="form-check-label d-flex me-2">
                            <i class="ph-rows ph-lg me-3"></i>
                            <div>
                                <span class="fw-bold">Menu ngang</span>
<!--                                <div class="fs-sm text-muted"></div>-->
                            </div>
                        </div>
                        <input id="radio-item-disabled" type="radio" class="form-check-input cursor-pointer ms-auto" name="menu-config"
                               v-model="handleMenu" value="1" :checked = '!menuConfig'>
<!--                        <input type="radio" class="form-check-input cursor-pointer ms-auto" name="menu-config"-->
<!--                               value="0" :checked = 'menuConfig'>-->
                    </div>
                </label>

                <label class="list-group-item list-group-item-action form-check border-width-1 rounded mb-2">
                    <div class="d-flex flex-fill my-1">
                        <div class="form-check-label d-flex me-2">
                            <i class="ph-columns ph-lg me-3"></i>
                            <div>
                                <span class="fw-bold">Menu dọc</span>
<!--                                <div class="fs-sm text-muted">Switch to dark theme</div>-->
                            </div>
                        </div>
                        <input type="radio" class="form-check-input cursor-pointer ms-auto" name="menu-config"
                               v-model="handleMenu" value="0" :checked = 'menuConfig'>
                    </div>
                </label>
            </div>

            <div class="fw-semibold mb-2">Màu sắc</div>
            <div class="list-group mb-3">
                <label class="list-group-item list-group-item-action form-check border-width-1 rounded mb-2">
                    <div class="d-flex flex-fill my-1">
                        <div class="form-check-label d-flex me-2">
                            <i class="ph-sun ph-lg me-3"></i>
                            <div>
                                <span class="fw-bold">Màu sáng</span>
                                <div class="fs-sm text-muted">Khuyến nghị: sử dụng vào buổi sáng</div>
                            </div>
                        </div>
                        <input type="radio" class="form-check-input cursor-pointer ms-auto" name="main-theme" value="light" checked>
                    </div>
                </label>

                <label class="list-group-item list-group-item-action form-check border-width-1 rounded mb-2">
                    <div class="d-flex flex-fill my-1">
                        <div class="form-check-label d-flex me-2">
                            <i class="ph-moon ph-lg me-3"></i>
                            <div>
                                <span class="fw-bold">Màu tối</span>
                                <div class="fs-sm text-muted">Khuyến nghị: sử dụng vào buổi tối</div>
                            </div>
                        </div>
                        <input type="radio" class="form-check-input cursor-pointer ms-auto" name="main-theme" value="dark">
                    </div>
                </label>
            </div>
        </div>

    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            handleMenu: this.menuConfig ? 1: 0, // Giá trị mặc định cho radio button
        };
    },
    computed: {
        // mix the getters into computed with object spread operator
        ...mapGetters([
            'menuConfig'
        ])
    },
    methods: {
        ...mapActions([
            'handleMenuConfig'
        ]),
        handleRadioMenuConfig() {
            this.handleMenuConfig(+this.handleMenu === 0);
        },
    },
    watch: {
        handleMenu(newValue, oldValue) {
            console.log('newValue', newValue);
            console.log('oldValue', oldValue);
            this.handleRadioMenuConfig();
        },
    },
}

</script>

<style scoped>

</style>