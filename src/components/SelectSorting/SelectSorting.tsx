import React, { useState } from 'react'
import './SelectSorting.scss'
import { Select } from 'antd'
import { useDispatch } from 'react-redux'
import { setSorting } from '../../redux/slices/CreditSlice'

const SelectSorting = () => {
    const [selectedValue, setSelectedValue] = useState<'min' | 'max' | null>(
        null
    )
    const dispatch = useDispatch()

    return (
        <div className="select">
            <Select
                placeholder={'Сортировать'}
                value={selectedValue}
                style={{ width: 250 }}
                onChange={(value: 'min' | 'max' | null) => {
                    setSelectedValue(value)
                    dispatch(setSorting(value))
                }}
                options={[
                    {
                        value: 'max',
                        label: 'по максимальной сумме',
                    },
                    {
                        value: 'min',
                        label: 'по минимальной сумме',
                    },
                ]}
                allowClear={true}
                size="large"
            />
        </div>
    )
}

export default SelectSorting
