import React, { Component } from 'react';
import { Button, Row, Tab, Col, Nav, Image, Container, Card, ListGroup } from 'react-bootstrap';

import backgroundData from '../data/background';
class BackgroundPage extends Component {

    constructor() {
        super();
        this.state = {
            currentTab:0
        }
        this.background_data = backgroundData;
        this.onClickNext = this.onClickNext.bind(this);
    }
    onClickNext() {
        var nextTab = this.state.currentTab+1;
        if (nextTab < this.background_data.length){
            this.setState({currentTab:nextTab});
            window.scrollTo(0, 0);
        }
    }

    componentDidMount() {
    }


    render() {
        return (
            <div style={{ height: '100%', minHeight: '100vh' }} className="text-dark py-4">
                <Container>
                    <Row>
                        <Tab.Container id="background-tabs"  activeKey={this.background_data[this.state.currentTab].id}>
                            <Row>
                                <Col sm={4}>
                                    <Card className="mb-3">
                                        <ListGroup variant="flush" >
                                            {this.background_data.map(function(x,index) {
                                                return (
                                                    <ListGroup.Item onClick={()=>this.setState({currentTab:index})} key={x.id} className={this.state.currentTab==index?'bg-info text-white':''} style={{cursor:"pointer"}}> 
                                                        {x.title}
                                                    </ListGroup.Item>
                                                )
                                            }, this)}
                                        </ListGroup>
                                    </Card>
                                </Col>
                                <Col sm={8}>
                                    <Tab.Content>
                                        {
                                            this.background_data.map(function(x) {
                                                return (
                                                    <Tab.Pane key={x.id} eventKey={x.id}>
                                                        <Card className="px-3 py-3">
                                                            <Card.Header className="bg-info text-white" as="h5">{x.title}</Card.Header>
                                                            <Card.Body as="div">                                        
                                                                {x.content}
                                                            </Card.Body>
                                                            <Card.Footer style={{textAlign:'right'}} className="bg-transparent border-white">
                                                                <Button size="sm" onClick={this.onClickNext} variant="primary" hidden={this.state.currentTab+1>=this.background_data.length}>NEXT</Button>
                                                            </Card.Footer>
                                                        </Card>
                                                    </Tab.Pane>
                                                );
                                            },this)
                                        }
                                    
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Row>
                </Container>
            </div>
            
        )
    }
}

export default BackgroundPage;