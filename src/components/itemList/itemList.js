import React, {Component} from 'react';
import styled from 'styled-components';
import Spinner from '../spinner';

const Item = styled.li`
    cursor: pointer;
`;

export default class ItemList extends Component {
    state = {
        itemList: null
    };

    updateState() {
        const {getData, page} = this.props;

        getData(page)
            .then((itemList) => {
                this.setState({
                    itemList
                });
            });
    }

    componentDidMount() {
        this.updateState();
    }

    componentDidUpdate() {
        this.updateState();
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {id} = item,
                  label = this.props.renderItem(item);
            
            return (
                <Item 
                    key={id}     
                    className="list-group-item"
                    onClick={() => {
                        this.props.onItemSelected(id);
                    }}>
                    {label}
                </Item>
            )
        });
    }

    render() {
        const {itemList} = this.state;

        if (!itemList) {
            return <Spinner/>
        }

        const items = this.renderItems(itemList);

        return (
            <>
                <ul className="item-list list-group">
                    {items}
                </ul>
                <br/>
            </>
        );
    }
}