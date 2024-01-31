<!--Menu ngang-->

<template>
    <!-- Navigation -->
    <div class="navbar navbar-sm menu-horizontal-style"
         :class="{'d-none': menuConfig}"
    >
        <div class="container-fluid">
            <div class="flex-fill overflow-auto overflow-lg-visible scrollbar-hidden">
                <ul class="nav gap-1 flex-nowrap flex-lg-wrap">
                    <li class="nav-item">
                        <router-link to="/admin/dashboard" class="nav-link active">
                            <i class="ph-house"></i>
                            <span>Tổng quan</span>
                        </router-link>
                    </li>
                    <li class="nav-item nav-item-dropdown-lg dropdown">
                        <a href="#" class="navbar-nav-link dropdown-toggle rounded" data-bs-toggle="dropdown">
                            <i class="ph-note-blank me-2"></i>
                            Sản phẩm
                        </a>

                        <div class="dropdown-menu">
                            <router-link to="/admin/product" class="dropdown-item rounded">Danh sách sản phẩm</router-link>
                            <router-link to="/admin/product/add" class="dropdown-item rounded">Thêm sản sản phẩm</router-link>
<!--                            <div class="dropdown-header">Basic layouts</div>-->
<!--                            <div class="dropdown-submenu dropdown-submenu-start">-->
<!--                                <a href="#" class="dropdown-item dropdown-toggle">-->
<!--                                    <i class="ph-columns me-2"></i>-->
<!--                                    Sidebars-->
<!--                                </a>-->
<!--                                <div class="dropdown-menu">-->
<!--                                    <a href="../seed/layout_2_sidebars_1_side.html" class="dropdown-item rounded">2 sidebars on 1 side</a>-->
<!--                                    <a href="../seed/layout_2_sidebars_2_sides.html" class="dropdown-item rounded">2 sidebars on 2 sides</a>-->
<!--                                    <a href="../seed/layout_3_sidebars.html" class="dropdown-item rounded">3 sidebars</a>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="dropdown-submenu dropdown-submenu-start">-->
<!--                                <a href="#" class="dropdown-item dropdown-toggle">-->
<!--                                    <i class="ph-rows me-2"></i>-->
<!--                                    Navbars-->
<!--                                </a>-->
<!--                                <div class="dropdown-menu">-->
<!--                                    <a href="../seed/layout_navbar_fixed.html" class="dropdown-item rounded">Fixed navbar</a>-->
<!--                                    <a href="../seed/layout_navbar_hideable.html" class="dropdown-item rounded">Hideable navbar</a>-->
<!--                                    <a href="../seed/layout_navbar_sticky.html" class="dropdown-item rounded">Sticky navbar</a>-->
<!--                                    <a href="../seed/layout_fixed_footer.html" class="dropdown-item rounded">Fixed footer</a>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="dropdown-submenu dropdown-submenu-start">-->
<!--                                <a href="#" class="dropdown-item dropdown-toggle">-->
<!--                                    <i class="ph-squares-four me-2"></i>-->
<!--                                    Boxed-->
<!--                                </a>-->
<!--                                <div class="dropdown-menu">-->
<!--                                    <a href="../seed/layout_boxed_page.html" class="dropdown-item rounded">Boxed page</a>-->
<!--                                    <a href="../seed/layout_boxed_content.html" class="dropdown-item rounded">Boxed content</a>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="dropdown-header">Others</div>-->
                        </div>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="navbar-nav-link dropdown-toggle rounded"
                            data-bs-toggle="dropdown" to="/admin/test">
                            <i class="ph-layout me-2"></i>admin 123
                        </RouterLink>
<!--                        <a href="#" class="navbar-nav-link dropdown-toggle rounded" data-bs-toggle="dropdown">-->
<!--                            <i class="ph-layout me-2"></i>-->
<!--                            Page-->
<!--                        </a>-->

                        <div class="dropdown-menu start-0 end-0 p-3 mx-md-3">
                            <div class="row">
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <div class="fw-bold border-bottom pb-2 mb-2">Navbars</div>
                                    <div class="mb-3 mb-md-0">
                                        <a href="layout_navbar_fixed.html" class="dropdown-item rounded">Fixed navbar</a>
                                        <a href="layout_navbar_hideable.html" class="dropdown-item rounded">Hideable navbar</a>
                                        <a href="layout_navbar_sticky.html" class="dropdown-item rounded">Sticky navbar</a>
                                        <a href="layout_fixed_footer.html" class="dropdown-item rounded">Fixed footer</a>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <div class="fw-bold border-bottom pb-2 mb-2">Sidebars</div>
                                    <div class="mb-3 mb-md-0">
                                        <a href="layout_2_sidebars_1_side.html" class="dropdown-item rounded">2 sidebars on 1 side</a>
                                        <a href="layout_2_sidebars_2_sides.html" class="dropdown-item rounded">2 sidebars on 2 sides</a>
                                        <a href="layout_3_sidebars.html" class="dropdown-item rounded">3 sidebars</a>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <div class="fw-bold border-bottom pb-2 mb-2">Sections</div>
                                    <div class="mb-3 mb-md-0">
                                        <a href="layout_no_header.html" class="dropdown-item rounded">No header</a>
                                        <a href="layout_no_footer.html" class="dropdown-item rounded">No footer</a>
                                        <a href="layout_boxed_page.html" class="dropdown-item rounded">Boxed page</a>
                                        <a href="layout_boxed_content.html" class="dropdown-item rounded">Boxed content</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="navbar-nav-link dropdown-toggle rounded" data-bs-toggle="dropdown">
                            <i class="ph-columns me-2"></i>
                            Sidebars
                        </a>

                        <div class="dropdown-menu start-0 end-0 p-3 mx-md-3">
                            <div class="row">
                                <div class="col-md-3 mb-3 mb-md-0">
                                    <div class="fw-bold border-bottom pb-2 mb-2">Main</div>
                                    <div class="mb-3 mb-md-0">
                                        <a href="sidebar_default_resizable.html" class="dropdown-item rounded">Resizable</a>
                                        <a href="sidebar_default_resized.html" class="dropdown-item rounded">Resized</a>
                                        <a href="sidebar_default_hideable.html" class="dropdown-item rounded">Hideable</a>
                                        <a href="sidebar_default_hidden.html" class="dropdown-item rounded">Hidden</a>
                                        <a href="sidebar_default_stretched.html" class="dropdown-item rounded">Stretched</a>
                                        <a href="sidebar_default_color_dark.html" class="dropdown-item rounded">Dark color</a>
                                    </div>
                                </div>
                                <div class="col-md-3 mb-3 mb-md-0">
                                    <div class="fw-bold border-bottom pb-2 mb-2">Secondary</div>
                                    <div class="mb-3 mb-md-0">
                                        <a href="sidebar_secondary_hideable.html" class="dropdown-item rounded">Hideable</a>
                                        <a href="sidebar_secondary_hidden.html" class="dropdown-item rounded">Hidden</a>
                                        <a href="sidebar_secondary_stretched.html" class="dropdown-item rounded">Stretched</a>
                                        <a href="sidebar_secondary_color_dark.html" class="dropdown-item rounded">Dark color</a>
                                    </div>
                                </div>
                                <div class="col-md-3 mb-3 mb-md-0">
                                    <div class="fw-bold border-bottom pb-2 mb-2">Right</div>
                                    <div class="mb-3 mb-md-0">
                                        <a href="sidebar_right_hideable.html" class="dropdown-item rounded">Hideable</a>
                                        <a href="sidebar_right_hidden.html" class="dropdown-item rounded">Hidden</a>
                                        <a href="sidebar_right_stretched.html" class="dropdown-item rounded">Stretched</a>
                                        <a href="sidebar_right_color_dark.html" class="dropdown-item rounded">Dark color</a>
                                    </div>
                                </div>
                                <div class="col-md-3 mb-3 mb-md-0">
                                    <div class="fw-bold border-bottom pb-2 mb-2">Other</div>
                                    <div class="mb-3 mb-md-0">
                                        <a href="sidebar_components.html" class="dropdown-item rounded">Sidebar components</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="navbar-nav-link dropdown-toggle rounded" data-bs-toggle="dropdown">
                            <i class="ph-rows me-2"></i>
                            Navbars
                        </a>

                        <div class="dropdown-menu start-0 end-0 p-3 mx-md-3">
                            <div class="row">
                                <div class="col-md-3 mb-3 mb-md-0">
                                    <div class="fw-bold border-bottom pb-2 mb-2">Single</div>
                                    <div class="mb-3 mb-md-0">
                                        <a href="navbar_single_top_static.html" class="dropdown-item rounded">Top static</a>
                                        <a href="navbar_single_top_fixed.html" class="dropdown-item rounded">Top fixed</a>
                                        <a href="navbar_single_bottom_static.html" class="dropdown-item rounded">Bottom static</a>
                                        <a href="navbar_single_bottom_fixed.html" class="dropdown-item rounded">Bottom fixed</a>
                                    </div>
                                </div>
                                <div class="col-md-3 mb-3 mb-md-0">
                                    <div class="fw-bold border-bottom pb-2 mb-2">Multiple</div>
                                    <div class="mb-3 mb-md-0">
                                        <a href="navbar_multiple_top_static.html" class="dropdown-item rounded">Top static</a>
                                        <a href="navbar_multiple_top_fixed.html" class="dropdown-item rounded">Top fixed</a>
                                        <a href="navbar_multiple_bottom_static.html" class="dropdown-item rounded">Bottom static</a>
                                        <a href="navbar_multiple_bottom_fixed.html" class="dropdown-item rounded">Bottom fixed</a>
                                        <a href="navbar_multiple_top_bottom_fixed.html" class="dropdown-item rounded">Top and bottom fixed</a>
                                        <a href="navbar_multiple_secondary_sticky.html" class="dropdown-item rounded">Secondary sticky</a>
                                    </div>
                                </div>
                                <div class="col-md-3 mb-3 mb-md-0">
                                    <div class="fw-bold border-bottom pb-2 mb-2">Content</div>
                                    <div class="mb-3 mb-md-0">
                                        <a href="navbar_component_single.html" class="dropdown-item rounded">Single</a>
                                        <a href="navbar_component_multiple.html" class="dropdown-item rounded">Multiple</a>
                                    </div>
                                </div>
                                <div class="col-md-3 mb-3 mb-md-0">
                                    <div class="fw-bold border-bottom pb-2 mb-2">Other</div>
                                    <div class="mb-3 mb-md-0">
                                        <a href="navbar_colors.html" class="dropdown-item rounded">Color options</a>
                                        <a href="navbar_sizes.html" class="dropdown-item rounded">Sizing options</a>
                                        <a href="navbar_components.html" class="dropdown-item rounded">Navbar components</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="navbar-nav-link dropdown-toggle rounded" data-bs-toggle="dropdown">
                            <i class="ph-list me-2"></i>
                            Navigation
                        </a>

                        <div class="dropdown-menu start-0 end-0 p-3 mx-md-3">
                            <div class="row">
                                <div class="col-md-6 mb-3 mb-md-0">
                                    <div class="fw-bold border-bottom pb-2 mb-2">Vertical</div>
                                    <div class="mb-3 mb-md-0">
                                        <a href="navigation_vertical_styles.html" class="dropdown-item rounded">Navigation styles</a>
                                        <a href="navigation_vertical_collapsible.html" class="dropdown-item rounded">Collapsible menu</a>
                                        <a href="navigation_vertical_accordion.html" class="dropdown-item rounded">Accordion menu</a>
                                        <a href="navigation_vertical_bordered.html" class="dropdown-item rounded">Bordered navigation</a>
                                        <a href="navigation_vertical_right_icons.html" class="dropdown-item rounded">Right icons</a>
                                        <a href="navigation_vertical_badges.html" class="dropdown-item rounded">Badges</a>
                                        <a href="navigation_vertical_disabled.html" class="dropdown-item rounded">Disabled items</a>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3 mb-md-0">
                                    <div class="fw-bold border-bottom pb-2 mb-2">Horizontal</div>
                                    <div class="mb-3 mb-md-0">
                                        <a href="navigation_horizontal_styles.html" class="dropdown-item rounded">Navigation styles</a>
                                        <a href="navigation_horizontal_elements.html" class="dropdown-item rounded">Navigation elements</a>
                                        <a href="navigation_horizontal_tabs.html" class="dropdown-item rounded">Tabbed navigation</a>
                                        <a href="navigation_horizontal_disabled.html" class="dropdown-item rounded">Disabled items</a>
                                        <a href="navigation_horizontal_mega.html" class="dropdown-item rounded">Mega menu</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item nav-item-dropdown-lg dropdown">
                        <a href="#" class="navbar-nav-link dropdown-toggle rounded" data-bs-toggle="dropdown">
                            <i class="ph-note-blank me-2"></i>
                            Starter kit
                        </a>

                        <div class="dropdown-menu">
                            <div class="dropdown-header">Basic layouts</div>
                            <div class="dropdown-submenu dropdown-submenu-start">
                                <a href="#" class="dropdown-item dropdown-toggle">
                                    <i class="ph-columns me-2"></i>
                                    Sidebars
                                </a>
                                <div class="dropdown-menu">
                                    <a href="../seed/layout_2_sidebars_1_side.html" class="dropdown-item rounded">2 sidebars on 1 side</a>
                                    <a href="../seed/layout_2_sidebars_2_sides.html" class="dropdown-item rounded">2 sidebars on 2 sides</a>
                                    <a href="../seed/layout_3_sidebars.html" class="dropdown-item rounded">3 sidebars</a>
                                </div>
                            </div>
                            <div class="dropdown-submenu dropdown-submenu-start">
                                <a href="#" class="dropdown-item dropdown-toggle">
                                    <i class="ph-rows me-2"></i>
                                    Navbars
                                </a>
                                <div class="dropdown-menu">
                                    <a href="../seed/layout_navbar_fixed.html" class="dropdown-item rounded">Fixed navbar</a>
                                    <a href="../seed/layout_navbar_hideable.html" class="dropdown-item rounded">Hideable navbar</a>
                                    <a href="../seed/layout_navbar_sticky.html" class="dropdown-item rounded">Sticky navbar</a>
                                    <a href="../seed/layout_fixed_footer.html" class="dropdown-item rounded">Fixed footer</a>
                                </div>
                            </div>
                            <div class="dropdown-submenu dropdown-submenu-start">
                                <a href="#" class="dropdown-item dropdown-toggle">
                                    <i class="ph-squares-four me-2"></i>
                                    Boxed
                                </a>
                                <div class="dropdown-menu">
                                    <a href="../seed/layout_boxed_page.html" class="dropdown-item rounded">Boxed page</a>
                                    <a href="../seed/layout_boxed_content.html" class="dropdown-item rounded">Boxed content</a>
                                </div>
                            </div>
                            <div class="dropdown-header">Others</div>
                            <a href="../seed/layout_no_header.html" class="dropdown-item rounded">No header</a>
                            <a href="../seed/layout_no_footer.html" class="dropdown-item rounded">No footer</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- /navigation -->
</template>

<script>
import { RouterLink } from 'vue-router'
import { mapActions, mapGetters } from 'vuex'

export default {
    components: { RouterLink },
    computed: {
        // mix the getters into computed with object spread operator
        ...mapGetters([
            'menuConfig'
        ])
    },
    methods: {
        ...mapActions([
            'handleMenuConfig'
        ])
    }
};
</script>

<style scoped>
@media (max-width: 992px){
    .menu-horizontal-style {
        display: none;
    }
}

.menu-horizontal-style{
    border-bottom: 1px solid rgba(0,0,0,.125);
}
</style>
