import {combineReducers} from 'redux';

interface Theme{
    backgroundColor: string,
    primaryColor: string,
    secondaryColor: string,
    primaryTextColor: string,
    secondaryTextColor: string,
    buttonBackgroundColor: string,
}

const initTheme = {
    backgroundColor: '#f4fff9',
    primaryColor: '',
    secondaryColor: '',
    primaryTextColor: '',
    secondaryTextColor: '',
    buttonBackgroundColor: '',
}

function themeReducer (state:Theme=initTheme, action:any) {
    return state;
}

export default combineReducers({
    themeReducer
})

