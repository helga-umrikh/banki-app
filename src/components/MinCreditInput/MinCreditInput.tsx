import React, { useState, useCallback, useEffect } from 'react'
import { InputNumber } from 'antd'
import { useDispatch } from 'react-redux'
import { setFilter } from '../../redux/slices/CreditSlice'
import { useLocation } from 'react-router-dom'
import debounce from 'lodash/debounce'

import './MinCreditInput.scss'

const MinCreditInput = () => {
    const [creditValue, setCreditValue] = useState<number | null>(null)
    const dispatch = useDispatch()

    let query = new URLSearchParams(useLocation().search)
    let amount = query.get('amount')

    const debouncedDispatch = useCallback(
        debounce((value: number | null) => {
            dispatch(setFilter(value))
        }, 500),
        []
    )

    const handleMinCreditInput = useCallback(
        (value: number | null) => {
            setCreditValue(value)
            debouncedDispatch(value)
        },
        [debouncedDispatch]
    )

    useEffect(() => {
        if (amount) {
            handleMinCreditInput(Number(amount))
        }
    }, [amount, handleMinCreditInput])

    return (
        <div className="min-credit-input">
            <InputNumber
                className="min-credit-input__component"
                value={creditValue}
                min={1}
                style={{ width: 170 }}
                size="large"
                placeholder={'Сумма кредита'}
                onChange={handleMinCreditInput}
                keyboard={false}
            />
        </div>
    )
}

export default MinCreditInput
