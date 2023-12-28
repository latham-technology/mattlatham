const useUi = () => {
    const state = useState('ui', () => ({
        navisOpen: false,
    }))

    return {
        state,
        openNav: () => (state.value.navisOpen = true),
        closeNav: () => (state.value.navisOpen = false),
        toggleNav: () => (state.value.navisOpen = !state.value.navisOpen),
    }
}

export default useUi
