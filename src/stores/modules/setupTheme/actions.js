export default {
    // login(context, user) {
    //     // Call API or perform login logic
    //     // Commit mutation to set user
    //     context.commit('setUser', user);
    // },
    // login({ context, getters }, user) {
    //     // Call API or perform login logic
    //     // Commit mutation to set user
    //     let name = getters.currentUser;
    //     context.commit('setUser', name);
    //     context.commit('setUser', user);
    // }

    handleMenuConfig({ commit }, isActive) {
        // Call API or perform login logic
        // Commit mutation to set user
        commit('setMenuConfig', isActive);
    },

    handleMenuMobile({ commit }, isActive) {
        // Call API or perform login logic
        // Commit mutation to set user
        commit('setMenuMobile', isActive);
    }
}