<template>
    <!-- Main navbar -->
    <div class="navbar navbar-dark navbar-expand-lg navbar-static header-style">
        <div class="container-fluid">
            <div class="d-flex d-lg-none me-2">
                <button type="button" class="navbar-toggler sidebar-mobile-main-toggle rounded-pill"
                    @click="handleActionMenuMobile"
                >
                    <i class="ph-list"></i>
                </button>
            </div>

            <div class="navbar-collapse flex-lg-1 order-2 order-lg-1" id="navbar_search"></div>
            <RouterLink id="header-logo" to="/admin">
                <img src="@/assets/images/logo_slogan.png" class="cursor-pointer img-fluid" alt="Your Image">
            </RouterLink>

            <ul class="nav hstack gap-sm-1 flex-row justify-content-end order-1 order-lg-2">
                <li class="nav-item d-lg-none">
                    <a href="#navbar_search" class="navbar-nav-link navbar-nav-link-icon rounded-pill" data-bs-toggle="collapse">
                        <i class="ph-magnifying-glass"></i>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="#" class="navbar-nav-link navbar-nav-link-icon rounded-pill" data-bs-toggle="offcanvas" data-bs-target="#notifications">
                        <i class="ph-bell"></i>
                        <span class="badge bg-yellow text-black position-absolute top-0 end-0 translate-middle-top zindex-1 rounded-pill mt-1 me-1">2</span>
                    </a>
                </li>

                <li class="nav-item nav-item-dropdown-lg dropdown">
                    <a href="#" class="navbar-nav-link align-items-center rounded-pill p-1" data-bs-toggle="dropdown">
                        <div class="status-indicator-container">
                            <img src="../../../assets/images/demo/users/face11.jpg" class="w-32px h-32px rounded-pill" alt="">
                            <span class="status-indicator bg-success"></span>
                        </div>
                        <span class="d-none d-lg-inline-block mx-lg-2">NghiaNV</span>
                    </a>

                    <div class="dropdown-menu dropdown-menu-end">
                        <a href="#" class="dropdown-item">
                            <i class="ph-user-circle me-2"></i>
                            My profile
                        </a>
                        <a href="#" class="dropdown-item">
                            <i class="ph-currency-circle-dollar me-2"></i>
                            My subscription
                        </a>
                        <a href="#" class="dropdown-item">
                            <i class="ph-shopping-cart me-2"></i>
                            My orders
                        </a>
                        <a href="#" class="dropdown-item">
                            <i class="ph-envelope-open me-2"></i>
                            My inbox
                            <span class="badge bg-primary rounded-pill ms-auto">26</span>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item">
                            <i class="ph-gear me-2"></i>
                            Account settings
                        </a>
                        <span @click="handleLogoutUser" class="dropdown-item cursor-pointer">
                            <i class="ph-sign-out me-2"></i>
                            Logout
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <!-- /main navbar -->
</template>

<script>
import { RouterLink } from 'vue-router'
import { mapActions, mapGetters } from 'vuex'
import { authStore } from '@/stores/modules/auth/authStore.js'

export default {
    setup() {
        const auth = authStore()
        return { auth }
    },
    components: { RouterLink },
    computed: {
        // mix the getters into computed with object spread operator
        ...mapGetters([
            'menuMobile'
        ])
    },
    methods: {
        ...mapActions([
            'handleMenuMobile',
        ]),
        handleActionMenuMobile(){
            this.handleMenuMobile(!this.menuMobile);
        },
        async handleLogoutUser() {
            await this.auth.logoutUserAction()
            localStorage.removeItem('rlsf');
            localStorage.removeItem('clsf');
            this.$router.push('/admin');
        }
    }
};
</script>

<style scoped>
#header-logo{
    width: 120px;
    height: 38px;
}
#header-logo > img{
    width: 100%;
    height: 100%;
    object-fit: scale-down;
}
.header-style{
    border-bottom: 1px solid rgba(0,0,0,.125);
}
</style>
