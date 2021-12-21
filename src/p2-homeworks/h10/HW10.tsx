import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {InitialStateType, loadingAC} from "./bll/loadingReducer";

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, InitialStateType>(state => state.loading)
    const dispatch = useDispatch()

    const setLoading = () => {
        setTimeout(()=> {
            dispatch(loadingAC(!loading.isLoading))
            console.log('loading...')
        }, 1000)
        setTimeout(()=> {
            dispatch(loadingAC(loading.isLoading))
        }, 3000)
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading.isLoading
                ? (
                    <div>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
