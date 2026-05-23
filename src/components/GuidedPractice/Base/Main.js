import React, {Component} from "react";
import { Col, Nav, Row, Card, Tabs, Tab, Container, Button } from 'react-bootstrap';
import ReviewPeaks from './ReviewPeaks';
import IdentifyMarkers from "./IdentifyMarkers";
import GenotypeTable from "./GenotypeTable";
import FinalConclusion from "./FinalConclusion";
import '../css/StepBar.css';
import guided_prenatalRAD_data  from "../../../data/GuidedPractice/prenatalRAD.json"
import guided_pl_data  from "../../../data/GuidedPractice/pregnancyLoss.json"
import practice_prenatalRAD_data from '../../../data/PracticeCase/prenatalrad/practice_data.json';
import practice_pl_data from '../../../data/PracticeCase/pregnancyloss/practice_data.json';
import PracticeIntro from "../../PracticeCase/PracticeIntro";
import final_data from '../../../data/FinalAssessment/finalAssessment.json';
import FinalIntro from '../../FinalAssessment/FinalIntro';
class Main extends Component{
    constructor(props){
        super(props);
        this.state = {completedSteps:0, currentTab:0, caseId:this.props.match.params.caseId, caseType:this.props.match.params.caseType, reachedMaxAttempts: false};
        this.handleSelect = this.handleSelect.bind(this);
        this.onClickNext = this.onClickNext.bind(this);
        this.getStepColor = this.getStepColor.bind(this);
        this.isStepCompleted = this.isStepCompleted.bind(this);
        this.getIntro = this.getIntro.bind(this);

        this.checkAttempts = this.checkAttempts.bind(this);

        this.data = null;
        if (this.props.category==="final_assessment"){
            this.checkAttempts();
            this.data = final_data[0]; //default set to 0
            let currentCase = localStorage.getItem(`${this.props.match.params.caseType}${this.props.match.params.caseId}_case`);
            if (currentCase == null){
                let randomCase = Math.round(Math.random());
                this.data = final_data[randomCase];
                localStorage.setItem(`${this.props.match.params.caseType}${this.props.match.params.caseId}_case`, randomCase);
    
            }else{
                this.data = final_data[currentCase];
            }
        }
        else if (this.props.category === "practice"){
            if (this.props.match.params.caseType === "prenatalrad"){
                this.data = practice_prenatalRAD_data[`practice/${this.state.caseType}/${this.state.caseId}`].data;
            }
            else if (this.props.match.params.caseType === "pregnancyloss"){
                this.data = practice_pl_data[`practice/${this.state.caseType}/${this.state.caseId}`].data;
            }
            else{
                this.data = null;
            }
        }
        else if (this.props.category==="guidedpractice")
        {
            if (this.props.match.params.caseType === "pregnancyloss"){
                this.data = guided_pl_data;
            }
            else if (this.props.match.params.caseType === "prenatalrad"){
                this.data = guided_prenatalRAD_data;
            }
            else{
                this.data = null;
            }
        }
        

    }

    checkAttempts(){
        let currentAttempts = localStorage.getItem(`${this.props.match.params.caseType}${this.props.match.params.caseId}_attempts`);
        if (currentAttempts == null){
            localStorage.setItem(`${this.props.match.params.caseType}${this.props.match.params.caseId}_attempts`, 0);
        }
        else if (currentAttempts >= 3){
            this.setState({reachedMaxAttempts:true});
            this.props.history.push(`/final_assessment/${this.props.match.params.caseType}/${this.props.match.params.caseId}/max_attempts`);
        }
    }

    getTitle(){
        if (this.props.match.params.caseType === "pregnancyloss"){
            return "Pregnancy Loss Guided Practice";
        }
        else if (this.props.match.params.caseType === "prenatalrad"){
            return "Prenatal RAD Guided Practice";
        } 
    }
    handleSelect(tab) {
        this.setState({currentTab:parseInt(tab)});
    }
    onClickNext(){
        var nextTab = Number.parseInt(this.state.currentTab)+1;
        var stepsCompleted = Number.parseInt(this.state.completedSteps);
        if ( stepsCompleted < 3 ){
            stepsCompleted++;
        }
        if ( nextTab <= 3 ){
            window.scrollTo(0, 0);
            this.setState({ currentTab:nextTab, completedSteps:stepsCompleted });
        }
    }
    getStepColor(tab){
        if ( tab===this.state.currentTab ){
            return "current-step";
        }
        else if (tab<this.state.currentTab){
            return "completed-step"
        }
        return "";
    }

    isStepCompleted(step){
        if ( step <= this.state.completedSteps ){
            return true;
        }
        return false;
    }

    getIntro(){
        if (this.props.category === "practice"){
            return <PracticeIntro onClickNext={this.onClickNext}></PracticeIntro>;
        }
        else if (this.props.category === "final_assessment"){
            return <FinalIntro onClickNext={this.onClickNext}></FinalIntro>
        }
        else{
            return  <ReviewPeaks onClickNext={this.onClickNext}></ReviewPeaks>;
        }
                                        
    }

    render(){
        return (                
                <Tab.Container onSelect={this.handleSelect} activeKey={this.state.currentTab}>
                    <Row>
                        <Col sm={12}>
                            <Nav>
                                <Nav.Item className={`step-arrows ${this.getStepColor(0)}`}>
                                    <Nav.Link disabled={!this.isStepCompleted(0)}  eventKey={0}><strong>Step 1</strong> <br></br> Review quality of peaks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className={`step-arrows ${this.getStepColor(1)}`} >
                                    <Nav.Link disabled={!this.isStepCompleted(1)} eventKey={1}><strong>Step 2</strong> <br></br> Identify Markers</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className={`step-arrows ${this.getStepColor(2)}`}>
                                    <Nav.Link disabled={!this.isStepCompleted(2)}  eventKey={2}><strong>Step 3</strong> <br></br> Genotype Table</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className={`step-arrows ${this.getStepColor(3)}`}>
                                    <Nav.Link disabled={!this.isStepCompleted(3)}  eventKey={3}><strong>Step 4</strong> <br></br> Final Conclusion</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                        <Tab.Content>
                            <Tab.Pane eventKey={0}>
                                <Card className="px-5 py-5 mb-5">
                                    {
                                        this.getIntro()

                                    }
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey={1}>
                                <Card className="px-5 py-5 mb-5">
                                    <IdentifyMarkers 
                                        saveAnswers={this.props.category!="guidedpractice"} 
                                        canSkip={this.props.category=="guidedpractice"} 
                                        showEvaluation={this.props.category == "guidedpractice"} 
                                        data={this.data} 
                                        onClickNext={this.onClickNext} 
                                        caseType={this.props.match.params.caseType} 
                                        category={this.props.category} 
                                        caseId={this.props.match.params.caseId}>
                                    </IdentifyMarkers>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey={2}>
                                <Card className="px-5 py-5 mb-5">
                                    <GenotypeTable 
                                        canSkip={true} 
                                        data={this.data} onClickNext={this.onClickNext} 
                                        caseType={this.props.match.params.caseType} 
                                        caseId={this.props.match.params.caseId}>
                                    </GenotypeTable>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey={3}>
                                <Card className="px-5 py-5 mb-5">
                                    <FinalConclusion 
                                        category={this.props.category} 
                                        title={this.getTitle()} 
                                        data={this.data} 
                                        history={this.props.history} 
                                        caseType={this.props.match.params.caseType} 
                                        caseId={this.props.match.params.caseId}>
                                    </FinalConclusion>
                                </Card>
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>

        )
    }
}
export default Main;