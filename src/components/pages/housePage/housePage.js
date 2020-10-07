import React, {Component} from 'react';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails';
import ErrorMessage from '../../errorMessage';
import GotService from '../../../services/gotService';
import RowBlock from '../../rowBlock';

export default class HousePage extends Component {
    gotService = new GotService();
    
    state = {
        selectedHouse: null,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        });
    }

    onItemSelected = (id) => {
        this.setState({
            selectedHouse: id
        });
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage />
        }

        const itemList = (
            <ItemList 
                getData={this.gotService.getAllHouses}
                renderItem={({name}) => name}
                onItemSelected={this.onItemSelected}/>
        );

        const houseDetails = (
            <ItemDetails 
            category="house"
            itemId={this.state.selectedHouse}>
                <Field key='1' field="region" label="Region" />
                <Field key='2' field="words" label="Words" />
                <Field key='3' field="titles" label="Titles" />
                <Field key='4' field="ancestralWeapons" label="Ancestral Weapons" />
            </ItemDetails>
        );

        return (
            <RowBlock left={itemList} right={houseDetails} />
        )
    }
}
