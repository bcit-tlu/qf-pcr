import { Component } from "react";
import { Container } from 'react-bootstrap';

class CasePage extends Component {
    render() {
        return (
            <Container className="mt-4">
                <h2 className="mb-3 font-monospace text-info">{this.props.title}</h2>
                {this.props.children}
            </Container>
        );
    }
}
export default CasePage;
