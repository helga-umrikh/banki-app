import React, { FC } from 'react'
import './List.scss'
import { Avatar, List as ListComponent, Typography } from 'antd'
import { Product } from '../../interfaces/IBankData'
const { Title } = Typography
interface ListProps {
    data: Product[] | null
}

const List: FC<ListProps> = ({ data }) => {
    return (
        <ListComponent
            className="banks-list"
            itemLayout="horizontal"
            bordered
            loading={!Boolean(data)}
        >
            {data ? (
                data.map((item) => (
                    <ListComponent.Item>
                        <ListComponent.Item.Meta
                            avatar={<Avatar src={item.logo} shape="square" />}
                            title={<Title level={5}>{item.name}</Title>}
                            description="сумма"
                        />
                        <Title level={5}>
                            {item.amount} {'\u20BD'}
                        </Title>
                    </ListComponent.Item>
                ))
            ) : (
                <Title>К сожалению по вашему запросу ничего не найдено</Title>
            )}
        </ListComponent>
    )
}

export default List
