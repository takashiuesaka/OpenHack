import React from 'react'
import axios from 'axios'
import { useShoppingCart } from '../components/ShoppingCartState'

export const Checkout: React.VFC = () => {

    const shoppingCart = useShoppingCart()

    React.useEffect(() => {
        (async () => {
            try {
                const res = await axios.get('/weatherforecast')
                const data = await res.data
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    // Test

    return (
        <div>
            {shoppingCart?.cartDetail.map((val, index) => {
                return <div key={index}>{val.name}</div>
            })}
        </div>
    )
}