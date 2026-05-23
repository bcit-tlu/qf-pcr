import { Component } from "react";
import { Dropdown, Button, ButtonGroup } from 'react-bootstrap';
import { setModuleComplete } from '../../../util/utils.js';

class FinalConclusion extends Component{
    constructor(props) {
        super(props);
        this.state = {
            finalAnswer:"",
            attempts:0
        }
        this.finalOptions = [
            "Normal female",
            "Normal male",
            "Trisomy 13 male",
            "Trisomy 13 female",
            "Trisomy 16 male",
            "Trisomy 16 female",
            "Trisomy 18 male",
            "Trisomy 18 female",
            "Trisomy 21 male",
            "Trisomy 21 female",
            "Trisomy 22 male",
            "Trisomy 22 female",
            "Triploidy",
            "Klinefelter",
            "Turner",
            "Other",
            "Further testing required"
        ];
        this.onFinish = this.onFinish.bind(this);
        this.updateAttempts = this.updateAttempts.bind(this);
    }
    onFinish(){
        if (this.props.category==="guidedpractice"){
            if (this.props.data.final_conclusion === this.state.finalAnswer){
                setModuleComplete(this.props.title,true);
                this.props.history.push(`/guidedpractice/complete/${this.props.caseType}`);
            }
            else{
                alert("Answer incorrect!");
            }
        }
        else{

            var conclusion = JSON.stringify({"answer":this.state.finalAnswer,"correct":this.props.data.final_conclusion===this.state.finalAnswer});
            if (this.props.category==="practice"){
                if (this.props.data.final_conclusion!=this.state.finalAnswer){
                    if (this.state.attempts < 3){
                        alert("Answer incorrect! (Attempts remaining: " + (3 - (this.state.attempts + 1)) + ")");
                        if (this.state.attempts+1 >= 3){
                            localStorage.setItem(this.props.caseType+this.props.caseId+"_conclusion",conclusion);
                            this.props.history.push(`/${this.props.category}/${this.props.caseType}/${this.props.caseId}/evaluation`);
                        }
                        this.setState({attempts:this.state.attempts+1});
                    }
                    else{
                        localStorage.setItem(this.props.caseType+this.props.caseId+"_conclusion",conclusion);
                        this.props.history.push(`/${this.props.category}/${this.props.caseType}/${this.props.caseId}/evaluation`);
                    }
                }
                else{
                    localStorage.setItem(this.props.caseType+this.props.caseId+"_conclusion",conclusion);
                    this.props.history.push(`/${this.props.category}/${this.props.caseType}/${this.props.caseId}/evaluation`);
                }
            }
            if (this.props.category ==="final_assessment"){
                localStorage.setItem(this.props.caseType+this.props.caseId+"_conclusion",conclusion);
                this.updateAttempts();
                this.props.history.push(`/${this.props.category}/${this.props.caseType}/${this.props.caseId}/evaluation`);
            }

        }
        

    }
    updateAttempts(){
        let currentAttempts = localStorage.getItem(`${this.props.caseType}${this.props.caseId}_attempts`);
        if (currentAttempts == null){
            localStorage.setItem(`${this.props.caseType}${this.props.caseId}_attempts`, 0);
        }
        else{
            currentAttempts++;
            localStorage.setItem(`${this.props.caseType}${this.props.caseId}_attempts`, currentAttempts);
        }
    }
    render(){
        return <div>
            <h3>Is there enough evidence for a final conclusion?</h3>
            <br></br>
            <p>
                Based on what we have observed from the previous two steps, what can we conclude about the subject?
                <br></br>
                <br></br>
                <strong>Normal:</strong> must have at least 2 markers for each chromosome that have normal ratio: all others uninformative
                <br></br>
                <br></br>

                <strong>Trisomy:</strong>for affected chromosome: must have at least 2 markers for chromosome that have trisomy ratio, or 3 peaks: all others uninformative
                If both normal and abnormal allele patterns seen, call for further testing
                <br></br>
                <br></br>
                <strong>Triploidy (3N):</strong> suspected if all chromosomes show trisomy
                <br></br>
                <br></br>

                <h5>Sex chromosome abnormalities</h5>
                <br></br>

                <strong>Klinefelters:</strong> need AMEL XY, one peak for Ch Y loci, 2 peaks or uninformative for Ch X loci, TAF9L ratio is for 2X (i.e. Ch 3 and Ch X peaks same peak area)
                <br></br>
                <br></br>
                <strong>Turner:</strong> need AMEL XX, no ChY loci peaks, 1 peak for Ch X loci, TAF9L ratio is for 1X (i.e. Ch 3 has peak area twice Ch X peak area)
                <br></br>
                <br></br>
                Remember to also review autosomes: there can be more than only abnormality (but this is rare) 
                <br></br>
                <br></br>
                Select what we can conclude about the subject:
                <br></br>
            </p>

            <Dropdown className="mb-3 mr-2" as={ButtonGroup}>
                <label className="mx-0 my-0 px-4 py-0 rounded-left" style={{border:"1px solid gray",lineHeight:"38px"}}>
                    {this.state.finalAnswer===""?"Select":this.state.finalAnswer}
                </label>
                <Dropdown.Toggle variant="secondary" style={{height:40}}/>
                <Dropdown.Menu alignRight>
                    {this.finalOptions.map((item)=>{
                        return <Dropdown.Item onClick={()=>{this.setState({finalAnswer:item})}}>{item}</Dropdown.Item>
                    })}
                </Dropdown.Menu>
            </Dropdown> 
                <br></br>
            <Button disabled={this.state.finalAnswer===""} onClick={this.onFinish} className={"mt-3"} style={{width: 100,float:"right"}}>Finish</Button>

        </div>
    }
}
export default FinalConclusion;