function CartItem({ item, onIncrement, onDelete }) {
  return (
    <>
      <p>
        {item.title} (Кол-во: {item.count})
      </p>
      <button onClick={() => onIncrement(item.id)}>+1</button>
      <button onClick={() => onDelete(item.id)}>Удалить</button>
    </>
  );
}

export default CartItem;
