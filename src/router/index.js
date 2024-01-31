import { createRouter, createWebHistory } from 'vue-router'
import TestComponent from '@/components/TestComponent/TestComponent.vue'
import FoodItem from '@/components/TestComponent/FoodItem.vue'
import AdminLayout from '@/layouts/admin/AdminLayout.vue'
import axios from 'axios'
import CallbackComponent from '@/components/TestComponent/CallbackComponent.vue'
import { openDB } from 'idb'
import Page404 from '@/components/TestComponent/Page404.vue'
import Dashboard from '@/components/pages/Dashboard.vue'
import Order from '@/components/pages/Order.vue'
import ProductComponent from '@/components/pages/Product/ProductComponent.vue'
import ProductAddComponent from '@/components/pages/Product/ProductAddComponent.vue'
import ProductEditComponent from '@/components/pages/Product/ProductEditComponent.vue'
import DemoComponent from '@/components/pages/DemoComponent.vue'
import HookDemo from '@/components/hook/HookDemo.vue'

const routers = [
    // Các route trước đó
    {
        path: '/admin',
        component: AdminLayout,
        name: 'admin',
        meta: {auth: false},
        children: [
            {
                path: 'test', // Đường dẫn trống để mặc định hiển thị khi chuyển đến /admin
                component: TestComponent,
                name: 'admin-home',
            },
            {
                path: 'food', // Đường dẫn trống để mặc định hiển thị khi chuyển đến /admin
                component: FoodItem,
                name: 'admin-food',
            },
            {
                path: 'dashboard',
                component: Dashboard,
                name: 'dashboard',
            },
            {
                path: 'order',
                component: Order,
                name: 'order',
            },
            {
                path: 'product',
                component: ProductComponent,
                name: 'product',
            },
            {
                path: 'product/add',
                component: ProductAddComponent,
                name: 'productAdd',
            },
            {
                path: 'product/edit/:id',
                component: ProductEditComponent,
                name: 'productEdit',
                props: true
            },
        ],
    },
    {
        path: '',
        component: AdminLayout,
        name: 'd',
        meta: {auth: false},
    },
    {
        path: '/error',
        component: FoodItem,
        name: 'err',
        meta: {auth: false},
    },
    {
        path: '/callback',
        name: 'callback',
        component: CallbackComponent, // Component xử lý callback
        meta: {auth: false},
    },
    {
        path: '/:pathMatch(.*)*',
        component: Page404,
        name: 'not-found',
        meta: {auth: false},
    },
    {
        path: '/demo',
        component: DemoComponent,
        name: 'demoComponent',
        meta: {auth: false},
    },

    {
        path: '/hook',
        component: HookDemo,
        name: 'hook',
        meta: {auth: false},
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routers,
    scrollBehavior(to, from, savedPosition){
        /**
         * scrollBehavior được định nghĩa để kiểm tra xem có thông tin cuộn đã được lưu trữ không
         * (thông qua savedPosition). Nếu có, nó sẽ sử dụng vị trí đã lưu trữ để cuộn trang;
         * nếu không, nó sẽ cuộn về đầu trang (vị trí { top: 0 }).
         */
        // return {
        //     // could also be
        //     // el: document.getElementById('main'),
        //     el: '#app',
        //     // 10px above the element
        //     top: 10,
        // }


        if (savedPosition) {
            return { ...savedPosition, behavior: 'smooth' };
        }

        if (to.hash) {
            /**
             *
             * Trong Vue Router, to.hash là một phần của đối tượng to (đối tượng đích) và đại diện cho phần hash của URL. Nó bao gồm ký tự # và sau đó là phần hash của URL.
             *
             * Ví dụ, nếu bạn có một URL như http://example.com/#section1
             *
             * Thì to.hash sẽ là "#section1".
             * Bạn có thể sử dụng to.hash để xác định xem có một phần hash nào được xác định trong địa chỉ đích hay không, và có thể sử dụng nó để thực hiện các xử lý tương ứng
             * trong hàm scrollBehavior hoặc bất kỳ logic điều hướng nào khác mà bạn đang thực hiện.
             */
            return { selector: to.hash, behavior: 'smooth' };
        }

        return { left: 0, top: 0, behavior: 'auto' };

        // window.scrollTo(0, 0);
        // return {x: 0, y: 700}
        // return savedPosition || {x: 0, y: 700}
        // return savedPosition || new Promise(resolve => setTimeout(() => {
        //     resolve({top:0})
        // }, 300))
        // alert('ok');
        // window.scrollTo(0, 0);

    }
})

// Tạo navigation guard
router.beforeEach(async (to, from, next) => {
    if (to.path === '/error' || to.meta.auth) {
        next(); return false;
    }
    const accessToken = localStorage.getItem('clsf');
    if (to.path !== '/callback' && !accessToken) {
        window.location.href = 'https://devtest.baokim.vn:8089/auth/realms/BaokimAdmin/protocol/openid-connect/auth?scope=openid&response_type=code&client_id=NGHIANVTEST&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fcallback';
        return false;
    }
    else if (to.path === '/callback' && to.query.code && !accessToken) {
        const code = to.query.code;
        if (code) {
            try {
                // Gọi API bằng Axios với yêu cầu POST và truyền tham số sessionState
                const response = await axios.post('http://localhost:9898/api/getAccessTokenFromVue', { code });
                // Kiểm tra kết quả từ API
                if (response.data.data.accessToken && response.data.data.refreshToken) {
                    // Nếu có AccessToken, xử lý dữ liệu hoặc tiếp tục logic của bạn
                    localStorage.setItem('clsf', response.data.data.accessToken);
                    localStorage.setItem('rlsf', response.data.data.refreshToken);

                    // essToken goi len check hạn token
                    const responseUser = await axios.post('http://localhost:9898/api/getInfoUserByAccessToken', {
                        accessToken: response.data.data.accessToken
                    })
                    // Tên cơ sở dữ liệu
                    const dbName = 'userDB';
                    // Tên bảng trong cơ sở dữ liệu
                    const tableName = 'userInfo';

                    // Mở kết nối với cơ sở dữ liệu
                    const db = await openDB(dbName, 1, {
                        upgrade(db) {
                            // Tạo bảng nếu chưa tồn tại
                            db.createObjectStore(tableName, { keyPath: 'id', autoIncrement: true });
                        },
                    });
                    // Mở transation để thêm thông tin người dùng vào bảng
                    const tx = db.transaction(tableName, 'readwrite');
                    const store = tx.objectStore(tableName);
                    await store.put({
                        id: 1,
                        data: JSON.stringify(responseUser.data.metadata.userInfo)
                    });
                    // Kết thúc transation và đóng kết nối với cơ sở dữ liệu
                    await tx.done;
                    db.close();
                    next('admin')
                }else{
                    console.log('error', 'khong cos acc')
                    next('error')
                }
            }catch (e) {
                console.log('error', e)
                next('error')
            }
        }else{
            next('error')
        }
    }
    else if (to.path === '/callback' && !to.query.code && !accessToken) {
        window.location.href = 'https://devtest.baokim.vn:8089/auth/realms/BaokimAdmin/protocol/openid-connect/auth?scope=openid&response_type=code&client_id=NGHIANVTEST&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fcallback';
        return false;
    }
    if (to.path === '/callback' && accessToken) {
        next('admin')
    }
    else if (accessToken){
        next()
    } else{
        next()
    }
});

export default router
