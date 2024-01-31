<template>
    <h1>Callback Component</h1>
    <p>accessToken: {{ accessToken }}</p>
</template>

<script>
import { openDB } from 'idb';
import axios from 'axios';

export default {
    data() {
        return {
            accessToken: null,
        };
    },
    mounted() {
        this.accessToken = localStorage.getItem('clsf');
        if (this.accessToken) {
            this.callApi();
        }
    },
    methods: {
        async callApi() {
            try {
                const response = await axios.post('http://localhost:9898/api/getInfoUserByAccessToken', {
                    accessToken: this.accessToken
                });

                // Lưu thông tin người dùng vào IndexedDB
                await this.saveToIndexedDB(response.data);

                // Xử lý dữ liệu từ API nếu cần
                console.log('API Response:', response.data);
            } catch (error) {
                console.error('Error calling API:', error);
            }
        },
        async saveToIndexedDB(userData) {
            // Tên cơ sở dữ liệu
            const dbName = 'userDB';
            // Tên bảng trong cơ sở dữ liệu
            const tableName = 'userInfo';

            try {
                // Mở kết nối với cơ sở dữ liệu
                const db = await openDB(dbName, 1, {
                    upgrade(db) {
                        // Tạo bảng nếu chưa tồn tại
                        db.createObjectStore(tableName, { keyPath: 'id' });
                    },
                });

                // Mở transation để thêm thông tin người dùng vào bảng
                const tx = db.transaction(tableName, 'readwrite');
                const store = tx.objectStore(tableName);
                await store.put(userData);

                // Kết thúc transation và đóng kết nối với cơ sở dữ liệu
                await tx.done;
                db.close();
            } catch (error) {
                console.error('Error saving to IndexedDB:', error);
            }
        },
    },
};
</script>
