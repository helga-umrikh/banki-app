import React from 'react'
import './styles/index.scss'
import MainPage from './pages/MainPage/MainPage'
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'

function App() {
    return (
        <div className="App">
            <Layout className="wrapper">
                <Content><MainPage /></Content>
            </Layout>
        </div>
    )
}

export default App
