import React, { Component } from 'react';
import xIcon from '../../../assets/x.svg';
import checkIcon from '../../../assets/checkmark.svg';
import { Dropdown, Button, ButtonGroup, Card, Row, Col } from 'react-bootstrap';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

class IdentifyMarkers extends Component {

    constructor(props) {
        super(props);
        this.initState = this.initState.bind(this);
        this.initState();
        this.createDropdown = this.createDropdown.bind(this);
        this.getAnswerBackground = this.getAnswerBackground.bind(this);
        this.onAnswerSelect = this.onAnswerSelect.bind(this);
        this.checkQuestionCorrect = this.checkQuestionCorrect.bind(this);
        this.onClickNext = this.onClickNext.bind(this);
        this.saveAnswers = this.saveAnswers.bind(this);

    }

    onClickNext(){
        this.saveAnswers();
        if (this.checkAllAnswered()){
            this.props.onClickNext();
        }
        else{
            if (window.confirm("Some questions have not been answered! Would you like to proceed?")){
                this.props.onClickNext();
            }
        }
    }
    
    saveAnswers(){
        if (this.props.saveAnswers){
            if (this.props.caseType!=null && this.props.caseType != "" && this.props.caseId!=null){
                localStorage.setItem(this.props.caseType+this.props.caseId+"_markers",JSON.stringify(this.state.answers));
            }
        }
    }

    checkAllAnswered(){

        if (!this.props.canSkip){
            for (let question of Object.keys(this.state.answers)){
                for (const [key, value] of Object.entries(this.state.answers[question])){
                    if (value === '' || value === null ){
                        return false;
                    }
                }
            }
        }
        return true;
    }

    initState(){
        let answerState = {};
        for (let key of Object.keys(this.props.data.markers)){
            answerState[key] = {};
            for (let question of this.props.data.markers[key].questions){
                answerState[key][question.id]="";
            }
        }
        this.state = {answers:answerState};

    }


    getAnswerBackground(isCorrect){
        if (this.props.showEvaluation){
            if (isCorrect===""||isCorrect==null){
                return "white";
            }
            if (isCorrect){
                return "#BCF4BC";
            }
            else{
                return "#E67878";
            }
        }
        else{
            return "white";
        }
    }

    checkQuestionCorrect(key){
        if (this.props.showEvaluation){
            for (var question_id in this.state.answers[key]){
                var isCorrect = this.state.answers[key][question_id].correct;
                if (isCorrect === null || isCorrect === undefined){
                    return null;
                }
                if (isCorrect === false){
                    return xIcon;
                }
            }
            return checkIcon;
        }
        else{
            return null;
        }
    }

    onAnswerSelect(key, option_data, question_data){
        var updatedAnswers = {...this.state.answers};
        option_data.correct = option_data.value===question_data.answer;
        updatedAnswers[key][question_data.id]=option_data;
        this.setState({answers:updatedAnswers});
    }

    createDropdown(key,question_data){
        let dropdown = [];
        for (let x in question_data){
            for (let question of question_data[x]){
                dropdown.push(
                    <Dropdown className="mb-3 mr-2" as={ButtonGroup}>
                        <label className="mx-0 my-0 px-4 py-0 rounded-left" style={{border:`1px solid ${this.state.answers[key][question.id]===""?'grey':'#0275d8'}`,lineHeight:"38px",background:this.getAnswerBackground(this.state.answers[key][question.id].correct)}}>
                            {this.state.answers[key][question.id]===""?"Select":this.state.answers[key][question.id].name} 
                        </label>
                        <Dropdown.Toggle variant={this.state.answers[key][question.id]===""?"secondary":"primary"} style={{height:40}}/>
                        <Dropdown.Menu alignRight>
                            {question.options.map(function(option){
                                return <Dropdown.Item onClick={()=>{this.onAnswerSelect(key, option, question)}}>{option.name}</Dropdown.Item>
                            },this)}
                        </Dropdown.Menu>
                    </Dropdown> 
                )
            }
        }
        return dropdown;
    }
    
    render() {

        return (
            <>
                <h2>Identify markers</h2>
                <p>In the following interactive chromatogram example, examine each marker and select which Chromosome the marker is on (look at label at the bottom), and whether the marker has One peak (and therefore is uninformative) has 2 peaks (and therefore is diallelic) or has 3 peaks (and therefore is triallelic). Zoom in on the image if necessary. Notice that the peak area is labelled underneath each peak (you will use this data in Step 3). {this.props.category == "guidedpractice"? "Correct answers will be marked in green and with a checkmark; incorrect answers will be marked in red and with an x. You can try again if your selection was not correct. ":""}Note that AMEL and TAF9L have unique selections:
<br></br>
<br></br>

AMEL: are there 2 peaks (XY) or 1 peak? (only X, but check TAF9L data to confirm number of X chromosomes)
<br></br>
<br></br>
TAF9L: compare peak heights: if the first peak is 2x than the second one, this is evidence for 1 X chromosome; if the first peak has same height, this is evidence for 2 X chromosomes.</p>
<br></br>
<br></br>
                <Row>
                    
                    <Col md={12} lg={7} style={{maxHeight:600}}>
                            <TransformWrapper initialScale={0.3} minScale={0.3} maxScale={2} centerOnInit={true}>
                                {({ zoomIn, zoomOut, resetTransform }) => (
                                    <React.Fragment>
                                        <div className="tools"  className="mb-2">
                                            <Button variant="outline-primary" className="mr-2 py-1" onClick={() => zoomIn()}>Zoom In</Button>
                                            <Button variant="outline-primary" className="mr-2 py-1" onClick={() => zoomOut()}>Zoom Out</Button>
                                            <Button variant="outline-primary" className="mr-2 py-1" onClick={() => resetTransform()}>Reset</Button>
                                        </div>
                                        <TransformComponent wrapperStyle={{width:"100%",height:600}}>
                                            <img src={this.props.data.image} />
                                        </TransformComponent>
                                    </React.Fragment>
                                )}

                            </TransformWrapper>
                    </Col>
                    <Col md={12} lg={5}>
                        <Card style={{maxHeight:650}}>
                            <Card.Body style={{overflowY:"scroll"}}>

                                {
                                    Object.keys(this.props.data.markers).map(function(key, index) {
                                        return (
                                            <div>
                                                    <label style={{fontWeight:"bold", color:'#6c757d'}}>{key} 
                                                        <span>
                                                            <img className="ml-2" style={{height:15}} src={this.checkQuestionCorrect(key)}></img>
                                                        </span>
                                                    </label> 
                                                <div>
                                                    {this.createDropdown(key,this.props.data.markers[key])}
                                                </div>
                                            </div>
                                        )
                                    },this)
                                }
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Button className={"mt-3"} onClick={this.onClickNext} style={{width: 100,marginLeft:"auto"}}>Next</Button>

                </Row>
            </>
        
        )
    }
}

export default IdentifyMarkers;