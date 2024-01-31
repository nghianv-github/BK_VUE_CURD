// src/store/storeConfigs.js
import { createStore } from 'vuex';
import userModule from './modules/user/user';
import setupThemeModule from './modules/setupTheme';
// Import other modules as needed

const store = createStore({
    modules: {
        user: userModule,
        setupTheme: setupThemeModule,
        // Register other modules here
    },
});

export default store;
