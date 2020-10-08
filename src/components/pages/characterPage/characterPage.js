import React, {Component} from 'react';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails';
import ErrorMessage from '../../errorMessage';
import GotService from '../../../services/gotService';
import RowBlock from '../../rowBlock';

export default class CharacterPage extends Component {
    gotService = new GotService();
    
    state = {
        selectedChar: null,
        error: false,
        page: 130
    }

    componentDidCatch() {
        this.setState({
            error: true
        });
    }

    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
        });
    }

    nextPage = () => {
        if (this.state.page < 214) {
            this.setState({
                page: this.state.page + 1
            });
        }
    }

    prevPage = () => {
        if (this.state.page > 1) {
            this.setState({
                page: this.state.page - 1
            });
        }       
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage />
        }

        const itemList = (
            <ItemList 
                page={this.state.page}
                getData={this.gotService.getAllCharacters}
                renderItem={({name, gender}) => `${name} (${gender})`}
                onItemSelected={this.onItemSelected}/>
        );

        const charDetails = (
            <ItemDetails 
            category="character"
            itemId={this.state.selectedChar}>
                <Field key='1' field="gender" label="Gender" />
                <Field key='2' field="born" label="Born" />
                <Field key='3' field="died" label="Died" />
                <Field key='4' field="culture" label="Culture" />
            </ItemDetails>
        );

        return (
            <RowBlock 
                nextPage={this.nextPage} 
                prevPage={this.prevPage} 
                left={itemList} 
                right={charDetails} />
        )
    }
}

