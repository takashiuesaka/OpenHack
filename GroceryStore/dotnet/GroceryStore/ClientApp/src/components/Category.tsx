import React, { useState } from 'react'

type categoryType = {
    onClick?: (name: string | undefined, clickToOn: boolean) => void
    children?: React.ReactNode
}

export const Category = (props: categoryType) => {
    const [clicked, setClicked] = useState(false);

    const onClick = () => {
        setClicked(val => !val)

        props.onClick && props.onClick(props.children?.toString(), !clicked)
    }
    return (
        <span className={clicked ? 'category-badge-clicked' : 'category-badge'} onClick={onClick}>{props?.children}</span>
    )
}
