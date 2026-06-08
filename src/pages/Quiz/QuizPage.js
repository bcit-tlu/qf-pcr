import { Component } from 'react';
import Quiz from "../../components/Quiz/Quiz";
import { Container } from 'react-bootstrap';

class QuizPage extends Component {
    render() {
        return (
            <Container className="my-5">
                <Quiz quizData={this.props.quizData} />
            </Container>
        );
    }
}
export default QuizPage;
