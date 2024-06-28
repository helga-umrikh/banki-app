import React, { useEffect } from 'react'
import './styles/index.scss'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { getCreditsData } from './api/getCreditsData'
import { useDispatch } from 'react-redux'
import { addCreditItems } from './redux/slices/CreditSlice'

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        // Requesting data from mock-server...
        const getData = async () => {
            const data = await getCreditsData('http://localhost:3001/products')
            dispatch(addCreditItems(data))
        }
        getData()
    }, [dispatch])

    return (
        <div className="App">
            <Layout className="wrapper">
                <Content>
                    <Routes>
                        <Route path="/search" element={<MainPage />} />
                    </Routes>
                </Content>
            </Layout>
        </div>
    )
}

export default App
