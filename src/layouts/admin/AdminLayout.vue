<template>
    <AdminHeaderComponent />
    <AdminMenuHorizontalComponent />
    <div class="page-content">
        <AdminMenuVertical />
        <div class="content-wrapper container">
            <div class="content-inner">
                <AdminBreadcrumbComponent />

                <div class="content pt-0">
                    <router-view></router-view>
                </div>

            </div>

        </div>
    </div>
    <AdminFooterComponent />
    <AdminConfigComponent />
</template>

<script>
import '@/assets/styles/admin/inter.css'
import '@/assets/styles/admin/styles.min.css'
import '@/assets/styles/admin/all.min.css'
import '@/assets/styles/fontawesome/fontawesome.min.css'
import '@/assets/styles/admin/overridetheme.css'
import '@/assets/styles/admin/admin.css'

// Js assets/js/theme/app.js
import '@/assets/js/theme/demo_configurator.js'
import '@/assets/js/lib/bootstrap.bundle.min.js'
import '@/assets/js/theme/app.js'

import AdminMenuVertical from '@/components/common/admin/AdminMenuVertical.vue'
import AdminHeaderComponent from '@/components/common/admin/AdminHeaderComponent.vue'
import AdminBreadcrumbComponent from '@/components/common/admin/AdminBreadcrumbComponent.vue'
import AdminFooterComponent from '@/components/common/admin/AdminFooterComponent.vue'
import AdminMenuHorizontalComponent from '@/components/common/admin/AdminMenuHorizontalComponent.vue'
import AdminConfigComponent from '@/components/common/admin/AdminConfigComponent.vue'
export default {
    components: {
        AdminMenuVertical,
        AdminHeaderComponent,
        AdminBreadcrumbComponent,
        AdminFooterComponent,
        AdminMenuHorizontalComponent,
        AdminConfigComponent
    },
};
</script>

<style scoped>
@media (min-width: 1380px) {
    .container {
        max-width: 95%;
    }
}

@media (max-width: 1368px) {
    .container {
        max-width: 100%;
        padding: 0;
    }
}
.page-content{
    min-height: 745px;
}
</style>
