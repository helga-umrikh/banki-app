import React, { FC } from 'react'
import './List.scss'
import { Avatar, List as ListComponent, Typography } from 'antd'
import { IProduct } from '../../interfaces/IBankData'
const { Title, Text } = Typography
interface ListProps {
    data: IProduct[]
}

const List: FC<ListProps> = ({ data }) => {
    return (
        <ListComponent
            className="credits-list"
            itemLayout="horizontal"
            bordered
            loading={!Boolean(data)}
        >
            {data.length > 0 ? (
                data.map((item) => (
                    <ListComponent.Item key={item.name}>
                        <ListComponent.Item.Meta
                            avatar={<Avatar src={item.logo} shape="square" />}
                            title={<Text strong>{item.name}</Text>}
                            description="сумма"
                        />
                        <Title level={5}>
                            {item.amount} {'\u20BD'}
                        </Title>
                    </ListComponent.Item>
                ))
            ) : (
                <Title level={5} className="credits-list__title">
                    К сожалению, по вашему запросу ничего не найдено
                </Title>
            )}
        </ListComponent>
    )
}

export default List
