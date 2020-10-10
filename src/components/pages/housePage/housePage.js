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
        error: false,
        page: 10,
        itemList: null
    }

    constructor(props) {
        super(props)
        this.updateAllHouses()
    }

    componentDidCatch() {
        this.setState({
            error: true
        });
    }

    updateAllHouses() {
        this.gotService.getAllHouses(this.state.page)
            .then(itemList => {
                this.setState({ itemList })
            })
            .catch(error => {
                console.error(error)
            });
    }


    onItemSelected = (id) => {
        this.setState({
            selectedHouse: id
        });
    }

    nextPage = () => {
        if (this.state.page < 45) {
            this.setState({
                page: this.state.page + 1
            }, this.updateAllHouses);
        }
    }

    prevPage = () => {
        if (this.state.page > 1) {
            this.setState({
                page: this.state.page - 1
            }, this.updateAllHouses);
        }
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage />
        }

        const itemList = (
            <ItemList 
                itemList={this.state.itemList}
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
            <RowBlock
                nextPage={this.nextPage} 
                prevPage={this.prevPage} 
                left={itemList} 
                right={houseDetails} />
        )
    }
}
