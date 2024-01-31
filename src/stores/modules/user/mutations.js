export default {
    setMenuResize(state, isActive) {
        state.menuVertical.resize = isActive;
    },
    setHoverMenuResize(state, isActive) {
        state.menuVertical.hover = isActive;
    },
}