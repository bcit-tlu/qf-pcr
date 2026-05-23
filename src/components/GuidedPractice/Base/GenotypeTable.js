import React, {Component} from "react";
import { Button, Container, Row, Table, Card } from "react-bootstrap";
import NormalMale from '../../../assets/normalMaleKey.jpg';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

class GenotypeTable extends Component{
    constructor(props) {
        super(props);
        this.initState();
        this.onValueChange = this.onValueChange.bind(this);
        this.calculateValue = this.calculateValue.bind(this);
    }
    initState(){
        let tableState = [];
        for (let key of Object.keys(this.props.data.markers)){
            tableState[key] = {
                area1:null,
                area2:null,
                area3:null,
                ratio:null,
                warning:"",
                notes:""
            };
            if (key==="AMEL"){
                tableState[key].notes = "1 peak = only X chrom present; 2 peaks = X and Y chrom present";
            }
            if (key==="TAF9L"){
                tableState[key].notes = "Peaks same height = 2 X chromosomes; first peak 2x the second one = 1 X chromosome; first peak shorter than second = Abnormal";
            }

        }
        this.state = {tableState:tableState};
    }
    onValueChange(key,valueName,value){
        var tableState = {...this.state.tableState}
        tableState[key][valueName] = value;
        tableState[key].ratio = this.calculateValue(tableState[key].area1,tableState[key].area2);
        tableState[key].warning = this.checkWarning(tableState[key],key);
        this.setState({tableState});
    }
    calculateValue(val1,val2){
        if ((val1 != null && val1 != '') && (val2 != null && val2 != '')){
            if ( val2 == 0 ){
                return "";
            }
            var ratio = (Number.parseFloat(val1)/Number.parseFloat(val2)).toFixed(4);
            return ratio;
        }
        return "";
    }
    checkWarning(data,key){
        var warningStr = "";
        var ratio = data.ratio;
        ratio = Number.parseFloat(ratio);
        var abnormalRatioRange1Min = 0.45;
        var abnormalRatioRange1Max = 0.65;
        var abnormalRatioRange2Min = 1.8;
        var abnormalRatioRange2Max = 2.4;
        var normalRatioRangeTAF9LMin = 1.97;
        var normalRatioRangeTAF9LMax = 2.57; 
        var ratioCheck1 = abnormalRatioRange1Min <= ratio && ratio <= abnormalRatioRange1Max;
        var ratioCheck2 = abnormalRatioRange2Min <= ratio && ratio <= abnormalRatioRange2Max;
        if (key === "TAF9L"){
            return "";
            // if (normalRatioRangeTAF9LMin <= ratio && ratio <= normalRatioRangeTAF9LMax){
            //     warningStr = "";
            // }
            // else{
            //     if (!isNaN(ratio)){
            //         warningStr = "Abnormal ratio detected"
            //     }
            // }
            // return warningStr;
        }
        if (ratioCheck1 || ratioCheck2){
            warningStr = "Abnormal ratio detected"
        }
        if ((data.area1 != null && data.area1.length>0) && data.area2 != null && data.area2.length>0 && data.area3 != null && data.area3.length>0){
            if (warningStr.length>0){
                warningStr = warningStr+", ";
            }
            warningStr = warningStr+"3 alleles";
        }
        if (Number.parseInt(data.area1) === 0 || Number.parseInt(data.area2) === 0){
            if (warningStr.length>0){
                warningStr = warningStr+", ";
            }
            warningStr = warningStr+"Absent marker"
        }
        return warningStr;
    }

    render(){
        return (
            <>
                <h2>Genotype Table</h2>
                <p>In the following interactive example, transcribe the peak area values into a genotype table (enter "0" if the marker is absent). The table will automatically calculate the values and inform you if there are any warnings you should take into consideration.</p>
                <h5>Possible warnings:</h5>
                <ul>
                    <li>Ratio: 2 peaks seen, non normal ratio</li>
                    <li>3 alleles: 3 peaks seen</li>
                    <li>Absent: marker not seen (i.e. for Y chrom specific markers in biological female)</li>
                </ul>
                <Card>
                    <Card.Body>
                        <TransformWrapper initialScale={0.5} minScale={0.4} maxScale={2} centerOnInit={true}>
                            {({ zoomIn, zoomOut, resetTransform }) => (
                                <React.Fragment>
                                    <div className="tools"  className="mb-2">
                                        <Button variant="outline-primary" className="mr-2 py-1" onClick={() => zoomIn()}>Zoom In</Button>
                                        <Button variant="outline-primary" className="mr-2 py-1" onClick={() => zoomOut()}>Zoom Out</Button>
                                        <Button variant="outline-primary" className="mr-2 py-1" onClick={() => resetTransform()}>Reset</Button>
                                    </div>
                                    <TransformComponent wrapperStyle={{width:"100%",height:600}}>
                                        <img src={this.props.data.image} alt="Normal Male Key" />
                                    </TransformComponent>
                                </React.Fragment>
                            )}

                        </TransformWrapper>
                    </Card.Body>
                </Card>
            <div className="my-4 py-2" style={{maxHeight:500,overflowY:"scroll"}}>
                <Table >
                        <thead>
                            <tr>
                                <th style={{position:"sticky",top:"-9px",background:"#f3f3f3"}}>Marker</th>
                                <th style={{position:"sticky",top:"-9px",background:"#f3f3f3"}}>Area 1</th>
                                <th style={{position:"sticky",top:"-9px",background:"#f3f3f3"}}>Area 2</th>
                                <th style={{position:"sticky",top:"-9px",background:"#f3f3f3"}}>Area 3</th>
                                <th style={{position:"sticky",top:"-9px",background:"#f3f3f3"}}>A1/A2</th>
                                <th style={{position:"sticky",top:"-9px",background:"#f3f3f3"}}>Warning</th>
                                <th style={{position:"sticky",top:"-9px",background:"#f3f3f3"}}>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(this.state.tableState).map((key)=>{
                                return (
                                    <tr>
                                        <td>{key}</td>
                                        <td><input style={{width:70}} type="number" onInput={(e) => e.target.value = e.target.value.slice(0, 5)} value={this.state.tableState[key].area1} onChange={(e)=>{this.onValueChange(key,"area1",e.target.value)}}/></td>
                                        <td><input style={{width:70}} type="text" onInput={(e) => e.target.value = e.target.value.slice(0, 5)} maxLength={5} value={this.state.tableState[key].area2} onChange={(e)=>{this.onValueChange(key,"area2",e.target.value)}}/></td>
                                        <td><input style={{width:70}} disabled={key==="AMEL" || key==="TAF9L"} type="text" onInput={(e) => e.target.value = e.target.value.slice(0, 5)} maxLength={5} value={this.state.tableState[key].area3} onChange={(e)=>{this.onValueChange(key,"area3",e.target.value)}}/></td>
                                        <td>{this.state.tableState[key].ratio}</td>
                                        <td style={{color:"red"}}>{this.state.tableState[key].warning}</td>
                                        <td style={{width:300}}>{this.state.tableState[key].notes}</td>
                                    </tr>
                                )
                            },this)}
                        
                        </tbody>
                    </Table>                                   
            </div>
            
                <Button onClick={this.props.onClickNext} style={{width: 100,marginLeft:"auto"}}>Next</Button>
            </>

        )
    }
}
export default GenotypeTable;