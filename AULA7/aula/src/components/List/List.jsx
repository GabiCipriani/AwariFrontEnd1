import Item from "../Item/Item"

function List ({items = [], onItemClick})
{  const handleOnItemClick = (item) => {
    onItemClick(item);

}
    const map = items.map ((item) => {

        return (
        <Item key={item.id} item={item} onItemClick={handleOnItemClick} />)
    }
)

return (
    <ul>
        {map}
    </ul>
)};


export default List;