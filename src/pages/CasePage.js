import React, { Component } from "react";
import { Container } from 'react-bootstrap';

class CasePage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Container className="mt-4">
                <h2 className="mb-3 text-monospace text-info">{this.props.title}</h2>
                {this.props.children}
            </Container>
        )
    }
}
export default CasePage;