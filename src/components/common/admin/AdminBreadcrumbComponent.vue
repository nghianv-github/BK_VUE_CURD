<template>
    <!-- Page header -->
    <div class="page-header mb-3">
        <div class="breadcrumb-line breadcrumb-line-light header-elements-md-inline border-top-0">
            <div class="d-flex">
                <div class="breadcrumb align-items-center">
                    <a href="/" class=" breadcrumb-item"><i class="fa fa-home-alt"></i></a>
                    <a href="javascript:" class=" breadcrumb-item">Quản lý cấu hình phí merchant</a>
                </div>
            </div>
        </div>
    </div>
    <!-- /page header -->
</template>

<script>
export default {
    data() {
        return {
            message: "Hello from MyComponent!",
        };
    },
};
</script>

<style scoped>
.breadcrumb-line {
    position: relative;
    padding: 0.5rem;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
}
.breadcrumb {
    padding: 0 !important;
    font-size: 1rem !important;
    margin: 0 !important;
}
.breadcrumb-item + .breadcrumb-item::before {
    display: inline-block;
    padding-right: 0.625rem;
    color: inherit;
    content: "/" !important;
}

.breadcrumb-line-light {
    border-color: #ddd;
}


.breadcrumb-item{
    font-size: .95rem;
}

</style>