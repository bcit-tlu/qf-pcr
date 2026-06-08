import { Component } from "react";
import { Container, Button } from 'react-bootstrap';
import { withRouterV7 } from '../../util/withRouterV7';

class IntroPage extends Component {
    render() {
        return (
            <Container className="mt-4">
                <h2 className="mb-3 font-monospace text-info">Final Assessment</h2>
                <p>Complete this Final Assessment to earn your completion certificate. You will be randomly assigned a Pregnancy Loss case or a Rapid Aneuploidy Detection case, and you will have 3 attempts to complete the case before you need to restart from the beginning.</p>
                <Button onClick={() => { this.props.history.push(`/final_assessment/exam/1`); }}>Begin</Button>
            </Container>
        );
    }
}
export default withRouterV7(IntroPage);
