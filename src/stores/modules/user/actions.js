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

    handleSaveResize({ commit }, isActive) {
        // Call API or perform login logic
        // Commit mutation to set user
        commit('setMenuResize', isActive);
    },

    handleHoverSaveResize({ commit }, isActive) {
        // Call API or perform login logic
        // Commit mutation to set user
        commit('setHoverMenuResize', isActive);
    }
}