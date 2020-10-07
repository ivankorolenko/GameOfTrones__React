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
        error: false
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

    render() {
        if (this.state.error) {
            return <ErrorMessage />
        }

        const itemList = (
            <ItemList 
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
            <RowBlock left={itemList} right={charDetails} />
        )
    }
}

