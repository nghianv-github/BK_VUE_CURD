<template>
    <div class="not-found-container">
        <h1 class="not-found-title">404 - Trang không tồn tại</h1>
        <p class="not-found-message">Xin lỗi, trang bạn đang tìm kiếm không tồn tại.</p>
        <a href="/admin" class="back-to-home-link">Quay lại trang chủ</a>
    </div>
</template>

<script>
export default {
    name: 'NotFound',
};
</script>

<style scoped>
.not-found-container {
    text-align: center;
    margin-top: 50px;
}

.not-found-title {
    font-size: 2em;
    color: #ff6347; /* Màu đỏ đậm */
}

.not-found-message {
    font-size: 1.2em;
    color: #555; /* Màu xám đậm */
    margin-bottom: 20px;
}

.back-to-home-link {
    text-decoration: none;
    padding: 10px 20px;
    background-color: #4285f4; /* Màu xanh dương */
    color: #fff; /* Màu trắng */
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s ease;
}

.back-to-home-link:hover {
    background-color: #3c78d8; /* Màu xanh dương đậm khi hover */
}
</style>
