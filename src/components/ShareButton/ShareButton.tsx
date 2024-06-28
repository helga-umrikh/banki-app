import React from 'react'
import { Button, Tooltip } from 'antd'
import { ShareAltOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const ShareButton = () => {
    const filter = useSelector(
        (state: RootState) => state.creditList.filter.amount
    )
    const sorting = useSelector(
        (state: RootState) => state.creditList.filter.sorting
    )

    const queryParams = new URLSearchParams('')

    if (filter) queryParams.append('amount', String(filter))
    if (sorting) queryParams.append('sort', sorting)

    const newSearchString = queryParams.toString()
    const { origin, pathname } = window.location

    return (
        <Tooltip title="Скопировать реультаты поиска">
            <Button
                onClick={() => {
                    // Adding URL app to clipboard with current search and sort state
                    navigator.clipboard.writeText(
                        origin + pathname + '?' + newSearchString
                    )
                }}
                size="large"
                icon={<ShareAltOutlined />}
            />
        </Tooltip>
    )
}

export default ShareButton
