import { Component } from "react";
import { Image, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import trophy from "../../assets/winner.png";
import { enc, AES } from "crypto-js";
import { withRouterV7 } from '../../util/withRouterV7';

class CompletedFinalAssessmentPage extends Component {
    constructor(props) {
        super(props);
        this.state = { completionData: {} };
        const storage_data = localStorage.getItem("final_assessment_completion");
        if (storage_data == null) {
            this.props.history.push(`/`);
        } else {
            const completion_data = AES.decrypt(storage_data, "9g92m498dh4sx").toString(enc.Utf8);
            try {
                this.state = { completionData: JSON.parse(completion_data) };
            } catch (e) {
                this.props.history.push(`/`);
            }
        }
    }

    render() {
        return (
            <Container className="mt-4">
                <Card className="px-5 py-5 mb-5" style={{ textAlign: "center" }}>
                    <Card.Title>
                        <h2>Congratulations for completing this online QF-PCR practice on {this.state.completionData.date}</h2>
                    </Card.Title>
                    <Card.Body>
                        <Image height={200} src={trophy} />
                        <p className="mt-3">If you wish, you can <Link to="/">return to the beginning</Link> for more practice</p>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}
export default withRouterV7(CompletedFinalAssessmentPage);
