import React, { useState, useCallback } from 'react'
import './MinCreditInput.scss'
import { InputNumber } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../redux/slices/CreditSlice'
import { RootState } from '../../redux/store'
import debounce from 'lodash/debounce'

const MinCreditInput = () => {
    const [creditValue, setCreditValue] = useState<number | null>(null)
    const dispatch = useDispatch()

    const filter = useSelector(
        (state: RootState) => state.creditList.filter.amount
    )

    const debouncedDispatch = useCallback(
        debounce((value: number | null) => {
            console.log(value)
            dispatch(setFilter(value))
        }, 2000),
        []
    )

    const handleMinCreditInput = (value: number | null) => {
        setCreditValue(value)
        debouncedDispatch(value)
    }

    return (
        <div className="min-credit-input">
            <InputNumber
                className="min-credit-input__component"
                value={creditValue || filter}
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
