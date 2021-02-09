const toggleGoods = (selectedGood) => {
    return {
        type: 'TOOGLE_GOODS',
        payload: selectedGood
    }
}

const toggleSize = (selectedSize) => {
    return{
        type: 'TOGGLE_SIZE',
        payload: selectedSize
    }
}

const toggleTheme = (theme) => {
    return{
        type: 'TOGGLE_THEME',
        payload: theme === 'light' ? 'dark' : 'light'
    }
}

const setHydration = (value) => {
    if (value <= 57){
        return{
            type: 'SET_HYDRATION',
            payload: {
                value,
                texture: 'stiff'
            }
        }
    } else if (value <= 65) {
        return{
            type: 'SET_HYDRATION',
            payload: {
                value,
                texture: 'standart'
            }
        }
    }
    return{
        type: 'SET_HYDRATION',
        payload: {
            value,
            texture: 'rustic'
        }
    }
}

const getWindowSize = (window) => {
    return{
        type: 'GET_WINDOW_SIZE',
        payload: window
    }
}
const toggleReadMore = (readMore) => {
    return{
        type: 'TOGGLE_READMORE',
        payload: !readMore
    }
}

export {toggleGoods, toggleSize, toggleTheme, setHydration, getWindowSize, toggleReadMore}