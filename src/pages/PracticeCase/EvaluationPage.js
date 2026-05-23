import React, {Component} from "react";
import { ListGroup, Container, Button, Table } from 'react-bootstrap';
import { setModuleComplete } from "../../util/utils";
import { AES } from "crypto-js";

class EvaluationPage extends Component{
    constructor(props){
        super(props);
        this.checkConclusion = this.checkConclusion.bind(this);
        this.onClickRetry = this.onClickRetry.bind(this);
        this.onClickFinish = this.onClickFinish.bind(this);
        this.state = {conclusionCorrect:this.checkConclusion()};

    }
    calculateMarkersScore(){
        var correctMarkers = 0;
        var totalQuestions = 0;
        var markers = JSON.parse(localStorage.getItem(this.props.match.params.caseType+this.props.match.params.caseId+"_markers"));
        for (let question of Object.keys(markers)){
            for (const [key, value] of Object.entries(markers[question])){
                totalQuestions++;
                if (value.correct){
                    correctMarkers++;
                }
            }
        }
        return  <td className={correctMarkers/totalQuestions===1?"text-success":"text-danger"} style={{textAlign:"right"}}>{`${correctMarkers}/${totalQuestions}`}</td>;
    }
    checkConclusion(){
        var answer = JSON.parse(localStorage.getItem(this.props.match.params.caseType+this.props.match.params.caseId+"_conclusion"));
        if (answer===null){
            answer = {correct:false,answer:""};
        }
        if (answer.correct){ //answer is correct
            if (this.props.match.params.category === "final_assessment"){
                let completionData = {date:new Date().toLocaleDateString("en-US"),complete:true};
                localStorage.setItem("final_assessment_completion",AES.encrypt(JSON.stringify(completionData),"9g92m498dh4sx"));
            }
        }
        return answer.correct;
    }

    getFinalConclusion(){
        var answer = JSON.parse(localStorage.getItem(this.props.match.params.caseType+this.props.match.params.caseId+"_conclusion"));
        if (answer===null){
            answer = {correct:false,answer:""};
        }
        return  <td className={answer.correct?"text-success":"text-danger"} style={{textAlign:"right"}}>{`${answer.correct?"Correct!":"Incorrect."} (Answered: ${answer.answer})`}</td> ;
    }
    onClickRetry(){
        this.props.history.push(`/${this.props.match.params.category}/${this.props.match.params.caseType}/${this.props.match.params.caseId}`);

    }
    onClickFinish(){
        if (this.props.match.params.category === "final_assessment"){
            setModuleComplete("Final Assessment",true);
            this.props.history.push(`/${this.props.match.params.category}/complete`);
        }
        else{
            this.props.history.push(`/${this.props.match.params.category}`);
        }            

    }
    render(){
        return (       
            
            <Container className="mt-4">
                <h2 className="text-info">Evaluation</h2>
                {/* <ListGroup className="mb-3">
                    <ListGroup.Item>{this.calculateMarkersScore()}</ListGroup.Item>
                    <ListGroup.Item>{this.checkFinalConclusion()}</ListGroup.Item>
                </ListGroup> */}
                <Table  striped>
                    <tbody>
                        <tr>
                            <td>Correctly identified markers</td>
                            {this.calculateMarkersScore()}
                        </tr>
                        <tr>
                            <td>Final conclusion</td>
                            {this.getFinalConclusion()}
                        </tr>
                        <tr><td></td><td>
                            {this.state.conclusionCorrect?<Button onClick={this.onClickFinish} variant="info">Finish</Button>:<Button onClick={this.onClickRetry} variant="info">Retry</Button>}
                            
                        </td></tr>
                    </tbody>
                </Table>
            </Container>
        )
    }
}
export default EvaluationPage;