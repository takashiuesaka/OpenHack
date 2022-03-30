import React, { useState } from 'react'

export type categoryState = {
    name: string,
    isOn: boolean
}
type categoryType = {
    onClick?: (name: string | undefined, clickToOn: boolean) => void
    categoryState: categoryState
}

export const Category: React.VFC<categoryType> = (props) => {
    const [isOn, setClicked] = useState(props.categoryState.isOn);

    const onClick = () => {
        setClicked(val => !val)

        props.onClick && props.onClick(props.categoryState.name, !isOn)
    }
    return (
        <span className={isOn ? 'category-badge' : 'category-badge-off'} onClick={onClick}>{props.categoryState.name}</span>
    )
}
