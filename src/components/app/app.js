import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


export default class App extends Component {
    constructor() {
        super();

        this.state = {
            randomShown: true
        }
    }

    ToggleRandomChar = () => {
        this.setState({
            randomShown: !this.state.randomShown
        });
    }

    render() {
        const {randomShown} = this.state,
              randomChar = randomShown ? <RandomChar/> : null;

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
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}
