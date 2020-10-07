import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import GotService from '../../services/gotService';
import ErrorMessage from '../errorMessage';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../pages/characterPage';
import HousePage from '../pages/housePage';
import BookPage from '../pages/bookPage'

export default class App extends Component {
    constructor() {
        super();

        this.gotService = new GotService();

        this.state = {
            randomShown: true,
            error: false
        }
    }

    componentDidCatch() {
        this.setState({
            error: true
        });
    }

    ToggleRandomChar = () => {
        this.setState({
            randomShown: !this.state.randomShown
        });
    }

    render() {
        const {randomShown, error} = this.state,
              randomChar = randomShown ? <RandomChar/> : null;
        
        if (error) {
            return <ErrorMessage />
        }

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {randomChar}
                            <Button 
                                color="primary"
                                onClick={this.ToggleRandomChar}>
                                Toggle random character
                            </Button><br/><br/><br/>
                        </Col>
                    </Row>
                    <CharacterPage />
                    <HousePage />
                    <BookPage />
                </Container>
            </>
        );
    }
}
