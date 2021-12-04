import {UserType} from "../HW8"

const sort = 'sort'
const check = 'check'

type ActionType = ReturnType<typeof SortUpAC> | ReturnType<typeof SortDownAC> | ReturnType<typeof CheckAC>


export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case sort:
            switch (action.payload) {
                case 'up':
                    return [
                        ...state.sort((a,b)=> a.name <= b.name ? -1 : 1)
                    ]
                case 'down':
                    return [
                        ...state.sort((a,b)=> a.name >= b.name ? -1 : 1)
                    ]
            }
            return state
        case check:
            return [
                ...state.filter( u => u.age >= action.payload)
            ]
        default:
            return state
    }
}
export const SortUpAC = () => {
    return {
        type: sort,
        payload: 'up'
    } as const
}
export const SortDownAC = () => {
    return {
        type: sort,
        payload: 'down'
    } as const
}
export const CheckAC = () => {
    return {
        type: check,
        payload: 18
    } as const
}