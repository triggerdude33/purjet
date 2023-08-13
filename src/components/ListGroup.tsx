import { MouseEvent, useState } from "react";

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: Props) {
    
    // Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const getMessage = () => {
        items.length === 0 && <p>No item found </p>;
    }

    // Event handler
    const handleClick = (item:string, index:number, event: MouseEvent) => {
        console.log(item, index, event);
        setSelectedIndex(index);
        onSelectItem(item);
    }

    if(items.length === 0)
        return <p>No item found</p>

    return( 
        <>
            <h1>{heading}</h1>
            { getMessage() }
            <ul className="list-group">
                {items.map((item, index) => 
                <li 
                    className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item' } 
                    key={item} 
                    onClick={(event) => handleClick(item, index, event)}
                >
                    {item}
                </li>)}
            </ul>
        </>
    );
}

export default ListGroup;