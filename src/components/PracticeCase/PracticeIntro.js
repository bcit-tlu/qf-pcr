import React, {Component} from "react";
import { Container, Row, Image, Card, Button } from "react-bootstrap";
class PracticeIntro extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
                <>

                    <h2>Practice Case Introduction</h2>
                    <p>
                    Now that you have completed the demo cases, it is time to try analyzing the data on your own. You can reset and retry the cases as many times as you like, but will have 3 chances to get the correct conclusion for each attempt. For each case, it is important to have a systematic method for analyzing the data:
                    <br></br>
                    <br></br>
                    <ol>
                        <li>Identify biological sex of patient by reviewing X, Y and TAF9L data (be alert for evidence of monosomy X)</li>
                        <li>Identify how many alleles are present for each marker</li>
                        <li>Use the appropriate Excel document (remember there is a different document for RAD and PL cases) to record the peak area values</li>
                        <li>Focus on informative markers with 2 or 3 peaks</li>
                        <li>If all informative markers have 2 peaks and normal peak area ratios, conclude that there is no evidence for chromosomal abnormalities</li>
                        <li>If abnormal markers (3 peaks or abnormal peak area ratios) are present, are they only found for one chromosome (=trisomy) or all chromosomes (=triploid)?</li>
                        <li>Are informative markers for a chromosome in agreement? If not, no conclusion can be reached</li>
                        <li>Are there any abnormally small peaks? Are they present for only 1 chromosome (consider mosaicism) or all chromosomes (consider maternal cell contamination)</li>
                        <li>Is there anything else unusual in this data that is making it difficult to come to a conclusion?</li>
                    </ol>
                    Good luck!
                    </p>
                    <Button onClick={this.props.onClickNext} style={{width: 100,marginLeft:"auto"}}>Start</Button>
                </>
        )
    }
}
export default PracticeIntro;