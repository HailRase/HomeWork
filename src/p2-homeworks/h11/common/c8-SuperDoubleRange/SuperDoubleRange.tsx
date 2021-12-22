import {Slider} from '@material-ui/core'
import React, {ChangeEvent} from 'react'
import s from "../c7-SuperRange/SuperRange.module.css";


type SuperDoubleRangePropsType = {
    onChangeRange?: (e:any, value: number | number[]) => void
    value?: number | number[]
    min?: number
    max?: number
    step?: number
    disable?: boolean
    className?: string
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, className,
        ...restProps
    }
) => {
    // сделать самому, можно подключать библиотеки
    const onChangeCallback = (e: any, value: number | number[]) => {
        onChangeRange && onChangeRange(e, value)
    }
    const finalRangeClassName = `${className ? className : ''}`
    return (
        <>
            <Slider
                value={value}
                style={{width: "130px"}}
                onChange={onChangeCallback}
                className={finalRangeClassName}
            />
        </>
    )
}

export default SuperDoubleRange
