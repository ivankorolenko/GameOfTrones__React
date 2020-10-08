import React, {Component} from 'react';
import ItemList from '../../itemList';
import ErrorMessage from '../../errorMessage';
import GotService from '../../../services/gotService';
import {withRouter} from 'react-router-dom';

class BookPage extends Component {
    gotService = new GotService();
    
    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        });
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage />
        }

        return (
            <ItemList 
                getData={this.gotService.getAllBooks}
                renderItem={({name}) => name}
                onItemSelected={(itemId) => {
                    this.props.history.push(itemId);
                }}/>
        )
    }
}

export default withRouter(BookPage);
