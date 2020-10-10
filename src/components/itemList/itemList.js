import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Spinner from '../spinner';

const Item = styled.li`
    cursor: pointer;
`;

function ItemList({getData, page, renderItem, onItemSelected}) {
    const [itemList, updateList] = useState(null);
    
    useEffect(() => {
        getData(page)
            .then((data) => {
                updateList(data);
            });
    }, [page]);

    function renderItems(arr) {
        return arr.map((item) => {
            const {id} = item,
                  label = renderItem(item);
            
            return (
                <Item 
                    key={id}     
                    className="list-group-item"
                    onClick={() => {
                        onItemSelected(id);
                    }}>
                    {label}
                </Item>
            )
        });
    }

    if (!itemList) {
        return <Spinner/>
    }

    const items = renderItems(itemList);

    return (
        <>
            <ul className="item-list list-group">
                {items}
            </ul>
            <br/>
        </>
    );
}

export default ItemList;