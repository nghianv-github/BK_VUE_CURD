<template>
    <!-- Main sidebar -->
    <div class="sidebar sidebar-dark sidebar-main sidebar-expand-lg">
        <h1>ERROR</h1>
        <!-- Sidebar content -->
        <div class="sidebar-content">
            <!-- Main navigation -->
            <div class="sidebar-section">
                <!-- Gọi component MenuItem để hiển thị menu -->
                <menu-item :menu="sidebarMenu" />
            </div>
            <!-- /main navigation -->
        </div>
        <!-- /sidebar content -->
    </div>
    <!-- /main sidebar -->
    <!--                class="nav-item nav-item-submenu-reversed"-->
</template>

<script>
import MenuItem from '@/components/TestComponent/MenuItem.vue';
export default {
    components: {
        'menu-item': MenuItem // Đặt tên theo cách không cần đăng ký toàn cục
    },
    data() {
        return {
            sidebarMenu: [
                {
                    id: 1,
                    level: 1,
                    icon: 'ph-house',
                    name: 'Dashboard',
                    link: '#'
                },
                {
                    id: 2,
                    level: 1,
                    icon: 'ph-layout',
                    name: 'Layouts',
                    children: [
                        {
                            id: 21,
                            level: 2,
                            icon: 'ph-house',
                            name: 'Default layout',
                            link: '#'
                        },
                        {
                            id: 23,
                            level: 2,
                            icon: 'ph-house',
                            name: 'Default layout',
                            link: '#'
                        },
                        {
                            id: 24,
                            level: 2,
                            icon: 'ph-house',
                            name: 'Default layout',
                            link: '#'
                        },
                        {
                            id: 25,
                            level: 2,
                            icon: 'ph-house',
                            name: 'Default layout',
                            link: '#'
                        },
                        {
                            id: 26,
                            level: 2,
                            icon: 'ph-house',
                            name: 'Default layout',
                            link: '#'
                        },
                        {
                            id: 27,
                            level: 2,
                            icon: 'ph-house',
                            name: 'Layout 2',
                            link: '#',
                            children: [
                                {
                                    id: 221,
                                    level: 3,
                                    icon: 'ph-house',
                                    name: 'Sub-layout 1',
                                    link: '#'
                                },
                                {
                                    id: 222,
                                    level: 3,
                                    icon: 'ph-house',
                                    name: 'Sub-layout 2',
                                    link: '#'
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 3,
                    level: 1,
                    icon: 'ph-list-numbers',
                    name: 'Themes',
                    children: [
                        {
                            id: 31,
                            level: 2,
                            name: 'Default',
                            link: '#'
                        }
                    ]
                }
                // ...Thêm các mục menu khác
            ],
            isOpen: {} // Dữ liệu theo dõi trạng thái hiển thị của menu con
        }
    },
    methods: {}
}
</script>

