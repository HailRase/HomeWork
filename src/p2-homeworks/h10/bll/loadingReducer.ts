export enum ACTION_TYPE  {
    TOGGLE_LOADING = 'TOGGLE-LOADING'
}
type LoadingACType = {
    type: ACTION_TYPE
    payload: {
        isLoading: boolean
    }
}
export type InitialStateType = {
    isLoading: boolean
}
const initState: InitialStateType = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: ReturnType<typeof loadingAC>): InitialStateType => { // fix any
    switch (action.type) {
        case 'TOGGLE-LOADING':
            return {
                ...state,
                ...action.payload
            }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean): LoadingACType => {
    return {
        type: ACTION_TYPE.TOGGLE_LOADING,
        payload: {isLoading}
    }
} // fix any