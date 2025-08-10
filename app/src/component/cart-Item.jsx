

export default function CartItem({ item, onRemove }) {
    return (
        <div>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <button onClick={() => onRemove(item.id)}>Remove</button>
        </div>
    )
}
