import React, { useState } from 'react'
import './MinCreditInput.scss'
import { InputNumber } from 'antd'
import { useDispatch } from 'react-redux'
import { setFilter } from '../../redux/slices/CreditSlice'
const _ = require('lodash')

const MinCreditInput = () => {
    const [creditValue, setCreditValue] = useState<number | null>(null)
    const dispatch = useDispatch()

    const throttledDispatch = _.throttle(
        (value: number | null) => dispatch(setFilter(value)),
        3000
    )

    const handleMinCreditInput = (value: number | null) => {
        setCreditValue(value)
        throttledDispatch(value)
    }

    return (
        <div className="min-credit-input">
            <InputNumber
                className="min-credit-input__component"
                value={creditValue}
                min={1}
                size="large"
                placeholder={'Сумма кредита'}
                onChange={handleMinCreditInput}
                keyboard={false}
            />
        </div>
    )
}

export default MinCreditInput
