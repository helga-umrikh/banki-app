import React from 'react'
import './MainPage.scss'
import List from '../../components/List/List'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import MinCreditInput from '../../components/MinCreditInput/MinCreditInput'
import { Space, Spin } from 'antd'
import SelectSorting from '../../components/SelectSorting/SelectSorting'
import { IProduct } from '../../interfaces/IBankData'

const MainPage = () => {
    const filter = useSelector(
        (state: RootState) => state.creditList.filter.amount
    )
    const sorting = useSelector(
        (state: RootState) => state.creditList.filter.sorting
    )
    const creditListData = useSelector(
        (state: RootState) => state.creditList.products
    )

    const prepareCreditsList = (
        list: IProduct[],
        filter: number | null,
        sorting: 'min' | 'max' | null | undefined
    ) => {
        return list
            .filter(
                (item) =>
                    filter === null ||
                    (item.amount !== null && item.amount >= filter)
            )
            .sort((a, b) => {
                if (sorting === 'min') {
                    return (a.amount || 0) - (b.amount || 0)
                }
                if (sorting === 'max') {
                    return (b.amount || 0) - (a.amount || 0)
                }
                return 0
            })
    }

    return (
        <div className="main-page">
            <Space>
                <MinCreditInput />
                <SelectSorting />
            </Space>

            {creditListData ? (
                <List
                    data={prepareCreditsList(creditListData, filter, sorting)}
                />
            ) : (
                <Spin />
            )}
        </div>
    )
}

export default MainPage
