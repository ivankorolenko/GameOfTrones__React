import React, {Component} from 'react';
import ItemList from '../../itemList';
import ErrorMessage from '../../errorMessage';
import GotService from '../../../services/gotService';
import {withRouter} from 'react-router-dom';

class BookPage extends Component {
    gotService = new GotService();

    state = {
        error: false,
        itemList: null
    }

    constructor(props) {
        super(props)
        this.updateAllBooks()
    }

    componentDidCatch() {
        this.setState({
            error: true
        });
    }

    updateAllBooks() {
        this.gotService.getAllBooks()
            .then(itemList => {
                this.setState({ itemList })
            })
            .catch(error => {
                console.error(error)
            });
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage />
        }

        return (
            <ItemList
                itemList={this.state.itemList}
                renderItem={({name}) => name}
                onItemSelected={(itemId) => {
                    this.props.history.push(itemId);
                }}/>
        )
    }
}

export default withRouter(BookPage);
