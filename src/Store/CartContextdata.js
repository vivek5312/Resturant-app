import React from "react";

const CartContextdata = React.createContext({
    items:[],
    totalAmount:0,
    addItem: (item) => {},
    removeItem: (id) => {}
});

export default CartContextdata;