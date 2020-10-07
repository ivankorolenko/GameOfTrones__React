import React, {Component} from 'react';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails';
import ErrorMessage from '../../errorMessage';
import GotService from '../../../services/gotService';
import RowBlock from '../../rowBlock';

export default class BookPage extends Component {
    gotService = new GotService();
    
    state = {
        selectedBook: 1,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        });
    }

    onItemSelected = (id) => {
        this.setState({
            selectedBook: id
        });
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage />
        }

        const itemList = (
            <ItemList 
                getData={this.gotService.getAllBooks}
                renderItem={({name}) => name}
                onItemSelected={this.onItemSelected}/>
        );

        const bookDetails = (
            <ItemDetails 
            category="book"
            itemId={this.state.selectedBook}>
                <Field key='1' field="publisher" label="Publisher" />
                <Field key='2' field="numberOfPages" label="Number of pages" />
                <Field key='3' field="released" label="Released" />
            </ItemDetails>
        );

        return (
            <RowBlock left={itemList} right={bookDetails} />
        )
    }
}
