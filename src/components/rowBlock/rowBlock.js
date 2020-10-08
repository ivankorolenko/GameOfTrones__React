import React, {Component} from 'react';
import styled from 'styled-components';
import {Col, Row, Button} from 'reactstrap';

const Paginator = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default class RowBlock extends Component {
    render() {
        return (
            <Row>
                <Col md='6'>
                    {this.props.left}
                    <Paginator>
                        <Button 
                            color="primary"
                            onClick={this.props.prevPage}>
                            Previouse page
                        </Button>
                        <Button 
                            color="primary"
                            onClick={this.props.nextPage}>
                            Next page
                        </Button>
                    </Paginator>
                    <br/>
                </Col>
                <Col md='6'>
                    {this.props.right}
                </Col>
            </Row>
        )
    }   
}
