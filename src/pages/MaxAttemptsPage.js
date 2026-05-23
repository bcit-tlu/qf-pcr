import React, { Component } from "react";
import { Container, Button } from 'react-bootstrap';

class MaxAttemptsPage extends Component{
    constructor(props){
        super(props);
    }
    resetAttempts(){
        localStorage.removeItem(`${this.props.match.params.caseType}${this.props.match.params.caseId}_attempts`);

        let currentCase = localStorage.getItem(`${this.props.match.params.caseType}${this.props.match.params.caseId}_case`);

        if (currentCase == null){
            let randomCase = Math.round(Math.random());
            localStorage.setItem(`${this.props.match.params.caseType}${this.props.match.params.caseId}_case`, randomCase);

        }else{
            let newCase = currentCase == 0 ? 1 : 0; //toggle between case 0 and case 1
            
            // var intVal = currentCase==0 ? 1 : 0;
            // while (newCase == currentCase){
            //     newCase = Math.round(Math.random());
            // }
            localStorage.setItem(`${this.props.match.params.caseType}${this.props.match.params.caseId}_case`, newCase);

        }
    }
    render(){
        return (
            <Container className="mt-4">
                <h2 className="mb-3 text-monospace text-info">{this.props.title}</h2>
                <p>You have reached the maximum number of attempts. You will be redirected to the beginning and given a new case.</p>
                <Button onClick={()=>{this.resetAttempts(); this.props.history.push(`/${this.props.match.params.category}/${this.props.match.params.caseType}/${this.props.match.params.caseId}`);}}>OK</Button>
            </Container>
        )
    }
}
export default MaxAttemptsPage;