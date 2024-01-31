
<template>
    <!-- Main sidebar -->
    <div class="sidebar sidebar-dark sidebar-main sidebar-expand-lg"
         :class="{
            'sidebar-main-resized': currentMenuVerticalResize,
            'sidebar-main-unfold': hoverCurrentMenuVerticalResize,
            'd-none': !menuConfig,
            'sidebar-mobile-expanded': menuMobile
         }"
    >
        <!-- Sidebar content -->
        <div class="sidebar-content">
            <!-- Main navigation -->
            <div class="sidebar-section"
                 @mouseover="handleMenuVerticalResizeOver"
                 @mouseout="handleMenuVerticalResizeOut"
            >
                <ul class="nav nav-sidebar"
                    data-nav-type="accordion">
                    <li class="nav-item">
                        <router-link to="/admin/dashboard" class="nav-link active">
                            <i class="ph-house"></i>
                            <span>Tổng quan</span>
                        </router-link>
                    </li>
                    <li class="nav-item nav-item-submenu">
                        <a href="javascript:" class="nav-link">
                            <i class="ph-layout"></i>
                            <span>Sản phẩm</span>
                        </a>
                        <ul class="nav-group-sub collapse">
                            <li class="nav-item"><router-link to="/admin/product" class="nav-link">Danh sách sản phẩm</router-link></li>
                            <li class="nav-item"><router-link to="/admin/product/add" class="nav-link">Thêm sản sản phẩm</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item nav-item-submenu">
                        <a href="javascript:" class="nav-link">
                            <i class="ph-layout"></i>
                            <span>Báo cáo</span>
                        </a>
                        <ul class="nav-group-sub collapse">
                            <li class="nav-item"><router-link to="/admin/order" class="nav-link">Đơn hàng</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item nav-item-submenu">
                        <a href="javascript:" class="nav-link">
                            <i class="ph-swatches"></i>
                            <span>Đối soát</span>
                        </a>
                        <ul class="nav-group-sub collapse">
                            <li class="nav-item"><router-link to="/admin/order" class="nav-link active">Đơn hàng</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item nav-item-submenu">
                        <a href="#" class="nav-link">
                            <i class="ph-note-blank"></i>
                            <span>Starter kit</span>
                        </a>
                        <ul class="nav-group-sub collapse">
                            <li class="nav-item"><a href="../seed/layout_static.html" class="nav-link">Static layout</a></li>
                            <li class="nav-item"><a href="../seed/layout_no_header.html" class="nav-link">No header</a></li>
                            <li class="nav-item"><a href="../seed/layout_no_footer.html" class="nav-link">No footer</a></li>
                            <li class="nav-item-divider"></li>
                            <li class="nav-item"><a href="../seed/layout_fixed_header.html" class="nav-link">Fixed header</a></li>
                            <li class="nav-item"><a href="../seed/layout_fixed_footer.html" class="nav-link">Fixed footer</a></li>
                            <li class="nav-item-divider"></li>
                            <li class="nav-item"><a href="../seed/layout_2_sidebars_1_side.html" class="nav-link">2 sidebars on 1 side</a></li>
                            <li class="nav-item"><a href="../seed/layout_2_sidebars_2_sides.html" class="nav-link">2 sidebars on 2 sides</a></li>
                            <li class="nav-item"><a href="../seed/layout_3_sidebars.html" class="nav-link">3 sidebars</a></li>
                            <li class="nav-item-divider"></li>
                            <li class="nav-item"><a href="../seed/layout_boxed_page.html" class="nav-link">Boxed page</a></li>
                            <li class="nav-item"><a href="../seed/layout_boxed_content.html" class="nav-link">Boxed content</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a href="../../../../docs/other_changelog.html" class="nav-link">
                            <i class="ph-list-numbers"></i>
                            <span>Changelog</span>
                            <span class="badge bg-primary align-self-center rounded-pill ms-auto">4.0</span>
                        </a>
                    </li>

                    <!-- Layout -->
                    <li class="nav-item nav-item-submenu">
                        <a href="#" class="nav-link">
                            <i class="ph-layout"></i>
                            <span>Page layouts</span>
                        </a>

                        <ul class="nav-group-sub collapse">
                            <li class="nav-item"><a href="layout_static.html" class="nav-link">Static layout</a></li>
                            <li class="nav-item"><a href="layout_no_header.html" class="nav-link">No header</a></li>
                            <li class="nav-item"><a href="layout_no_footer.html" class="nav-link">No footer</a></li>
                            <li class="nav-item-divider"></li>
                            <li class="nav-item"><a href="layout_fixed_header.html" class="nav-link">Fixed header</a></li>
                            <li class="nav-item"><a href="layout_fixed_footer.html" class="nav-link">Fixed footer</a></li>
                            <li class="nav-item-divider"></li>
                            <li class="nav-item"><a href="layout_2_sidebars_1_side.html" class="nav-link">2 sidebars on 1 side</a></li>
                            <li class="nav-item"><a href="layout_2_sidebars_2_sides.html" class="nav-link">2 sidebars on 2 sides</a></li>
                            <li class="nav-item"><a href="layout_3_sidebars.html" class="nav-link">3 sidebars</a></li>
                            <li class="nav-item-divider"></li>
                            <li class="nav-item"><a href="layout_boxed_page.html" class="nav-link">Boxed page</a></li>
                            <li class="nav-item"><a href="layout_boxed_content.html" class="nav-link">Boxed content</a></li>
                        </ul>
                    </li>
                    <li class="nav-item nav-item-submenu">
                        <a href="#" class="nav-link">
                            <i class="ph-columns"></i>
                            <span>Sidebars</span>
                        </a>
                        <ul class="nav-group-sub collapse">
                            <li class="nav-item nav-item-submenu">
                                <a href="#" class="nav-link">Main sidebar</a>
                                <ul class="nav-group-sub collapse">
                                    <li class="nav-item"><a href="sidebar_default_resizable.html" class="nav-link">Resizable</a></li>
                                    <li class="nav-item"><a href="sidebar_default_resized.html" class="nav-link">Resized</a></li>
                                    <li class="nav-item"><a href="sidebar_default_collapsible.html" class="nav-link">Collapsible</a></li>
                                    <li class="nav-item"><a href="sidebar_default_collapsed.html" class="nav-link">Collapsed</a></li>
                                    <li class="nav-item"><a href="sidebar_default_hideable.html" class="nav-link">Hideable</a></li>
                                    <li class="nav-item"><a href="sidebar_default_hidden.html" class="nav-link">Hidden</a></li>
                                    <li class="nav-item-divider"></li>
                                    <li class="nav-item"><a href="sidebar_default_color_light.html" class="nav-link">Light color</a></li>
                                </ul>
                            </li>
                            <li class="nav-item nav-item-submenu">
                                <a href="#" class="nav-link">Secondary sidebar</a>
                                <ul class="nav-group-sub collapse">
                                    <li class="nav-item"><a href="sidebar_secondary_collapsible.html" class="nav-link">Collapsible</a></li>
                                    <li class="nav-item"><a href="sidebar_secondary_collapsed.html" class="nav-link">Collapsed</a></li>
                                    <li class="nav-item"><a href="sidebar_secondary_hideable.html" class="nav-link">Hideable</a></li>
                                    <li class="nav-item"><a href="sidebar_secondary_hidden.html" class="nav-link">Hidden</a></li>
                                    <li class="nav-item-divider"></li>
                                    <li class="nav-item"><a href="sidebar_secondary_color_dark.html" class="nav-link">Dark color</a></li>
                                </ul>
                            </li>
                            <li class="nav-item nav-item-submenu">
                                <a href="#" class="nav-link">Right sidebar</a>
                                <ul class="nav-group-sub collapse">
                                    <li class="nav-item"><a href="sidebar_right_collapsible.html" class="nav-link">Collapsible</a></li>
                                    <li class="nav-item"><a href="sidebar_right_collapsed.html" class="nav-link">Collapsed</a></li>
                                    <li class="nav-item"><a href="sidebar_right_hideable.html" class="nav-link">Hideable</a></li>
                                    <li class="nav-item"><a href="sidebar_right_hidden.html" class="nav-link">Hidden</a></li>
                                    <li class="nav-item-divider"></li>
                                    <li class="nav-item"><a href="sidebar_right_color_dark.html" class="nav-link">Dark color</a></li>
                                </ul>
                            </li>
                            <li class="nav-item nav-item-submenu">
                                <a href="#" class="nav-link">Content sidebar</a>
                                <ul class="nav-group-sub collapse">
                                    <li class="nav-item"><a href="sidebar_content_left.html" class="nav-link">Left aligned</a></li>
                                    <li class="nav-item"><a href="sidebar_content_left_stretch.html" class="nav-link">Left stretched</a></li>
                                    <li class="nav-item"><a href="sidebar_content_left_sections.html" class="nav-link">Left sectioned</a></li>
                                    <li class="nav-item"><a href="sidebar_content_right.html" class="nav-link">Right aligned</a></li>
                                    <li class="nav-item"><a href="sidebar_content_right_stretch.html" class="nav-link">Right stretched</a></li>
                                    <li class="nav-item"><a href="sidebar_content_right_sections.html" class="nav-link">Right sectioned</a></li>
                                    <li class="nav-item-divider"></li>
                                    <li class="nav-item"><a href="sidebar_content_color_dark.html" class="nav-link">Dark color</a></li>
                                </ul>
                            </li>
                            <li class="nav-item-divider"></li>
                            <li class="nav-item nav-item-submenu">
                                <a href="#" class="nav-link">Sticky areas</a>
                                <ul class="nav-group-sub collapse">
                                    <li class="nav-item"><a href="sidebar_sticky_header.html" class="nav-link">Header</a></li>
                                    <li class="nav-item"><a href="sidebar_sticky_footer.html" class="nav-link">Footer</a></li>
                                    <li class="nav-item"><a href="sidebar_sticky_header_footer.html" class="nav-link">Header and footer</a></li>
                                    <li class="nav-item"><a href="sidebar_sticky_custom.html" class="nav-link">Custom elements</a></li>
                                </ul>
                            </li>
                            <li class="nav-item"><a href="sidebar_components.html" class="nav-link">Sidebar components</a></li>
                        </ul>
                    </li>
                    <li class="nav-item nav-item-submenu">
                        <a href="#" class="nav-link">
                            <i class="ph-rows"></i>
                            <span>Navbars</span>
                        </a>
                        <ul class="nav-group-sub collapse">
                            <li class="nav-item nav-item-submenu">
                                <a href="#" class="nav-link">Single navbar</a>
                                <ul class="nav-group-sub collapse">
                                    <li class="nav-item"><a href="navbar_single_bottom_fixed.html" class="nav-link">Bottom fixed</a></li>
                                    <li class="nav-item"><a href="navbar_single_header_before.html" class="nav-link">Before page header</a></li>
                                    <li class="nav-item"><a href="navbar_single_header_before_fixed.html" class="nav-link">Before page header fixed</a></li>
                                    <li class="nav-item"><a href="navbar_single_header_after.html" class="nav-link">After page header</a></li>
                                    <li class="nav-item"><a href="navbar_single_header_after_sticky.html" class="nav-link">After page header sticky</a></li>
                                </ul>
                            </li>
                            <li class="nav-item nav-item-submenu">
                                <a href="#" class="nav-link">Multiple navbars</a>
                                <ul class="nav-group-sub collapse">
                                    <li class="nav-item"><a href="navbar_multiple_top_static.html" class="nav-link">Top static</a></li>
                                    <li class="nav-item"><a href="navbar_multiple_top_fixed.html" class="nav-link">Top fixed</a></li>
                                    <li class="nav-item"><a href="navbar_multiple_bottom_static.html" class="nav-link">Bottom static</a></li>
                                    <li class="nav-item"><a href="navbar_multiple_bottom_fixed.html" class="nav-link">Multiple bottom fixed</a></li>
                                    <li class="nav-item"><a href="navbar_multiple_top_bottom_fixed.html" class="nav-link">Top and bottom fixed</a></li>
                                </ul>
                            </li>
                            <li class="nav-item nav-item-submenu">
                                <a href="#" class="nav-link">Content navbar</a>
                                <ul class="nav-group-sub collapse">
                                    <li class="nav-item"><a href="navbar_component_single.html" class="nav-link">Single navbar</a></li>
                                    <li class="nav-item"><a href="navbar_component_multiple.html" class="nav-link">Multiple navbars</a></li>
                                </ul>
                            </li>
                            <li class="nav-item-divider"></li>
                            <li class="nav-item"><a href="navbar_colors.html" class="nav-link">Color options</a></li>
                            <li class="nav-item"><a href="navbar_sizes.html" class="nav-link">Sizing options</a></li>
                            <li class="nav-item"><a href="navbar_components.html" class="nav-link">Navbar components</a></li>
                        </ul>
                    </li>
                    <li class="nav-item nav-item-submenu">
                        <a href="#" class="nav-link">
                            <i class="ph-arrow-fat-lines-down"></i>
                            <span>Vertical navigation</span>
                        </a>
                        <ul class="nav-group-sub collapse">
                            <li class="nav-item"><a href="navigation_vertical_styles.html" class="nav-link">Navigation styles</a></li>
                            <li class="nav-item"><a href="navigation_vertical_collapsible.html" class="nav-link">Collapsible menu</a></li>
                            <li class="nav-item"><a href="navigation_vertical_accordion.html" class="nav-link">Accordion menu</a></li>
                            <li class="nav-item"><a href="navigation_vertical_bordered.html" class="nav-link">Bordered navigation</a></li>
                            <li class="nav-item"><a href="navigation_vertical_right_icons.html" class="nav-link">Right icons</a></li>
                            <li class="nav-item"><a href="navigation_vertical_badges.html" class="nav-link">Badges</a></li>
                            <li class="nav-item"><a href="navigation_vertical_disabled.html" class="nav-link">Disabled items</a></li>
                        </ul>
                    </li>
                    <li class="nav-item nav-item-submenu">
                        <a href="#" class="nav-link">
                            <i class="ph-arrow-fat-lines-right"></i>
                            <span>Horizontal navigation</span>
                        </a>
                        <ul class="nav-group-sub collapse">
                            <li class="nav-item"><a href="navigation_horizontal_styles.html" class="nav-link">Navigation styles</a></li>
                            <li class="nav-item"><a href="navigation_horizontal_elements.html" class="nav-link">Navigation elements</a></li>
                            <li class="nav-item"><a href="navigation_horizontal_tabs.html" class="nav-link">Tabbed navigation</a></li>
                            <li class="nav-item"><a href="navigation_horizontal_disabled.html" class="nav-link">Disabled navigation links</a></li>
                            <li class="nav-item"><a href="navigation_horizontal_mega.html" class="nav-link">Horizontal mega menu</a></li>
                        </ul>
                    </li>
                    <li class="nav-item nav-item-submenu">
                        <a href="#" class="nav-link"><i class="ph-arrow-elbow-down-right"></i> <span>Menu levels</span></a>
                        <ul class="nav-group-sub collapse">
                            <li class="nav-item"><a href="#" class="nav-link">Second level</a></li>
                            <li class="nav-item nav-item-submenu">
                                <a href="#" class="nav-link">Second level with child</a>
                                <ul class="nav-group-sub collapse">
                                    <li class="nav-item"><a href="#" class="nav-link">Third level</a></li>
                                    <li class="nav-item nav-item-submenu">
                                        <a href="#" class="nav-link">Third level with child</a>
                                        <ul class="nav-group-sub collapse">
                                            <li class="nav-item"><a href="#" class="nav-link">Fourth level</a></li>
                                            <li class="nav-item"><a href="#" class="nav-link">Fourth level</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item"><a href="#" class="nav-link">Third level</a></li>
                                </ul>
                            </li>
                            <li class="nav-item"><a href="#" class="nav-link">Second level</a></li>
                        </ul>
                    </li>
                    <!-- /layout -->
                </ul>
            </div>
            <div class="align-items-center d-none d-md-flex position-relative">
                <button type="button" id="btn-compact" class="btn btn-icon btn-sm rounded-pill border-transparent
                            sidebar-control sidebar-main-resize d-none d-lg-inline-flex"
                        :class="{
                            'color-active': currentMenuVerticalResize
                        }"
                        @click="handleButtonClick">
                    <i class="ph-arrows-left-right"></i>
                </button>
                <hr id="sidebar-left-border" class="position-absolute m-auto w-100">
            </div>
            <!-- /main navigation -->

        </div>
        <!-- /sidebar content -->
    </div>
    <!-- /main sidebar -->
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    mounted() { // lifecycle
        window.addEventListener("resize", this.myEventHandler);
    },
    unmounted() {
        window.removeEventListener("resize", this.myEventHandler);
    },
    computed: {
        // mix the getters into computed with object spread operator
        ...mapGetters([
            'currentMenuVerticalResize',
            'hoverCurrentMenuVerticalResize',
            'menuConfig',
            'menuMobile'
        ])
    },
    methods: {
        ...mapActions([
            'handleSaveResize',
            'handleHoverSaveResize',
            'handleMenuConfig'
        ]),
        handleButtonClick() {
            this.handleSaveResize(!this.currentMenuVerticalResize);
            this.handleHoverSaveResize(false);
        },
        handleMenuVerticalResizeOver(){
            if(!this.currentMenuVerticalResize) return false;
            this.handleHoverSaveResize(true);
        },
        handleMenuVerticalResizeOut(){
            if(!this.currentMenuVerticalResize) return false;
            this.handleHoverSaveResize(false);
        },
        myEventHandler() {
            const elmRadioDisabled = document.getElementById("radio-item-disabled");
            if (window.innerWidth < 992) {
                this.handleMenuConfig(true);
                elmRadioDisabled.disabled = true;
            }else{
                elmRadioDisabled.disabled = false;
            }
        }
    }
};
</script>

<style scoped>

#btn-compact{
    z-index: 10;
    background: var(--gray-800);
    margin-left: 12px;
}

#btn-compact.color-active {
    background: #247297;
}
.nav-sidebar .nav-item:not(.nav-item-header):first-child{
    padding-top: 0;
}

@media (max-width: 992px){
    .sidebar.sidebar-main {
        top: 63px;
    }
}

</style>
