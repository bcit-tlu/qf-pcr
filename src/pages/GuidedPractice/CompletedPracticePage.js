import { Component } from "react";
import { Image, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CheckCircle from "../../assets/check_circle.svg";

class CompletedPractice extends Component{
    constructor(props) {
        super(props);
    }

    render(){ 
        return <Container className="mt-4">
            <Card className="px-5 py-5 mb-5" style={{textAlign:"center"}}>
                <Card.Title>
                    <h2>You have successfully completed the Guided Practice for <br></br> <strong style={{color:"#45cd89"}}>{this.props.title}!</strong></h2>
                </Card.Title>
                <Card.Body>
                    <Image height={200} src={CheckCircle}></Image>
                    <p className="mt-3">Next, complete the <Link to="/quiz">quiz</Link>!</p>
                </Card.Body>
            </Card>
        </Container>
    }
}
export default CompletedPractice;