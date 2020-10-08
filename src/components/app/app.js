import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import GotService from '../../services/gotService';
import ErrorMessage from '../errorMessage';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../pages/characterPage';
import HousePage from '../pages/housePage';
import BookPage from '../pages/bookPage';
import BooksItem from '../pages/booksItem';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './app.css';

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
              randomChar = randomShown ? <RandomChar interval={1500} /> : null;
        
        if (error) {
            return <ErrorMessage />
        }

        return (
            <Router>
                <div className="app"> 
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
                        <Route path="/characters" component={CharacterPage} />
                        <Route path="/houses" component={HousePage} />
                        <Route path="/books" exact component={BookPage} />
                        <Route path="/books/:id" render={
                            ({match}) => {
                                const {id} = match.params;

                                return <BooksItem bookId={id} />
                            }
                        } />
                    </Container>
                </div>
            </Router>
        );
    }
}
