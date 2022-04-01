import React from 'react';
import Carrito from './Carrito.jpg';

function CartWidget(props) {
    return (
        <div>
            <img src={Carrito} />
            <span>{props.CartWidgetContent}</span>
            <span>{props.nombre}</span>

        </div>
    );
}

export default CartWidget