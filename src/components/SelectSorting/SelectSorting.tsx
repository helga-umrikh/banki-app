import React, { useState, useEffect, useCallback } from 'react'
import { Select } from 'antd'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { setSorting } from '../../redux/slices/CreditSlice'
import { Sorting } from '../../interfaces/IBankData'

const SelectSorting = () => {
    const [selectedValue, setSelectedValue] = useState<Sorting>(null)
    const dispatch = useDispatch()

    let query = new URLSearchParams(useLocation().search)
    let sort = query.get('sort')

    const handleSelect = useCallback(
        (value: Sorting) => {
            setSelectedValue(value)
            dispatch(setSorting(value))
        },
        [dispatch]
    )

    useEffect(() => {
        // If there is any sort param set within URL - use that as initial sort value
        if (sort) {
            handleSelect(sort as Sorting)
        }
    }, [sort, handleSelect])

    return (
        <div className="select">
            <Select
                placeholder={'Сортировать'}
                value={selectedValue}
                style={{ width: 170 }}
                onChange={handleSelect}
                options={[
                    {
                        value: 'max',
                        label: 'по убыванию',
                    },
                    {
                        value: 'min',
                        label: 'по возрастанию',
                    },
                ]}
                allowClear={true}
                size="large"
            />
        </div>
    )
}

export default SelectSorting
