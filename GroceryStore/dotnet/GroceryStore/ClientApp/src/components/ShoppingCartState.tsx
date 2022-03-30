import React, { createContext, useContext, useState } from 'react'

export type cartDetailType = {
    id: string,
    name: string,
    imagePath: string,
    category: string,
    quantity: number,
    unitPrice: number,
    currencySign: string,
    description: string
}

type ShoppingCartProviderType = {
    children: React.ReactNode
}

type contextType = {
    cartDetail: cartDetailType[],
    addToCart: (goods: cartDetailType) => void,
    deleteFromCart: (goods: cartDetailType) => void,
    changeQuantity: (goods: cartDetailType, quantity: number) => void,
    total: number
}
const ShoppingCartContext = createContext<contextType | undefined>(undefined);

export const ShoppingCartProvider: React.VFC<ShoppingCartProviderType> = ({ children }) => {

    const [cartDetail, setCartDetail] = useState<cartDetailType[]>([])
    const [total, setTotal] = useState(0)

    const addToCart = (goods: cartDetailType): void => {
        setCartDetail(current => {
            const searchResult = current.find(val => val.id === goods.id)
            if (!searchResult)
                current = [...current, goods]
            else
                current = current.map(val => val.id === goods.id ? { ...val, quantity: val.quantity + 1 } : val)

            setTotal(current.reduce((sum, elm) => sum + (elm.quantity * elm.unitPrice), 0))

            return current
        })
    }

    const deleteFromCart = (goods: cartDetailType): void => {
        setCartDetail(current => {
            const deleted = current.filter(val => val.id !== goods.id)
            setTotal(deleted.reduce((sum, elm) => sum + (elm.quantity * elm.unitPrice), 0))

            return deleted
        })
            ;
    }

    const changeQuantity = (goods: cartDetailType, quantity: number): void => {
        if (quantity < 0) return

        setCartDetail(current => {
            const newCart = current.map(val => val.id === goods.id ? { ...val, quantity: quantity } : val)
            setTotal(newCart.reduce((sum, elm) => sum + (elm.quantity * elm.unitPrice), 0))
            return newCart
        })
    }

    return (
        <ShoppingCartContext.Provider value={{ cartDetail, addToCart, deleteFromCart, changeQuantity, total }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export const useShoppingCart = () => useContext(ShoppingCartContext)