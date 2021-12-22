import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    let [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState<number | number[]>([0, 10])

    const onChangeRangeHandler = (e: any, value: number | number[]) => {
        setValue2(value)
        if (Array.isArray(value)) {
            setValue1(value[0])
        }
    }
    const onChangeSuperRangeValue = (value: number) => {
        setValue1(value)
        if (Array.isArray(value2)) {
            setValue2([value2[0] = value,value2[1]] )
        }
    }

    return (
        <div>
            <hr/>
            homeworks 11


            {/*should work (должно работать)*/}
            <div style={{display: "flex", justifyContent: "flex-start"}}>
                <div style={{width: "15px", marginRight: "5px"}}>
                    <span>{value1}</span>
                </div>
                <SuperRange
                    value={value1}
                    onChangeRange={onChangeSuperRangeValue}
                />
            </div>

            <div style={{display: "flex", justifyContent: "flex-start"}}>
                <div style={{width: "15px", marginRight: "10px"}}>
                    <span>{value1}</span>
                </div>
                <SuperDoubleRange
                    value={value2}
                    onChangeRange={onChangeRangeHandler}
                />
                <div style={{width: "15px", marginLeft: "10px"}}>
                    <span>{Array.isArray(value2) ? value2[1] : ''}</span>
                </div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
