import React, {Component} from 'react';
import GotService from '../../../services/gotService';
import ItemDetails, {Field} from '../../itemDetails';

export default class BooksItem extends Component {
    gotService = new GotService();

    render() {
        return (
            <ItemDetails 
            category="book"
            itemId={this.props.bookId}>
                <Field key='1' field="publisher" label="Publisher" />
                <Field key='2' field="numberOfPages" label="Number of pages" />
                <Field key='3' field="released" label="Released" />
            </ItemDetails>
        )
    }
}


