import { useState } from "react"
import CartItem from "./CartItem";

function ShoppingCart() {
const [cart, setCart] = useState([
  { id: 1, title: "Футболка", count: 1 },
  { id: 2, title: "Кепка", count: 2 },
]);

const incrementCount = (id) => {
    setCart(prev => prev.map(item => item.id === id ? {...prev, title: item.title, count: item.count+1} : item));
}

const deleteItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
}

const clearCart = () => {
    setCart([])
}
    return (
    <div className="user-profile">
      <h2>Корзина товаров</h2>
      
      <div className="user-info">
        {cart.map(item => (
            <CartItem
            key={item.id}
            item={item}
            onIncrement={incrementCount}
            onDelete={deleteItem}
            />
        ))}
      </div>
      <div className="controls">
        <button onClick={clearCart}>Очистить корзину</button>
      </div>

    </div>
    )
}

export default ShoppingCart