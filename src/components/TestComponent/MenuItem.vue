<!-- MenuItem.vue -->

<template>
    <ul :class="[
        isSub ? 'nav-group-sub' : 'nav nav-sidebar',
        {
            'show-nav-sub': +level === 1,
            'show-menu': parentId
        }
    ]"
        :data-nav-type="[isSub ? '' : 'accordion']">
        <li v-for="item in menu" :key="item.id"
            :class="{
                  'nav-item-submenu': item.children,
                  'nav-item-open': isOpen[item.id]
                }"
        >
            <a v-if="item.children" href="#" @click="toggleMenu(item.id)" class="nav-link">
                <i :class="item.icon"></i>
                <span>{{ item.name }}</span>
            </a>
            <a v-else :href="item.link" class="nav-link">
                <i :class="item.icon"></i>
                <span>{{ item.name }}</span>
            </a>
            <!-- Gọi đệ quy nếu menu con tồn tại -->
            <menu-item v-show="isOpen[item.id]"
                       :isActiveSub="isOpen[item.id]"
                       :isSub="item.children"
                       :menu="item.children"
                       :parentId="item.id"
                       :level="item.level"
            />
        </li>
    </ul>
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'MenuItem', // Đặt tên cho component
    props: ['menu', 'isSub', 'isActiveSub', 'level', 'parentId'],
    data() {
        return {
            isOpen: {}, // Dữ liệu theo dõi trạng thái hiển thị của menu con
            dataMenu: []
        }
    },
    methods: {
        toggleMenu(itemId) {
            // Đảo ngược trạng thái hiển thị của menu con tương ứng với itemId
            const isOpen = ref(this.isOpen)
            isOpen.value[itemId] = !isOpen.value[itemId]
            // Gán giá trị mới vào biến isOpen
            this.isOpen = isOpen.value
        }
    },
};
</script>


<style scoped>
/**
.nav-group-sub {
    display: none;
}

.nav-group-sub.show-menu{
    background: #e0e0e0;
    display: block;
    position: absolute;
    width: 79%;
    min-height: 95%;
    top: 0;
    right: 0;
    z-index: 1;
    overflow: auto;
    height: 3500px;
}
 */

</style>

