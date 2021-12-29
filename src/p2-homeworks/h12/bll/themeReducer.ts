const CHANGE_THEME = 'CHANGE-THEME'

type ChangeThemeType = {
    type: string
    color: string
}

export type InitStateType = {
    color: string
}
const initState: InitStateType = {
    color: 'dark'
};

export const themeReducer = (state = initState, action: ChangeThemeType): InitStateType => { // fix any
    switch (action.type) {
        case CHANGE_THEME: {
            return {
                color: action.color
            };
        }
        default:
            return state;
    }
};

export const changeThemeC = (color: string): ChangeThemeType => {
    return {
        type: CHANGE_THEME,
        color
    }
};