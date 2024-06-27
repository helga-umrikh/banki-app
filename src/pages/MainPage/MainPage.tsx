import React from 'react'
import './MainPage.scss'
import List from '../../components/List/List'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const MainPage = () => {
    const creditListData = useSelector(
        (state: RootState) => state.creditList.products
    )
    return (
        <div className="main-page">
            <List data={creditListData} />
        </div>
    )
}

export default MainPage
