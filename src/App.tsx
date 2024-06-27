import React, { useEffect } from 'react'
import './styles/index.scss'
import MainPage from './pages/MainPage/MainPage'
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { getCreditsData } from './api/getCreditsData'
import { useDispatch } from 'react-redux'
import { addCreditItems } from './redux/slices/CreditSlice'

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        const getData = async () => {
            const res = await getCreditsData('./mock.json')
            dispatch(addCreditItems(res))
        }
        getData()
    }, [dispatch])

    return (
        <div className="App">
            <Layout className="wrapper">
                <Content>
                    <MainPage />
                </Content>
            </Layout>
        </div>
    )
}

export default App
