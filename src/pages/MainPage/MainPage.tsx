import React, { useEffect, useState } from 'react'
import './MainPage.scss'
import List from '../../components/List/List'
import { getCreditsData } from '../../api/getCreditsData'
import { IBankData } from '../../interfaces/IBankData'

const MainPage = () => {
    const [data, setData] = useState<IBankData | null>(null)

    useEffect(() => {
        const getData = async () => {
            const res = await getCreditsData('./mock.json')
            setData(res)
        }
        getData()
    }, [])

    return (
        <div className="main-page">
            <List data={data} />
        </div>
    )
}

export default MainPage
