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
        page: 130,
        itemList: null
    }

    constructor(props) {
        super(props)
        this.updateAllCharacters()
    }

    componentDidCatch() {
        this.setState({
            error: true
        });
    }

    updateAllCharacters() {
        this.gotService.getAllCharacters(this.state.page)
            .then(itemList => {
                this.setState({ itemList })
            })
            .catch(error => {
                console.error(error)
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
            }, this.updateAllCharacters);
        }
    }

    prevPage = () => {
        if (this.state.page > 1) {
            this.setState({
                page: this.state.page - 1
            }, this.updateAllCharacters);
        }       
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage />
        }

        const itemList = (
            <ItemList 
                itemList={this.state.itemList}
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

