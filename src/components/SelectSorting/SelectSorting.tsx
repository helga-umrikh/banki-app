import React, { useState } from 'react'
import './SelectSorting.scss'
import { Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { setSorting } from '../../redux/slices/CreditSlice'
import { RootState } from '../../redux/store'

const SelectSorting = () => {
    const [selectedValue, setSelectedValue] = useState<'min' | 'max' | null>(
        null
    )
    const dispatch = useDispatch()
    const sorting = useSelector(
        (state: RootState) => state.creditList.filter.sorting
    )

    return (
        <div className="select">
            <Select
                placeholder={'Сортировать'}
                value={selectedValue || sorting}
                style={{ width: 250 }}
                onChange={(value: 'min' | 'max' | null) => {
                    setSelectedValue(value)
                    dispatch(setSorting(value))
                }}
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
