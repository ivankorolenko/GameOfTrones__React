import React, {Component} from 'react';
import styled from 'styled-components';
import GotService from '../../services/gotService';


const ItemDetailsBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
`;

const ItemDetailsTitle = styled.h4`
    margin-bottom: 20px;
    text-align: center;
`;

const SelectError = styled.span`
    font-size: 24px;
    color: #fff;
    margin: 0;
`;

const AlignedSpan = styled.span`
    float: right;
`;

const Field = ({item, field, label}) => {
    if (typeof item[field] === 'object') {

        const fieldList = item[field].map(value => {
            return (
                <>
                    <AlignedSpan>
                        {value}
                    </AlignedSpan>
                    <br/>
                </>
            )
        });

        return (
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">{label}</span>
                <span>{fieldList}</span>
            </li>
        )
    }

    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export default class ItemDetails extends Component {
    gotService = new GotService();

    state = {
        item: null
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const {category, itemId} = this.props;

        if (!itemId) {
            return
        }

        let itemInfo;

        switch (category) {
            case ('character'):
                itemInfo = this.gotService.getCharacter(itemId);
                break;
            case ('house'):
                itemInfo = this.gotService.getHouse(itemId);
                break;
            case ('book'):
                itemInfo = this.gotService.getBook(itemId);
                break;
            default:
                itemInfo = null
        }

        itemInfo.then((item) => {
            this.setState({item});
        });
    }

    render() {
        if (!this.state.item) {
            return <SelectError>Please select a {this.props.category}</SelectError>
        }

        const {item} = this.state,
              {name} = item;

        return (
            <ItemDetailsBlock className="rounded">
                <ItemDetailsTitle>{name}</ItemDetailsTitle>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </ItemDetailsBlock>
        );
    }
}

export {Field};