import React from 'react';
import CartTable from '../cart-table';
import AppHeader from "../app-header";

const CartPage = () => {
    return (
        <div className="app">
            <AppHeader total={36}/>
            <div className="cart">
                <CartTable/>
            </div>
        </div>

    )
}

export default CartPage;