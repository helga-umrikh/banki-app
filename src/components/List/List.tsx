import React from 'react'
import './List.scss'
import { Avatar, List as ListComponent } from 'antd'

const List = () => {
    return (
        <ListComponent className="banks-list" itemLayout="horizontal" bordered>
            <ListComponent.Item>
                <ListComponent.Item.Meta
                    avatar={<Avatar src={''} shape="square" />}
                    title={<a href="https://ant.design">{'Т-Банк'}</a>}
                    description={'сумма'}
                />
                <div>1000 Р</div>
            </ListComponent.Item>
            <ListComponent.Item>
                <ListComponent.Item.Meta
                    avatar={<Avatar src={''} shape="square" />}
                    title={<a href="https://ant.design">{'ВТБ'}</a>}
                    description={'сумма'}
                />
                <div>10 000 Р</div>
            </ListComponent.Item>
            <ListComponent.Item>
                <ListComponent.Item.Meta
                    avatar={<Avatar src={''} shape="square" />}
                    title={<a href="https://ant.design">{'Почта Банк'}</a>}
                    description={'сумма'}
                />
                <div>20 000 Р</div>
            </ListComponent.Item>
            <ListComponent.Item>
                <ListComponent.Item.Meta
                    avatar={<Avatar src={''} shape="square" />}
                    title={<a href="https://ant.design">{'Локо-Банк'}</a>}
                    description={'сумма'}
                />
                <div>20 000 Р</div>
            </ListComponent.Item>
        </ListComponent>
    )
}

export default List
