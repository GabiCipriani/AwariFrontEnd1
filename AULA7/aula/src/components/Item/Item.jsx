
function Item({ item, onItemClick }) {
    const handleOnItemClick = (item) => {
        onItemClick(item);
     }
    
        return (
            <li>
                <p>{item.name}</p>
                <button type="buttom" onClick={handleOnItemClick}>Ver Detalhes</button>
            </li>
        )
    
}

export default Item;